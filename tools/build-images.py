#!/usr/bin/env python3
"""
Prépare les visuels du site à partir des photos originales.

    python3 tools/build-images.py

Source  : assets/originals/bastila-poulet.jpg, assets/originals/bastila-poisson.jpg
          (photos verticales, plat centré)
Sortie  : public/images/*.jpg  +  public/og.jpg

Chaque photo produit trois cadrages — portrait (héros), carré (carte produit) et
gros plan (sections éditoriales) — plus un fond flouté et l'image de partage.
Les cadrages sont exprimés en fractions de l'image source : pour recadrer
autrement, il suffit de modifier CROPS ci-dessous et de relancer le script.

Le traitement reste volontairement léger : redimensionnement en deux passes,
micro-contraste, accentuation. Aucune retouche qui trahirait le produit réel.
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image, ImageEnhance, ImageFilter
except ImportError:
    sys.exit("Pillow est requis :  pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "originals"
OUT = ROOT / "public" / "images"
PUBLIC = ROOT / "public"

# Centre du plat dans chaque photo, en fraction (x, y) — sert d'ancre à tous les cadrages.
CENTER = {
    "poulet": (0.480, 0.515),
    "poisson": (0.500, 0.520),
}

# nom -> (ratio largeur/hauteur, largeur de sortie, zoom, décalage vertical du centre)
# `zoom` = fraction de la largeur source retenue ; plus il est petit, plus on serre.
CROPS = {
    "": (4 / 5, 1440, 0.98, -0.04),  # portrait — héros (marge haute pour l'arche)
    "-square": (1 / 1, 1400, 0.95, 0.00),  # carré — carte produit
    "-detail": (3 / 2, 1500, 0.76, -0.02),  # gros plan — sections éditoriales
}

JPEG = dict(quality=84, optimize=True, progressive=True, subsampling="4:2:0")


def crop_box(size, center, ratio, zoom, dy):
    """Fenêtre de recadrage centrée sur le plat, ramenée dans les bords de l'image."""
    w, h = size
    cw = w * zoom
    ch = cw / ratio
    if ch > h:  # jamais plus haut que la source
        ch = h
        cw = ch * ratio
    cx = center[0] * w
    cy = (center[1] + dy) * h
    x = min(max(cx - cw / 2, 0), w - cw)
    y = min(max(cy - ch / 2, 0), h - ch)
    return (round(x), round(y), round(x + cw), round(y + ch))


def finish(im: Image.Image, width: int, height: int) -> Image.Image:
    """Réduction en deux passes puis accentuation — la netteté survit au downscale."""
    if im.width > width * 2:
        im = im.resize((width * 2, height * 2), Image.LANCZOS)
    im = im.resize((width, height), Image.LANCZOS)
    im = ImageEnhance.Color(im).enhance(1.04)
    im = ImageEnhance.Contrast(im).enhance(1.03)
    return im.filter(ImageFilter.UnsharpMask(radius=1.1, percent=58, threshold=3))


def build_variant(name: str) -> dict[str, tuple[int, int]]:
    src = Image.open(SRC / f"bastila-{name}.jpg").convert("RGB")
    sizes = {}
    for suffix, (ratio, width, zoom, dy) in CROPS.items():
        height = round(width / ratio)
        box = crop_box(src.size, CENTER[name], ratio, zoom, dy)
        out = finish(src.crop(box), width, height)
        rel = f"/images/bastila-{name}{suffix}.jpg"
        out.save(OUT / Path(rel).name, **JPEG)
        sizes[rel] = (width, height)
    return sizes


def build_texture(width=1600, height=900) -> dict[str, tuple[int, int]]:
    """Fond du bloc final : croûte dorée, floutée et assombrie — jamais lisible comme photo."""
    src = Image.open(SRC / "bastila-poisson.jpg").convert("RGB")
    box = crop_box(src.size, CENTER["poisson"], width / height, 0.99, 0.0)
    im = src.crop(box).resize((width, height), Image.LANCZOS)
    im = im.filter(ImageFilter.GaussianBlur(radius=26))
    im = ImageEnhance.Color(im).enhance(1.12)
    im = ImageEnhance.Brightness(im).enhance(0.86)
    im.save(OUT / "texture-warm.jpg", quality=72, optimize=True, progressive=True)
    return {"/images/texture-warm.jpg": (width, height)}


def build_og(width=1200, height=630):
    """Image de partage : les deux bastilas côte à côte, séparées par un filet or."""
    gap = 4
    panel = ((width - gap) // 2, height)
    canvas = Image.new("RGB", (width, height), (201, 162, 74))
    for i, name in enumerate(("poulet", "poisson")):
        src = Image.open(SRC / f"bastila-{name}.jpg").convert("RGB")
        box = crop_box(src.size, CENTER[name], panel[0] / panel[1], 0.90, 0.0)
        im = finish(src.crop(box), *panel)
        canvas.paste(im, (i * (panel[0] + gap), 0))
    canvas.save(PUBLIC / "og.jpg", quality=82, optimize=True, progressive=True)
    print(f"  /og.jpg  {width}×{height}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    sizes: dict[str, tuple[int, int]] = {}
    for name in ("poulet", "poisson"):
        sizes |= build_variant(name)
    sizes |= build_texture()
    build_og()

    print("\nÀ reporter dans lib/business.ts → IMAGE_SIZE :\n")
    for rel, (w, h) in sizes.items():
        print(f'  "{rel}": {{ width: {w}, height: {h} }},')


if __name__ == "__main__":
    main()

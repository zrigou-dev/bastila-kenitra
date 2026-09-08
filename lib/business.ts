/**
 * Source de vérité : info.jpeg (affiche fournie par le commerçant).
 * Rien n'est inventé ici : marque, ville, numéro et tarifs viennent de l'affiche.
 * المصدر الوحيد للمعلومات: الملصق الذي قدّمه صاحب المشروع (info.jpeg)
 */

export const BRAND_LATIN = "pastilla Kénitra";
export const BRAND_AR = "بسطيلة القنيطرة";

/** 06 81 98 80 86 → format international marocain */
export const PHONE_DISPLAY = "06 81 98 80 86";
export const PHONE_INTL = "212681988086";
export const PHONE_TEL = "+212681988086";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://pastilla-kenitra.vercel.app";

export type Servings = 4 | 6 | 8 | 10 | 12;
export const SERVINGS: readonly Servings[] = [4, 6, 8, 10, 12] as const;

export type VariantId = "poulet" | "poisson";

/** Tarifs en dirhams, relevés sur l'affiche. */
export const PRICES: Record<VariantId, Record<Servings, number>> = {
  poulet: { 4: 250, 6: 400, 8: 500, 10: 600, 12: 700 },
  poisson: { 4: 350, 6: 600, 8: 700, 10: 800, 12: 1000 },
};

/** Un visuel et ses dimensions intrinsèques — évite tout décalage au chargement. */
export type Photo = { src: string; width: number; height: number };

const photo = (src: string, width: number, height: number): Photo => ({ src, width, height });

/**
 * Trois cadrages par recette, générés depuis les photos originales par
 * `python3 tools/build-images.py` (qui affiche les dimensions à reporter ici) :
 * portrait pour le héros, carré pour la carte produit, gros plan pour les bandeaux.
 */
export const PHOTOS: Record<VariantId, { portrait: Photo; square: Photo; detail: Photo }> = {
  poulet: {
    portrait: photo("/images/pastilla-poulet.jpg", 1440, 1800),
    square: photo("/images/pastilla-poulet-square.jpg", 1400, 1400),
    detail: photo("/images/pastilla-poulet-detail.jpg", 1500, 1000),
  },
  poisson: {
    portrait: photo("/images/pastilla-poisson.jpg", 1440, 1800),
    square: photo("/images/pastilla-poisson-square.jpg", 1400, 1400),
    detail: photo("/images/pastilla-poisson-detail.jpg", 1500, 1000),
  },
};

/** Fond flouté du bloc final — décoratif, jamais lisible comme photo produit. */
export const TEXTURE = photo("/images/texture-warm.jpg", 1600, 900);

export const MIN_PRICE = PRICES.poulet[4];
export const MAX_PRICE = PRICES.poisson[12];

export function waLink(message: string): string {
  return `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`;
}

export function pricePerPerson(price: number, servings: number): number {
  return Math.round(price / servings);
}

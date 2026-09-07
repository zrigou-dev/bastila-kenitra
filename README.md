# Bastila Kénitra — site vitrine / موقع بسطيلة القنيطرة

Landing page bilingue **arabe (par défaut) / français** pour une activité de bastilas
faites maison à Kénitra. Site 100 % statique, sans backend : la seule action externe
est l'ouverture de WhatsApp.

- Arabe : `/` — `lang="ar"`, `dir="rtl"`
- Français : `/fr` — `lang="fr"`, `dir="ltr"`

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # sert le build
npm run lint
```

## Déploiement sur Vercel

1. Pousser le dépôt sur GitHub/GitLab.
2. Sur Vercel : **New Project** → importer le dépôt. Le framework Next.js est détecté,
   aucune configuration supplémentaire n'est nécessaire.
3. Ajouter la variable d'environnement `NEXT_PUBLIC_SITE_URL` avec le domaine final
   (ex. `https://bastila-kenitra.ma`). Elle alimente les balises canoniques,
   l'Open Graph, les `hreflang` et le `sitemap.xml`.
4. Déployer.

Aucune base de données, aucune route API, aucune authentification.

---

## Les photos

Les deux photos originales du produit vivent dans **`assets/originals/`** (hors du
dossier servi) :

```
assets/originals/bastila-poulet.jpg     # la classique — sucre glace, amandes, briouates
assets/originals/bastila-poisson.jpg    # la marine — crevettes, citron, sur plateau
```

`python3 tools/build-images.py` en dérive tous les visuels du site et les écrit dans
`public/` :

| Fichier | Format | Où il sert |
|---|---|---|
| `bastila-<recette>.jpg` | portrait 4:5 | héros (en arche), section « occasions » |
| `bastila-<recette>-square.jpg` | carré | cartes produits, données structurées |
| `bastila-<recette>-detail.jpg` | 3:2 | bandeau de gros plans, médaillon |
| `texture-warm.jpg` | 16:9 flouté | fond du bloc final |
| `og.jpg` | 1200 × 630 | image de partage (les deux recettes côte à côte) |

Le script recadre autour du **centre du plat**, déclaré en fractions dans
`CENTER`, puis applique les formats décrits dans `CROPS`. Pour resserrer un
cadrage ou déplacer un centre, modifier ces deux tables et relancer — rien
d'autre à toucher. Le traitement se limite à un redimensionnement en deux passes,
un micro-contraste et une accentuation : aucune retouche qui trahirait le produit.

### Remplacer les photos

Déposer les nouveaux fichiers dans `assets/originals/` **en gardant ces deux noms**,
relancer `python3 tools/build-images.py`, puis reporter les dimensions affichées par
le script dans `lib/business.ts` → `PHOTOS` (elles évitent tout décalage de mise en
page au chargement).

Si les nouvelles photos ne sont pas verticales ou si le plat n'est pas centré,
ajuster `CENTER` et `CROPS` en tête du script avant de relancer.

### Brief photo (30 minutes, à la maison)

| Élément | Recommandation |
|---|---|
| Lumière | Près d'une fenêtre, en journée, **sans flash** et sans éclairage jaune de plafond |
| Fond | Nappe unie sombre, bois, ou plateau en cuivre — rien de chargé |
| Angles | 1 vue du dessus, 1 vue à 45°, 1 gros plan sur la croûte et les amandes |
| Moment | Bastila **juste sortie du four**, encore brillante |
| La part | 1 photo avec une part coupée : on doit voir la garniture — c'est **la** photo qui fait vendre |
| Format | Photo verticale, plat centré, au moins 2000 px de large |

---

## Modifier les informations commerciales

Toutes les données factuelles (nom, ville, téléphone, tarifs) viennent de l'affiche
fournie par le commerçant et sont centralisées dans **`lib/business.ts`** :

```ts
export const PHONE_DISPLAY = "06 81 98 80 86";
export const PHONE_INTL = "212681988086";   // format international, sans « + »
export const PRICES = {
  poulet:  { 4: 250, 6: 400, 8: 500, 10: 600, 12: 700 },
  poisson: { 4: 350, 6: 600, 8: 700, 10: 800, 12: 1000 },
};
```

Changer un prix ici le met à jour partout : cartes produits, tableau des tarifs,
messages WhatsApp pré-remplis et données structurées Schema.org.

## Modifier les textes

Les deux langues sont dans **`lib/content.ts`** (`ar` et `fr`), typées par le même
objet `Content` : si une clé manque dans une langue, le build échoue. C'est voulu.

## Structure

```
app/[[...lang]]/     layout (html lang/dir, métadonnées, polices) + page
app/globals.css      design system (couleurs, typographie, motifs, arche, RTL)
components/          sections et composants d'interface
lib/business.ts      données factuelles + table des visuels
lib/content.ts       textes arabe + français
lib/i18n.ts          langues, chemins, direction
assets/originals/    photos sources (non servies)
tools/build-images.py  génère public/images/* et public/og.jpg
```

## Choix techniques

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS**, entièrement pré-rendu
  (`generateStaticParams`) — deux pages HTML statiques.
- **Deux composants client seulement** : le sélecteur de format et le menu mobile.
  Tout le reste est en composants serveur.
- **CSS injecté dans le HTML** (`experimental.inlineCss`) : aucune requête bloquant
  le rendu.
- **Polices variables** (Reem Kufi + Cairo pour l'arabe, Cormorant Garamond + Manrope
  pour le latin), sans préchargement : le navigateur ne télécharge que la paire
  réellement utilisée par la page.
- **RTL** via les propriétés logiques CSS (`ms-`, `pe-`, `start-`, `text-start`…),
  pas de feuille de style miroir séparée.
- **Animations d'apparition sans JavaScript** (`animation-timeline: view()`), avec
  respect de `prefers-reduced-motion`.
- **Données structurées** : `FoodEstablishment`, `Product` × 2, `FAQPage`, `WebSite`.
  Aucun avis, note, horaire, adresse postale ou coordonnée GPS n'est déclaré : ces
  informations ne figurent pas sur l'affiche et ne doivent pas être inventées.

## Ce qui n'est volontairement pas sur le site

Aucun témoignage, aucune note, aucun badge de certification, aucun délai de livraison
chiffré, aucune composition d'ingrédients détaillée. Rien de tout cela n'est documenté. Pour en ajouter, il faut d'abord que ce soit vrai — et le dire dans
`lib/content.ts`.
# -bastila-kenitra

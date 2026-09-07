/**
 * Silhouette d'arche marocaine, partagée par toutes les photos encadrées.
 * Rendue une seule fois par page ; les éléments la portent via `.arch`
 * (`clip-path: url(#arch-clip)` dans globals.css).
 *
 * Le tracé est en unités relatives : il s'étire avec l'élément découpé, quel
 * que soit son format. Symétrique, donc identique en RTL.
 */
export function ArchClip() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
      <defs>
        <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0 0.955
               C0 0.988 0.012 1 0.045 1
               L0.955 1
               C0.988 1 1 0.988 1 0.955
               L1 0.42
               C1 0.19 0.83 0.045 0.5 0
               C0.17 0.045 0 0.19 0 0.42
               Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

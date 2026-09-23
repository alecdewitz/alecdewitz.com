import { landDots, manhattanDots, viewBox } from "../_data/nyc-map";

export function NycMap() {
  return (
    <figure className="nyc-map">
      <svg viewBox={viewBox} aria-hidden="true">
        <path className="nyc-map__land" d={landDots} />
        <path className="nyc-map__home" d={manhattanDots} />
      </svg>
      <figcaption>Manhattan</figcaption>
    </figure>
  );
}

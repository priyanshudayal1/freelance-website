/**
 * Hand-drawn geometry for blueprint diagrams.
 * Deterministic (no randomness — no hydration drift), slightly imperfect
 * on purpose: edges bow a pixel or two like a pencil stroke.
 */

/** A rectangle drawn by hand — each edge bows slightly. */
export function sketchRect(x: number, y: number, w: number, h: number): string {
  return [
    `M${x} ${y + 1}`,
    `Q${x + w / 2} ${y - 1.5} ${x + w} ${y + 1.5}`,
    `Q${x + w + 1.5} ${y + h / 2} ${x + w - 0.5} ${y + h - 1}`,
    `Q${x + w / 2} ${y + h + 1.5} ${x} ${y + h - 1.5}`,
    `Q${x - 1.5} ${y + h / 2} ${x} ${y + 1}`,
    "Z",
  ].join(" ");
}

/** A circle drawn by hand — four slightly uneven arcs. */
export function sketchCircle(cx: number, cy: number, r: number): string {
  return [
    `M${cx - r} ${cy}`,
    `Q${cx - r * 0.95} ${cy - r * 0.98} ${cx} ${cy - r}`,
    `Q${cx + r * 1.02} ${cy - r * 0.9} ${cx + r} ${cy}`,
    `Q${cx + r * 0.93} ${cy + r} ${cx} ${cy + r}`,
    `Q${cx - r * 1.03} ${cy + r * 0.93} ${cx - r} ${cy}`,
    "Z",
  ].join(" ");
}

/** A decision diamond, drawn by hand. */
export function sketchDiamond(
  cx: number,
  cy: number,
  w: number,
  h: number,
): string {
  const hw = w / 2;
  const hh = h / 2;
  return [
    `M${cx - hw} ${cy}`,
    `Q${cx - hw / 2} ${cy - hh / 2 - 1.5} ${cx} ${cy - hh}`,
    `Q${cx + hw / 2 + 1.5} ${cy - hh / 2} ${cx + hw} ${cy}`,
    `Q${cx + hw / 2} ${cy + hh / 2 + 1.5} ${cx} ${cy + hh}`,
    `Q${cx - hw / 2 - 1.5} ${cy + hh / 2} ${cx - hw} ${cy}`,
    "Z",
  ].join(" ");
}

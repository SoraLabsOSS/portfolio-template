/**
 * Remounts on navigation (unlike layout). Page enter animation is handled by
 * `<PageFade>` via CSS — not the View Transitions API — so backdrop-filter on
 * the bottom fade stays live.
 */
export default function Template({ children }: LayoutProps<"/">) {
  return children;
}

/**
 * Smooth-scroll helpers. Per the design spec, never use scrollIntoView — always
 * window.scrollTo so we control the fixed-nav offset.
 */
const NAV_OFFSET = 56;

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

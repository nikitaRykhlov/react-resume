import { useEffect, useRef } from 'react';

const REDUCED = typeof window !== 'undefined'
  && window.matchMedia
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Returns a ref for a scroll-reveal element: starts at opacity 0 / translateY,
 * then transitions in once when it enters the viewport. Honors reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || REDUCED || !('IntersectionObserver' in window)) return;

    el.style.transition = 'opacity .7s cubic-bezier(.16,.84,.44,1), transform .7s cubic-bezier(.16,.84,.44,1)';
    el.style.opacity = '0';
    el.style.transform = 'translateY(26px)';
    el.style.willChange = 'opacity, transform';

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

import { useEffect, useRef } from 'react';
import type { Theme } from './usePrefs';

const REDUCED = typeof window !== 'undefined'
  && window.matchMedia
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Hero "flow lines" canvas + cursor spotlight. 16 sine-wave lines drift over
 * time and lift toward the pointer. Decorative — disabled under reduced-motion.
 * Algorithm ported verbatim from the handoff source (initHero).
 */
export function useHeroCanvas(theme: Theme) {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<Theme>(theme);
  themeRef.current = theme;

  useEffect(() => {
    const hero = heroRef.current;
    const cv = canvasRef.current;
    if (!hero || !cv || REDUCED) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let alive = true;
    let w = 0, h = 0, dpr = 1;

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      const r = hero.getBoundingClientRect();
      cv.width = Math.max(1, Math.floor(r.width * dpr));
      cv.height = Math.max(1, Math.floor(r.height * dpr));
      w = cv.width; h = cv.height;
    };
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: 0.5, y: 0.42, tx: 0.5, ty: 0.42 };
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = (e.clientY - r.top) / r.height;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${e.clientX - r.left}px,${e.clientY - r.top}px)`;
      }
    };
    hero.addEventListener('pointermove', onMove);

    const LINES = 16;
    let t = 0;
    const loop = () => {
      if (!alive) return;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      ctx.clearRect(0, 0, w, h);
      const dark = themeRef.current === 'dark';
      for (let i = 0; i < LINES; i++) {
        const p = i / (LINES - 1);
        const baseY = h * (0.1 + p * 0.82);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 16 * dpr) {
          const nx = x / w;
          const dist = nx - mouse.x;
          const bump = Math.exp(-dist * dist * 16) * (mouse.y - p) * h * 0.22;
          const y = baseY
            + Math.sin(nx * 6.0 + t * 0.6 + i * 0.5) * 13 * dpr * (0.4 + p * 0.6)
            + Math.sin(nx * 3.0 - t * 0.4 + i * 0.2) * 9 * dpr
            + bump;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        const wave = 0.35 + 0.65 * Math.sin(p * Math.PI);
        const a = (dark ? 0.13 : 0.10) * wave;
        const tealHi = 110 + Math.round(60 * p);
        ctx.strokeStyle = `rgba(${20 + Math.round(p * 25)},${184 + Math.round(p * 40)},${tealHi},${a})`;
        ctx.lineWidth = 1.2 * dpr;
        ctx.stroke();
      }
      t += 0.016;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      alive = false;
      window.removeEventListener('resize', resize);
      hero.removeEventListener('pointermove', onMove);
    };
  }, []);

  return { heroRef, canvasRef, spotRef };
}

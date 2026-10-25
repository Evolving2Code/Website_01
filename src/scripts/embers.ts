// Rising embers drawn on a canvas. Cheap by design: a pre-rendered glow
// sprite, a particle count scaled to screen size and CPU, a capped pixel
// ratio, and the loop stops whenever the canvas is off screen or the tab is
// hidden. Skipped entirely for reduced motion.

type Ember = {
  x: number;
  y: number;
  r: number;
  vy: number;
  sway: number;
  phase: number;
  life: number;
  max: number;
};

export function startEmbers() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.querySelector<HTMLCanvasElement>('[data-embers]');
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;

  const sprite = makeSprite();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cores = navigator.hardwareConcurrency || 4;
  let w = 0;
  let h = 0;
  let embers: Ember[] = [];
  let raf = 0;
  let last = 0;
  let visible = true;

  const spawn = (e: Partial<Ember> = {}): Ember => {
    const max = 5 + Math.random() * 7;
    return {
      x: Math.random() * w,
      y: h + Math.random() * 40,
      r: 0.6 + Math.random() * 1.8,
      vy: 18 + Math.random() * 42,
      sway: 6 + Math.random() * 22,
      phase: Math.random() * Math.PI * 2,
      life: 0,
      max,
      ...e,
    };
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.round(Math.min(90, (w * h) / 16000) * (cores <= 4 ? 0.6 : 1));
    embers = Array.from({ length: target }, () => {
      const e = spawn();
      // Start the field already in motion rather than all at the bottom.
      e.life = Math.random() * e.max;
      e.y = h - e.vy * e.life;
      return e;
    });
  };

  const frame = (t: number) => {
    const dt = Math.min((t - last) / 1000 || 0.016, 0.05);
    last = t;
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < embers.length; i++) {
      const e = embers[i];
      e.life += dt;
      e.y -= e.vy * dt;
      const p = e.life / e.max;
      if (p >= 1 || e.y < -20) {
        embers[i] = spawn();
        continue;
      }
      const x = e.x + Math.sin(e.phase + e.life * 1.3) * e.sway;
      // Bright when young, flickering, fading out as it rises
      const flicker = 0.75 + Math.sin(e.life * 9 + e.phase) * 0.25;
      ctx.globalAlpha = Math.max(0, (1 - p) * Math.min(1, p * 6) * flicker);
      const size = e.r * 10 * (1 - p * 0.5);
      ctx.drawImage(sprite, x - size / 2, e.y - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(frame);
  };

  const play = () => {
    if (raf || !visible || document.hidden) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  const pause = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  resize();
  new ResizeObserver(() => resize()).observe(canvas);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? play() : pause();
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? pause() : play()));
  canvas.classList.add('is-live');
  play();
}

function makeSprite() {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255, 236, 200, 1)');
  grad.addColorStop(0.12, 'rgba(255, 170, 90, 0.95)');
  grad.addColorStop(0.35, 'rgba(224, 119, 58, 0.35)');
  grad.addColorStop(1, 'rgba(224, 119, 58, 0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
}

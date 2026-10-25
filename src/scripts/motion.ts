// Site-wide motion. Everything here is enhancement: markup is fully visible
// without it, and none of it runs when the visitor prefers reduced motion.
//
// Hooks:
//   [data-hero="n"]   hero elements, revealed in order n on page load
//   [data-hero-arch]  the hero's arch, which opens upward like a hearth
//   [data-unveil]     an image frame that opens as it scrolls into view
//   [data-reveal]     text that settles in as it scrolls into view
//   [data-parallax]   an image layer that drifts slightly with scroll
//   [data-embers]     a canvas of rising embers (see embers.ts)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  heroIntro();
  unveils();
  reveals();
  parallax();
  root.classList.add('motion-ready');
});

mm.add('(prefers-reduced-motion: reduce)', () => {
  root.classList.remove('js-motion');
});

if (document.querySelector('[data-embers]')) {
  import('./embers').then(({ startEmbers }) => startEmbers());
}

function heroIntro() {
  const items = gsap.utils
    .toArray<HTMLElement>('[data-hero]')
    .sort((a, b) => Number(a.dataset.hero) - Number(b.dataset.hero));
  if (!items.length) return;

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.1 });
  const arch = document.querySelector<HTMLElement>('[data-hero-arch]');

  items.forEach((el, i) => {
    const at = 0.15 + i * 0.12;
    if (el === arch) {
      const media = el.querySelector('.photo__media');
      tl.fromTo(
        el,
        { opacity: 1, clipPath: 'inset(100% 0% 0% 0% round 999px 999px 0 0)' },
        { clipPath: 'inset(0% 0% 0% 0% round 999px 999px 0 0)', duration: 1.6, ease: 'expo.inOut' },
        0,
      );
      if (media) tl.fromTo(media, { scale: 1.25 }, { scale: 1, duration: 2.2, ease: 'expo.out' }, 0.1);
    } else if (el.hasAttribute('data-hero-line')) {
      tl.fromTo(el, { opacity: 1, yPercent: 110 }, { yPercent: 0, duration: 1.3 }, 0.35 + i * 0.1);
    } else {
      tl.fromTo(el, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1 }, at + 0.6);
    }
  });
}

function unveils() {
  gsap.utils.toArray<HTMLElement>('[data-unveil]').forEach((el) => {
    const arched = el.classList.contains('arch');
    const shape = arched ? ' round 999px 999px 0 0' : '';
    const media = el.querySelector('.photo__media');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
    tl.fromTo(
      el,
      { clipPath: `inset(100% 0% 0% 0%${shape})` },
      { clipPath: `inset(0% 0% 0% 0%${shape})`, duration: 1.4, ease: 'expo.inOut', clearProps: 'clipPath' },
    );
    if (media) tl.fromTo(media, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0.1);
  });
}

function reveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.08 },
      ),
  });
  // Hide only what is still below the fold, so nothing on screen flickers.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight * 0.9) gsap.set(el, { opacity: 0 });
  });
}

function parallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((layer) => {
    gsap.fromTo(
      layer,
      { yPercent: -7, scale: 1.16 },
      {
        yPercent: 7,
        scale: 1.16,
        ease: 'none',
        scrollTrigger: { trigger: layer.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      },
    );
  });
}

// Images that load late change layout height; keep trigger positions honest.
window.addEventListener('load', () => ScrollTrigger.refresh());

/**
 * Heat On — motion e interação.
 * Regras (04_MOTION_AND_INTERACTION_SPEC.md):
 * quieto por padrão; movimento explica estado/progresso; paralaxe ≤ 4%;
 * animações param fora da viewport; reduced-motion remove tudo além de fades.
 */

import { sections } from '../content/site';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Reveals no scroll ---------- */
function setupReveals(): void {
  const targets = document.querySelectorAll<HTMLElement>('.reveal');
  if (!targets.length) return;

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => io.observe(el));
}

/* ---------- Header: superfície ao sair do hero ---------- */
function setupHeaderState(): void {
  const header = document.getElementById('site-header');
  const hero = document.getElementById('hero');
  if (!header || !hero) return;

  const io = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('is-scrolled', !(entry && entry.isIntersecting));
    },
    { rootMargin: '-72px 0px 0px 0px', threshold: 0 }
  );

  io.observe(hero);
}

/* ---------- Scrollspy: SECTION no header ---------- */
function setupScrollspy(): void {
  const indicator = document.getElementById('section-indicator');
  if (!indicator) return;

  const names = new Map<Element, string>();
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el) names.set(el, section.name);
  }
  if (!names.size) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const name = names.get(entry.target);
          if (name) indicator.textContent = name;
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  names.forEach((_name, el) => io.observe(el));
}

/* ---------- INDEX overlay ---------- */
function setupIndexOverlay(): void {
  const toggle = document.getElementById('index-toggle');
  const closeBtn = document.getElementById('index-close');
  const overlay = document.getElementById('index-overlay') as HTMLDialogElement | null;
  if (!toggle || !overlay) return;

  const sync = (): void => {
    toggle.setAttribute('aria-expanded', overlay.open ? 'true' : 'false');
  };

  toggle.addEventListener('click', () => {
    if (overlay.open) overlay.close();
    else overlay.showModal();
    sync();
  });

  closeBtn?.addEventListener('click', () => {
    overlay.close();
  });

  overlay.addEventListener('close', sync);

  overlay.querySelectorAll<HTMLAnchorElement>('[data-overlay-link]').forEach((link) => {
    link.addEventListener('click', () => {
      overlay.close();
    });
  });
}

/* ---------- Hero: vídeo adiado, crossfade quando pronto ---------- */
function setupHeroVideo(): void {
  const video = document.getElementById('hero-video') as HTMLVideoElement | null;
  if (!video) return;

  const src = video.dataset.src;
  if (!src) return;

  type NetworkInfo = { saveData?: boolean };
  const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  // Reduced motion, mobile e rede econômica ficam no poster.
  if (reducedMotion.matches || isMobile || connection?.saveData) return;

  const load = (): void => {
    video.src = src;
    video.addEventListener(
      'canplaythrough',
      () => {
        video
          .play()
          .then(() => video.classList.add('is-playing'))
          .catch(() => {
            /* autoplay bloqueado: permanece o poster */
          });
      },
      { once: true }
    );
    video.load();
  };

  if (document.readyState === 'complete') load();
  else window.addEventListener('load', load, { once: true });
}

/* ---------- Signal line do método: desenha 1x por entrada ---------- */
function setupMethodSignal(): void {
  const wrap = document.getElementById('method-signal');
  if (!wrap) return;

  if (reducedMotion.matches) {
    wrap.classList.add('is-drawn');
    return;
  }

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        wrap.classList.add('is-drawn');
        io.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  io.observe(wrap);
}

/* ---------- Paralaxe sutil (≤ 4%), desktop apenas ---------- */
function setupParallax(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!els.length) return;
  if (reducedMotion.matches) return;
  if (window.matchMedia('(max-width: 1199px)').matches) return;

  let ticking = false;

  const update = (): void => {
    ticking = false;
    const vh = window.innerHeight;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const factor = Math.min(parseFloat(el.dataset.parallax ?? '0.03'), 0.04);
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      el.style.transform = `translateY(${(-progress * factor * rect.height).toFixed(1)}px)`;
    });
  };

  const onScroll = (): void => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
}

/* ---------- Formulário: endpoint pendente ---------- */
function setupContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (status) {
      status.textContent =
        'O envio ainda não está configurado. Este formulário será ativado em breve.';
    }
  });
}

setupReveals();
setupHeaderState();
setupScrollspy();
setupIndexOverlay();
setupHeroVideo();
setupMethodSignal();
setupParallax();
setupContactForm();

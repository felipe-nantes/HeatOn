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

  const close = (): void => {
    overlay.close();
    sync();
  };

  toggle.addEventListener('click', () => {
    if (overlay.open) overlay.close();
    else overlay.showModal();
    sync();
  });

  closeBtn?.addEventListener('click', close);

  // Cobre Esc e fechamentos programáticos.
  overlay.addEventListener('close', sync);
  overlay.addEventListener('cancel', () => queueMicrotask(sync));

  overlay.querySelectorAll<HTMLAnchorElement>('[data-overlay-link]').forEach((link) => {
    link.addEventListener('click', close);
  });
}

/* ----------------------------------------------------------------------
 * Hero: sequência rápida de clipes reais.
 * Desktop: playlist embaralhada por visita, cortes secos nos trims
 * aprovados, buffer duplo (um vídeo toca, o outro pré-carrega o próximo).
 * Mobile: montagem concatenada 4:5 em loop. Falha → montagem desktop em loop.
 * Reduced motion / Save-Data: apenas o poster.
 * -------------------------------------------------------------------- */
interface HeroClip {
  src: string;
  start: number;
  end: number;
}

function setupHeroVideo(): void {
  const wrap = document.getElementById('hero-media');
  const a = document.getElementById('hero-video') as HTMLVideoElement | null;
  const b = document.getElementById('hero-video-b') as HTMLVideoElement | null;
  if (!wrap || !a || !b) return;

  type NetworkInfo = { saveData?: boolean };
  const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  if (reducedMotion.matches || connection?.saveData) return;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  // Visibilidade guiada pelo evento: qualquer caminho que inicie a
  // reprodução revela o vídeo.
  [a, b].forEach((video) => {
    video.addEventListener('playing', () => video.classList.add('is-playing'));
  });

  /** play() com retentativas (rejeições transitórias de autoplay). */
  const tryPlay = (
    video: HTMLVideoElement,
    attempts: number,
    onOk?: () => void,
    interval = 800
  ): void => {
    video
      .play()
      .then(() => onOk?.())
      .catch(() => {
        if (attempts > 0) {
          window.setTimeout(() => tryPlay(video, attempts - 1, onOk, interval), interval);
        }
      });
  };

  /* Textura sobreposta (blend screen no CSS): mesma política de motion/dados. */
  const overlay = document.getElementById('hero-overlay') as HTMLVideoElement | null;
  const overlaySrc = overlay?.dataset.src;
  if (overlay && overlaySrc) {
    const startOverlay = (): void => {
      overlay.src = overlaySrc;
      overlay.addEventListener('canplay', () => tryPlay(overlay, 8), { once: true });
      overlay.load();
    };
    if (document.readyState === 'complete') startOverlay();
    else window.addEventListener('load', startOverlay, { once: true });
  }

  /* Resgate: se o autoplay foi negado, tenta de novo quando a página fica
     visível ou na primeira interação (vídeo mudo — retomar é permitido). */
  const rescue = (): void => {
    const current = [a, b].find((v) => v.currentSrc && v.classList.contains('is-playing'))
      ?? [a, b].find((v) => v.currentSrc);
    if (current && current.paused) void current.play().catch(() => {});
  };
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) rescue();
  });
  ['pointerdown', 'keydown', 'touchstart'].forEach((ev) =>
    window.addEventListener(ev, rescue, { once: true, passive: true })
  );

  const playSingleLoop = (video: HTMLVideoElement, src: string): void => {
    video.loop = true;
    video.src = src;
    video.addEventListener(
      'canplaythrough',
      () => tryPlay(video, 12),
      { once: true }
    );
    video.load();
  };

  /* Mobile: montagem 4:5 já picotada, em loop. */
  if (isMobile) {
    const src = wrap.dataset.mobile;
    if (!src) return;
    if (wrap.dataset.posterMobile) a.poster = wrap.dataset.posterMobile;
    const start = (): void => playSingleLoop(a, src);
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return;
  }

  let clips: HeroClip[] = [];
  try {
    clips = JSON.parse(wrap.dataset.clips ?? '[]') as HeroClip[];
  } catch {
    clips = [];
  }
  const fallbackSrc = wrap.dataset.fallback;

  if (clips.length < 2) {
    if (fallbackSrc) {
      const start = (): void => playSingleLoop(a, fallbackSrc);
      if (document.readyState === 'complete') start();
      else window.addEventListener('load', start, { once: true });
    }
    return;
  }

  const shuffle = (list: HeroClip[]): HeroClip[] => {
    const out = [...list];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j]!, out[i]!];
    }
    return out;
  };

  let order = shuffle(clips);
  let pos = 0;
  let active = a;
  let standby = b;
  let failed = false;

  const clipOf = new WeakMap<HTMLVideoElement, HeroClip>();

  const nextClip = (): HeroClip => {
    if (pos >= order.length) {
      const last = order[order.length - 1];
      order = shuffle(clips);
      if (order.length > 1 && order[0] === last) {
        [order[0], order[1]] = [order[1]!, order[0]!];
      }
      pos = 0;
    }
    return order[pos++]!;
  };

  const preload = (video: HTMLVideoElement, clip: HeroClip): void => {
    clipOf.set(video, clip);
    video.src = clip.src;
    video.load();
  };

  const enterFallback = (): void => {
    if (failed) return;
    failed = true;
    a.classList.remove('is-playing');
    b.classList.remove('is-playing');
    if (fallbackSrc) playSingleLoop(a, fallbackSrc);
  };

  /* Corte seco: uma troca em voo por vez, com destrava vinculada à tentativa. */
  let swapping = false;
  let swapGuard = 0;

  const releaseSwap = (): void => {
    if (swapGuard) {
      clearTimeout(swapGuard);
      swapGuard = 0;
    }
    swapping = false;
  };

  const swap = (): void => {
    if (swapping) return;
    const target = standby;
    const clip = clipOf.get(target);
    if (!clip) return;
    swapping = true;
    target.currentTime = clip.start;
    tryPlay(target, 2, () => {
      if (target !== standby) {
        releaseSwap();
        return;
      }
      active.classList.remove('is-playing');
      active.pause();
      const t = active;
      active = standby;
      standby = t;
      preload(standby, nextClip());
      releaseSwap();
    });
    // Destrava só esta tentativa, caso todas as retentativas falhem.
    swapGuard = window.setTimeout(releaseSwap, 2400);
  };

  /* Corte no frame certo via rAF; `timeupdate` (~4x/s) é a rede de segurança
     para quando o rAF está suspenso (aba em segundo plano, economia de energia). */
  let rafId = 0;
  let heroVisible = true;

  const checkCut = (): void => {
    if (failed || !heroVisible) return;
    const clip = clipOf.get(active);
    // Com uma troca em voo, aguarda o corte em vez de rebobinar o plano atual.
    if (clip && !swapping && !active.paused && active.currentTime >= clip.end) {
      if (standby.readyState >= 3) {
        swap();
      } else {
        // Próximo ainda não pronto: repete o trim sem cortar para preto.
        active.currentTime = clip.start;
      }
    }
  };

  const tick = (): void => {
    rafId = 0;
    if (failed || !heroVisible) return;
    checkCut();
    rafId = requestAnimationFrame(tick);
  };

  const startTicker = (): void => {
    if (!rafId) rafId = requestAnimationFrame(tick);
  };

  const stopTicker = (): void => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  };

  /* Fora da viewport, a sequência para (regra de motion do handoff). */
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    new IntersectionObserver(([entry]) => {
      heroVisible = Boolean(entry?.isIntersecting);
      if (heroVisible) {
        startTicker();
        if (active.currentSrc) void active.play().catch(() => {});
        if (overlay?.currentSrc) void overlay.play().catch(() => {});
      } else {
        stopTicker();
        active.pause();
        overlay?.pause();
      }
    }).observe(heroSection);
  }

  [a, b].forEach((video) => {
    video.addEventListener('playing', startTicker);
    video.addEventListener('timeupdate', checkCut);
    video.addEventListener('ended', () => {
      if (video !== active || failed) return;
      if (!swapping && standby.readyState >= 3) {
        swap();
      } else {
        const clip = clipOf.get(video);
        if (clip) {
          video.currentTime = clip.start;
          void video.play().catch(() => {});
        }
      }
    });
    video.addEventListener('error', () => {
      if (video === active) enterFallback();
    });
  });

  const start = (): void => {
    const first = nextClip();
    preload(active, first);
    active.addEventListener(
      'canplaythrough',
      () => {
        active.currentTime = first.start;
        tryPlay(active, 12, () => {
          // Após o crossfade inicial, as trocas viram cortes secos.
          window.setTimeout(() => {
            a.classList.add('no-fade');
            b.classList.add('no-fade');
          }, 450);
          preload(standby, nextClip());
        });
      },
      { once: true }
    );
  };

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}

/* ---------- Sequências de mídia real: passo ativo controla o frame sticky ---------- */
function setupSequences(): void {
  document.querySelectorAll<HTMLElement>('[data-sequence]').forEach((root) => {
    const steps = [...root.querySelectorAll<HTMLElement>('.seq-step')];
    const frames = [...root.querySelectorAll<HTMLElement>('.seq-frame')];
    const stateName = root.querySelector<HTMLElement>('.seq-state-name');
    if (steps.length < 2 || frames.length !== steps.length) return;

    const names = steps.map(
      (s) => s.querySelector('.seq-step-name')?.textContent?.trim() ?? ''
    );

    const activate = (index: number): void => {
      steps.forEach((s, j) => s.classList.toggle('is-active', j === index));
      frames.forEach((f, j) => f.classList.toggle('is-active', j === index));
      if (stateName && names[index]) stateName.textContent = names[index];
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activate(steps.indexOf(entry.target as HTMLElement));
          }
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
    );

    steps.forEach((s) => io.observe(s));
  });
}

/* ---------- Hero: parallax no scroll + pausa fora da viewport ---------- */
function setupHeroScroll(): void {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  // Pausa marquee/granulado/zoom quando o hero não está visível.
  const pauseIO = new IntersectionObserver(([entry]) => {
    heroSection.classList.toggle('is-offscreen', !(entry && entry.isIntersecting));
  });
  pauseIO.observe(heroSection);

  if (reducedMotion.matches) return;
  if (window.matchMedia('(max-width: 767px)').matches) return;

  const media = heroSection.querySelector<HTMLElement>('.hero-media');
  // O símbolo agora recorta o fundo por máscara + backdrop-filter, sem
  // mix-blend-mode: o transform pode ir no próprio elemento.
  const symbol = [...heroSection.querySelectorAll<HTMLElement>('.hero-symbol')];
  const copy = heroSection.querySelector<HTMLElement>('.hero-microcopy');
  if (!media && !symbol.length && !copy) return;

  let ticking = false;

  const update = (): void => {
    ticking = false;
    const heroH = heroSection.offsetHeight || 1;
    const progress = Math.min(Math.max(window.scrollY / heroH, 0), 1);
    // Fundo desce e conteúdo sobe. A spec de motion sugere teto de 4% por
    // elemento; ampliado a pedido do cliente para a profundidade ficar
    // perceptível — a separação relativa entre as camadas é o que se lê.
    const push = (progress * heroH * 0.05).toFixed(1);
    const lift = (-progress * heroH * 0.08).toFixed(1);
    if (media) media.style.transform = `translate3d(0, ${push}px, 0)`;
    for (const el of symbol) el.style.transform = `translate3d(0, ${lift}px, 0)`;
    if (copy) copy.style.transform = `translate3d(0, ${lift}px, 0)`;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
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
setupHeroScroll();
setupSequences();
setupMethodSignal();
setupParallax();
setupContactForm();

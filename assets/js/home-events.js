/* ============================================
   BEST Vienna — Events Page Interaction
   ============================================ */

(function () {
  'use strict';

  /* ---------- Event data (shared source: assets/js/events-data.js) ---------- */
  const EVENTS = BEST_EVENTS;

  /* ---------- Render cards & dots from EVENTS data ---------- */
  function hexToRgb(hex) {
    return parseInt(hex.slice(1, 3), 16) + ',' +
           parseInt(hex.slice(3, 5), 16) + ',' +
           parseInt(hex.slice(5, 7), 16);
  }

  function renderCards() {
    const cardsEl = document.getElementById('evCards');
    const dotsEl  = document.getElementById('evDots');
    if (!cardsEl || !dotsEl) return;

    const entries = Object.entries(EVENTS);

    cardsEl.innerHTML = entries.map(function ([id, ev], i) {
      const num        = String(i + 1).padStart(2, '0');
      const extraClass = ev.abbr === '?' ? ' ev-card--placeholder' : '';
      const bgStyle    = ev.image
        ? ' style="background-image: linear-gradient(160deg, rgba(' + hexToRgb(ev.colorA) + ',0.55) 0%, rgba(' + hexToRgb(ev.colorB) + ',0.72) 100%), url(\'' + ev.image + '\'); background-size: cover; background-position: center;"'
        : '';

      return (
        '<div class="ev-card' + extraClass + '" data-event="' + id + '" style="--ca:' + ev.colorA + ';--cb:' + ev.colorB + '" role="listitem" tabindex="0" aria-label="' + ev.name + '">' +
        '<div class="ev-card-bg" aria-hidden="true"' + bgStyle + '></div>' +
        '<div class="ev-card-overlay" aria-hidden="true"></div>' +
        '<div class="ev-card-body">' +
        '<div class="ev-card-abbr">' + ev.abbr + '</div>' +
        '<div class="ev-card-name">' + ev.name + '</div>' +
        '</div>' +
        '<div class="ev-card-num" aria-hidden="true">' + num + '</div>' +
        '</div>'
      );
    }).join('');

    dotsEl.innerHTML = entries.map(function ([id, ev]) {
      return '<button class="ev-dot" data-target="' + id + '" role="tab" aria-label="' + ev.name + '"></button>';
    }).join('');
  }

  renderCards();

  /* ---------- DOM refs ---------- */
  const stage     = document.getElementById('evStage');
  const evCards   = document.getElementById('evCards');
  const featured  = document.getElementById('evFeatured');
  const featBg    = document.getElementById('evFeatBg');
  const featTag   = document.getElementById('evFeatTag');
  const featTitle = document.getElementById('evFeatTitle');
  const featDesc  = document.getElementById('evFeatDesc');
  const featFacts = document.getElementById('evFeatFacts');
  const featCta   = document.getElementById('evFeatCta');
  const featDeco  = document.getElementById('evFeatDeco');
  const featClose = document.getElementById('evFeatClose');
  const featImage = document.getElementById('evFeatImage');
  const featImg   = document.getElementById('evFeatImg');
  const hint      = document.getElementById('evHint');
  const dots      = () => [...document.querySelectorAll('.ev-dot')];
  const cards     = () => [...document.querySelectorAll('.ev-card')];

  if (!stage) return;

  let activeEvent  = null;
  let isAnimating  = false;

  /* ---------- Populate featured panel ---------- */
  function populateFeatured(id) {
    const ev = EVENTS[id];
    if (!ev) return;

    featBg.style.setProperty('--feat-ca', ev.colorA);
    featBg.style.setProperty('--feat-cb', ev.colorB);
    featTag.textContent   = ev.tag;
    featTitle.textContent = ev.name;
    featDesc.textContent  = ev.desc;
    featCta.textContent   = ev.homeCta.text;
    featCta.href          = ev.homeCta.href;
    featDeco.textContent  = ev.abbr;

    featFacts.innerHTML = ev.facts
      .map(f => `<li><span aria-hidden="true">${f.icon}</span>${f.text}</li>`)
      .join('');

    // Image support: show photo on left, push text right
    const featured = document.getElementById('evFeatured');
    if (ev.image) {
      featImg.src = ev.image;
      featImg.alt = ev.name;
      featured.classList.add('has-image');
    } else {
      featImg.src = '';
      featImg.alt = '';
      featured.classList.remove('has-image');
    }
  }

  /* ---------- Sync dots ---------- */
  function syncDots(id) {
    dots().forEach(d => {
      const active = d.dataset.target === id;
      d.classList.toggle('active', active);
      d.setAttribute('aria-selected', active);
    });
  }

  /* ---------- FLIP helpers ---------- */
  function recordRects() {
    return cards().map(c => c.getBoundingClientRect());
  }

  function applyFlipInvert(first, last) {
    cards().forEach((card, i) => {
      const dx = first[i].left  - last[i].left;
      const dy = first[i].top   - last[i].top;
      const sx = first[i].width / last[i].width;
      const sy = first[i].height/ last[i].height;
      card.style.transition    = 'none';
      card.style.transformOrigin = 'top left';
      card.style.transform     = `translate(${dx}px,${dy}px) scale(${sx},${sy})`;
    });
  }

  function playFlip(dur = '0.55s cubic-bezier(0.4,0,0.2,1)') {
    return new Promise(resolve => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          cards().forEach(card => {
            card.style.transition = `transform ${dur}`;
            card.style.transform  = '';
          });
          setTimeout(() => {
            cards().forEach(card => {
              card.style.transition    = '';
              card.style.transform     = '';
              card.style.transformOrigin = '';
            });
            resolve();
          }, 600);
        });
      });
    });
  }

  /* ---------- Open (grid → featured + strip) ---------- */
  function openEvent(id) {
    if (isAnimating) return;
    isAnimating = true;
    activeEvent = id;

    // Mark active card
    cards().forEach(c => c.classList.toggle('active', c.dataset.event === id));
    syncDots(id);

    // Hide hint
    hint.classList.add('hidden');

    // Populate featured content before panel opens
    populateFeatured(id);

    // FIRST: record current card positions
    const first = recordRects();

    // Apply layout: featured panel grows (CSS), cards become strip (grid change)
    stage.classList.add('has-active');
    evCards.classList.add('strip-mode');

    // Force reflow so browser computes final layout
    stage.offsetHeight;

    // LAST: record new card positions
    const last = recordRects();

    // INVERT + PLAY
    applyFlipInvert(first, last);
    playFlip().then(() => { isAnimating = false; });
  }

  /* ---------- Switch (strip → different card) ---------- */
  function switchEvent(id) {
    activeEvent = id;
    cards().forEach(c => c.classList.toggle('active', c.dataset.event === id));
    syncDots(id);

    // Fade content out, swap, fade in
    stage.classList.add('ev-fading');
    setTimeout(() => {
      populateFeatured(id);
      stage.classList.remove('ev-fading');
    }, 220);
  }

  /* ---------- Close (strip → grid) ---------- */
  function closeEvent() {
    if (isAnimating) return;
    isAnimating = true;

    // Fade everything out
    stage.classList.add('ev-closing');
    featured.style.transition = 'opacity 0.25s ease';
    featured.style.opacity    = '0';

    cards().forEach(card => {
      card.style.transition = 'opacity 0.25s ease';
      card.style.opacity    = '0';
    });

    setTimeout(() => {
      // Restore hint
      hint.classList.remove('hidden');

      // FIRST: strip positions (but invisible)
      const first = recordRects();

      // Reset layout state
      activeEvent = null;
      cards().forEach(c => c.classList.remove('active'));
      stage.classList.remove('has-active', 'ev-closing');
      evCards.classList.remove('strip-mode');
      syncDots(null);

      // Reset featured panel opacity (handled by CSS transition)
      featured.style.transition = '';
      featured.style.opacity    = '';

      // Force reflow
      stage.offsetHeight;

      // LAST: grid positions
      const last = recordRects();

      // Restore card visibility and FLIP from strip→grid
      cards().forEach(card => {
        card.style.transition = 'none';
        card.style.opacity    = '1';
      });

      stage.offsetHeight;

      // INVERT + PLAY
      applyFlipInvert(first, last);
      playFlip().then(() => { isAnimating = false; });

    }, 280);
  }

  /* ---------- Main activate function ---------- */
  function activate(id) {
    if (activeEvent === id) {
      closeEvent();
    } else if (activeEvent) {
      switchEvent(id);
    } else {
      openEvent(id);
    }
  }

  /* ---------- Event listeners ---------- */
  cards().forEach(card => {
    card.addEventListener('click', () => activate(card.dataset.event));

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(card.dataset.event);
      }
      if (e.key === 'Escape') closeEvent();

      // Arrow key navigation
      const all = cards();
      const idx = all.indexOf(card);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        all[(idx + 1) % all.length].focus();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        all[(idx - 1 + all.length) % all.length].focus();
      }
    });
  });

  dots().forEach(dot => {
    dot.addEventListener('click', () => activate(dot.dataset.target));
  });

  featClose.addEventListener('click', closeEvent);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && activeEvent) closeEvent();
  });

})();

/* ============================================
   BEST Vienna — Events Page Interaction
   ============================================ */

(function () {
  'use strict';

  /* ---------- Event data ---------- */
  const EVENTS = {
    sc: {
      abbr: 'SC',
      name: 'BEST Course in Summer',
      tag: 'Academic & Cultural',
      desc: 'Each summer, TU Wien students can apply for a fully-funded 10-day academic course hosted by one of 84 BEST groups across Europe. Immerse yourself in cutting-edge tech, make lifelong friends, and explore a new country — all for free.',
      facts: [
        { icon: '🗓', text: 'July – August' },
        { icon: '📍', text: 'Across Europe' },
        { icon: '⏱', text: '~10 days' },
        { icon: '🎓', text: 'Open to TU Wien students' },
      ],
      cta: { text: 'Apply Now', href: 'mailto:vienna-bestcourses@best-eu.org' },
      colorA: '#e8521a', colorB: '#7a1e05',
    },
    arm: {
      abbr: 'aRM',
      name: 'Autumn Regional Meeting',
      tag: 'Internal BEST Event',
      desc: 'The Autumn Regional Meeting gathers BEST members from across Central Europe for a weekend of workshops, discussions, and networking. Vienna takes the stage as host, organizing sessions on internal strategy and future planning.',
      facts: [
        { icon: '🗓', text: 'October – November' },
        { icon: '📍', text: 'Vienna, Austria' },
        { icon: '⏱', text: '3 days' },
        { icon: '👥', text: 'BEST members & delegates' },
      ],
      cta: { text: 'Learn More', href: 'mailto:vienna@best-eu.org' },
      colorA: '#1e6aaa', colorB: '#0b1e36',
    },
    bw: {
      abbr: 'beWANTED',
      name: 'beWANTED',
      tag: 'Career & Industry',
      desc: "Vienna's flagship career fair, bridging TU Wien students with top engineering and tech companies. From casual networking to on-site interviews — land your next internship, thesis project, or full-time position.",
      facts: [
        { icon: '🗓', text: 'Spring semester' },
        { icon: '📍', text: 'TU Wien campus' },
        { icon: '⏱', text: '1–2 days' },
        { icon: '🎓', text: 'Open to TU Wien students' },
      ],
      cta: { text: 'Meet Companies', href: 'mailto:vienna@best-eu.org' },
      colorA: '#0d8aaa', colorB: '#044f65',
    },
    mw: {
      abbr: 'MW',
      name: 'Motivational Weekends',
      tag: 'Social & Community',
      desc: 'Fun-packed weekend adventures organized for bonding and friendship. Team games, hiking, city trips, and unforgettable evenings — the perfect way to connect with BEST Vienna members and explore Austria.',
      facts: [
        { icon: '🗓', text: 'Throughout the year' },
        { icon: '📍', text: 'Austria & beyond' },
        { icon: '⏱', text: '2–3 days' },
        { icon: '🎉', text: 'BEST members & friends' },
      ],
      cta: { text: 'Join the Fun', href: 'mailto:vienna@best-eu.org' },
      colorA: '#7b52b8', colorB: '#3d1f6a',
    },
    ph1: {
      abbr: '?',
      name: 'Coming Soon',
      tag: 'New Event',
      desc: "Something exciting is in the making. Stay tuned for updates on our next event — coming soon to BEST Vienna. Follow our social media for the latest announcements.",
      facts: [
        { icon: '🗓', text: 'TBA' },
        { icon: '📍', text: 'TBA' },
        { icon: '⏱', text: 'TBA' },
        { icon: '👤', text: 'TBA' },
      ],
      cta: { text: 'Stay Tuned', href: 'https://www.instagram.com/bestvienna' },
      colorA: '#3a8a6a', colorB: '#1a3a2a',
    },
    ph2: {
      abbr: '?',
      name: 'Coming Soon',
      tag: 'New Event',
      desc: "Another exciting event is being planned for the BEST Vienna calendar. Follow us on social media for the latest announcements, dates, and how to get involved.",
      facts: [
        { icon: '��', text: 'TBA' },
        { icon: '📍', text: 'TBA' },
        { icon: '⏱', text: 'TBA' },
        { icon: '👤', text: 'TBA' },
      ],
      cta: { text: 'Follow Us', href: 'https://www.instagram.com/bestvienna' },
      colorA: '#9a6a2a', colorB: '#3a2010',
    },
  };

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
  const hint      = document.getElementById('evHint');
  const dots      = document.querySelectorAll('.ev-dot');
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
    featCta.textContent   = ev.cta.text;
    featCta.href          = ev.cta.href;
    featDeco.textContent  = ev.abbr;

    featFacts.innerHTML = ev.facts
      .map(f => `<li><span aria-hidden="true">${f.icon}</span>${f.text}</li>`)
      .join('');
  }

  /* ---------- Sync dots ---------- */
  function syncDots(id) {
    dots.forEach(d => {
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

  dots.forEach(dot => {
    dot.addEventListener('click', () => activate(dot.dataset.target));
  });

  featClose.addEventListener('click', closeEvent);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && activeEvent) closeEvent();
  });

})();

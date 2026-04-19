/* ============================================
   BEST Vienna — Events Page Interaction
   ============================================ */

(function () {
  'use strict';

  const arena  = document.querySelector('.ev-arena');
  const panels = document.querySelectorAll('.ev-panel');
  const dots   = document.querySelectorAll('.ev-dot');

  if (!arena || !panels.length) return;

  let activeEvent = null;

  function activate(eventId) {
    if (activeEvent === eventId) {
      // Click same → deselect
      deactivate();
      return;
    }

    activeEvent = eventId;
    arena.classList.add('has-active');

    panels.forEach(p => {
      if (p.dataset.event === eventId) {
        p.classList.add('active');
        p.querySelector('.ev-panel-detail').removeAttribute('aria-hidden');
        p.setAttribute('aria-expanded', 'true');
      } else {
        p.classList.remove('active');
        const detail = p.querySelector('.ev-panel-detail');
        detail.setAttribute('aria-hidden', 'true');
        p.setAttribute('aria-expanded', 'false');
      }
    });

    dots.forEach(d => {
      d.classList.toggle('active', d.dataset.target === eventId);
      d.setAttribute('aria-selected', d.dataset.target === eventId ? 'true' : 'false');
    });
  }

  function deactivate() {
    activeEvent = null;
    arena.classList.remove('has-active');

    panels.forEach(p => {
      p.classList.remove('active');
      p.querySelector('.ev-panel-detail').setAttribute('aria-hidden', 'true');
      p.removeAttribute('aria-expanded');
    });

    dots.forEach(d => {
      d.classList.remove('active');
      d.setAttribute('aria-selected', 'false');
    });
  }

  // Panel click / keyboard
  panels.forEach(panel => {
    panel.addEventListener('click', () => activate(panel.dataset.event));

    panel.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(panel.dataset.event);
      }
      if (e.key === 'Escape') deactivate();

      // Arrow navigation between panels
      const all = [...panels];
      const idx = all.indexOf(panel);
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

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => activate(dot.dataset.target));
  });

  // Escape to deselect
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') deactivate();
  });

  // Click outside arena to deselect
  document.addEventListener('click', e => {
    if (activeEvent && !arena.contains(e.target) && !e.target.closest('.ev-dot')) {
      deactivate();
    }
  });

})();

/* ============================================
   BEST Vienna — wordcloud.js
   Mentimeter-inspired canvas word cloud
   ============================================ */

(function () {
  const WORDS = [
    { text: 'BEST',          weight: 10 },
    { text: 'Vienna',        weight: 9  },
    { text: 'Technology',    weight: 8  },
    { text: 'Students',      weight: 7  },
    { text: 'Europe',        weight: 7  },
    { text: 'Community',     weight: 6  },
    { text: 'International', weight: 6  },
    { text: 'Events',        weight: 5  },
    { text: 'Network',       weight: 5  },
    { text: 'Non-profit',    weight: 5  },
    { text: 'Engineering',   weight: 4  },
    { text: 'Courses',       weight: 4  },
    { text: 'TU Wien',       weight: 4  },
    { text: 'Exchange',      weight: 3  },
    { text: 'Career',        weight: 3  },
    { text: 'Volunteer',     weight: 3  },
    { text: '30 Countries',  weight: 3  },
    { text: '84 LBGs',       weight: 3  },
    { text: 'beWANTED',      weight: 2  },
    { text: 'aRM',           weight: 2  },
    { text: 'BSE',           weight: 2  },
    { text: 'Since 1989',    weight: 2  },
    { text: 'Culture',       weight: 2  },
    { text: 'Friends',       weight: 2  },
  ];

  // Palette from colorcodes spec
  const COLORS = [
    '#003751',  // navy
    '#db5e26',  // orange
    '#ed925f',  // orange-light
    '#515e66',  // subtitle
    '#738891',  // gray
    '#b84e1f',  // orange-dark
  ];

  function weightToSize(w) {
    // weight 2-10 maps to fontSize 14-72px
    return Math.round(14 + (w - 2) * (72 - 14) / 8);
  }

  function drawWordCloud() {
    const container = document.querySelector('.wordcloud-menti');
    const canvas    = document.getElementById('wordcloudCanvas');
    if (!canvas || !container) return;

    // Set canvas pixel dimensions
    const dpr = window.devicePixelRatio || 1;
    const W   = container.clientWidth;
    const H   = container.clientHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);

    // Occupancy bitmap — 4px grid
    const CELL = 4;
    const gW = Math.ceil(W / CELL);
    const gH = Math.ceil(H / CELL);
    const occupied = new Uint8Array(gW * gH);

    function isOccupied(x, y, w, h) {
      const margin = 4;
      const x0 = Math.max(0, Math.floor((x - margin) / CELL));
      const y0 = Math.max(0, Math.floor((y - margin) / CELL));
      const x1 = Math.min(gW - 1, Math.ceil((x + w + margin) / CELL));
      const y1 = Math.min(gH - 1, Math.ceil((y + h + margin) / CELL));
      for (let gy = y0; gy <= y1; gy++) {
        for (let gx = x0; gx <= x1; gx++) {
          if (occupied[gy * gW + gx]) return true;
        }
      }
      return false;
    }

    function markOccupied(x, y, w, h) {
      const x0 = Math.max(0, Math.floor(x / CELL));
      const y0 = Math.max(0, Math.floor(y / CELL));
      const x1 = Math.min(gW - 1, Math.ceil((x + w) / CELL));
      const y1 = Math.min(gH - 1, Math.ceil((y + h) / CELL));
      for (let gy = y0; gy <= y1; gy++) {
        for (let gx = x0; gx <= x1; gx++) {
          occupied[gy * gW + gx] = 1;
        }
      }
    }

    // Sort by weight descending
    const sorted = [...WORDS].sort((a, b) => b.weight - a.weight);

    // Archimedean spiral placement
    const cx = W / 2;
    const cy = H / 2;

    for (let i = 0; i < sorted.length; i++) {
      const word  = sorted[i];
      const size  = weightToSize(word.weight);
      const color = COLORS[i % COLORS.length];
      // Alternate rotations: horizontal for big words, occasional ±90° for small
      const angles = [0];
      if (word.weight <= 4) angles.push(Math.PI / 2);
      if (word.weight <= 3) angles.push(-Math.PI / 2);

      let placed = false;

      for (const angle of angles) {
        if (placed) break;

        ctx.save();
        ctx.font = `700 ${size}px 'Poppins', sans-serif`;
        const metrics = ctx.measureText(word.text);
        const tw = metrics.width;
        const th = size;

        // Spiral search
        let t = 0;
        const maxT = 1200;
        const a = 0.35, b = 0.45;

        while (t < maxT) {
          const r  = a + b * t;
          const px = cx + r * Math.cos(t) - (angle === 0 ? tw / 2 : th / 2);
          const py = cy + r * Math.sin(t) - (angle === 0 ? th / 2 : tw / 2);
          const bw = angle === 0 ? tw : th;
          const bh = angle === 0 ? th : tw;

          if (
            px >= 4 && py >= 4 &&
            px + bw <= W - 4 && py + bh <= H - 4 &&
            !isOccupied(px, py, bw, bh)
          ) {
            markOccupied(px, py, bw, bh);
            ctx.restore();
            ctx.save();
            ctx.translate(px + bw / 2, py + bh / 2);
            ctx.rotate(angle);
            ctx.font = `700 ${size}px 'Poppins', sans-serif`;
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(word.text, 0, 0);
            ctx.restore();
            placed = true;
            break;
          }
          t += 0.07;
        }

        if (!placed) ctx.restore();
      }
    }
  }

  function init() {
    // Wait for fonts
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(drawWordCloud);
    } else {
      setTimeout(drawWordCloud, 400);
    }

    // Redraw on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(drawWordCloud, 180);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

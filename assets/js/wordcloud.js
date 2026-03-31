(function () {
  const words = [
    { text: 'BEST', weight: 90 },
    { text: 'Vienna', weight: 80 },
    { text: 'Community', weight: 70 },
    { text: 'Technology', weight: 65 },
    { text: 'Students', weight: 60 },
    { text: 'Europe', weight: 58 },
    { text: 'Engineering', weight: 52 },
    { text: 'Events', weight: 50 },
    { text: 'Courses', weight: 48 },
    { text: 'Network', weight: 46 },
    { text: 'Innovation', weight: 44 },
    { text: 'Teamwork', weight: 42 },
    { text: 'Diversity', weight: 40 },
    { text: 'Leadership', weight: 38 },
    { text: 'Sustainability', weight: 36 },
    { text: 'Fun', weight: 34 },
    { text: 'Hackathon', weight: 32 },
    { text: 'TU Wien', weight: 30 },
    { text: 'BESC', weight: 28 },
    { text: 'International', weight: 28 },
    { text: 'Career', weight: 26 },
    { text: 'Projects', weight: 24 },
    { text: 'Sports', weight: 22 },
    { text: 'Culture', weight: 22 },
    { text: 'Exchange', weight: 20 },
    { text: 'Friendship', weight: 20 },
    { text: 'Research', weight: 18 },
    { text: 'Networking', weight: 18 },
    { text: 'Austria', weight: 16 },
    { text: 'Motivation', weight: 16 },
  ];

  const colors = ['#003751', '#db5e26', '#ed925f', '#515e66', '#738891', '#b84e1f', '#005a80'];

  function draw(el) {
    const w = el.offsetWidth || 700;
    const h = el.offsetHeight || 420;

    // clear any previous render
    while (el.firstChild) el.removeChild(el.firstChild);

    el.setAttribute('viewBox', `0 0 ${w} ${h}`);
    el.setAttribute('width', w);
    el.setAttribute('height', h);

    const fontScale = d3.scaleLinear()
      .domain([d3.min(words, d => d.weight), d3.max(words, d => d.weight)])
      .range([13, Math.min(w, h) * 0.17]);

    d3.layout.cloud()
      .size([w, h])
      .words(words.map(d => ({ text: d.text, size: fontScale(d.weight) })))
      .padding(7)
      .rotate(() => (Math.floor(Math.random() * 5) - 2) * 30)
      .font('Poppins')
      .fontWeight('700')
      .fontSize(d => d.size)
      .spiral('archimedean')
      .on('end', function (placed) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('transform', `translate(${w / 2},${h / 2})`);
        placed.forEach(function (d, i) {
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.setAttribute('text-anchor', 'middle');
          text.setAttribute('transform', `translate(${d.x},${d.y})rotate(${d.rotate})`);
          text.setAttribute('font-size', d.size + 'px');
          text.setAttribute('font-family', 'Poppins, sans-serif');
          text.setAttribute('font-weight', '700');
          text.setAttribute('fill', colors[i % colors.length]);
          text.style.userSelect = 'none';
          text.textContent = d.text;
          g.appendChild(text);
        });
        el.appendChild(g);
      })
      .start();
  }

  function init() {
    const svgEl = document.getElementById('wordcloudSvg');
    if (!svgEl) return;
    if (typeof d3 === 'undefined' || typeof d3.layout === 'undefined') {
      setTimeout(init, 100);
      return;
    }
    draw(svgEl);
    // re-draw on resize for responsiveness
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { draw(svgEl); }, 250);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

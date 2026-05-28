(function () {
  const words = [
    { text: 'friendship',             weight: 72 },
    { text: 'fun',                    weight: 85 },
    { text: 'europe',                 weight: 63 },
    { text: 'improvement',            weight: 41 },
    { text: 'international',          weight: 78 },
    { text: 'belonging',              weight: 55 },
    { text: 'feeling of community',   weight: 90 },
    { text: 'flexibility',            weight: 38 },
    { text: 'growth',                 weight: 67 },
    { text: 'international events',   weight: 52 },
    { text: 'international friends',  weight: 59 },
    { text: 'international opportunities', weight: 44 },
    { text: 'krtek',                  weight: 30 },
    { text: 'networking',             weight: 70 },
    { text: 'new skills',             weight: 48 },
    { text: 'open mindedness',        weight: 61 },
    { text: 'people',                 weight: 83 },
    { text: 'purpose',                weight: 46 },
    { text: 'sandbox',                weight: 33 },
    { text: 'travel',                 weight: 76 },
    { text: 'travelling',             weight: 57 },
    { text: 'adventures',             weight: 65 },
    { text: 'endless opportunities',  weight: 50 },
    { text: 'designing',              weight: 36 },
    { text: 'developing students',    weight: 43 },
    { text: 'dog?',                   weight: 28 },
    { text: 'empowered diversity',    weight: 54 },
    { text: 'experimentation',        weight: 39 },
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
      .rotate(() => Math.random() < 0.7 ? 0 : 90)
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
    // Wait for fonts to load so d3-cloud measures Poppins correctly
    const run = function () { draw(svgEl); };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(run);
    } else {
      run();
    }
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

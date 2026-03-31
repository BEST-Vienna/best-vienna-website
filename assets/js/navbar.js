(function () {
  const HTML = `
  <header class="navbar">
    <div class="container navbar-inner">
      <a href="index.html" class="nav-logo">
        <img src="assets/images/BESTViennaSVG.svg" alt="BEST Vienna" />
      </a>

      <nav class="nav-links" aria-label="Main navigation">
        <a href="index.html" data-page="index">HOME</a>
        <a href="https://www.bestvienna.at/events" data-page="events">EVENTS</a>
        <a href="https://www.bestvienna.at/news" data-page="courses">COURSES</a>
        <a href="https://www.bestvienna.at/about" data-page="about">ABOUT US</a>
        <a href="board.html" data-page="board">BOARD</a>
        <a href="faq.html" data-page="faq">FAQ</a>
        <a href="https://forms.gle/giR4ARjsJGW3wWr38" class="nav-apply-btn">APPLY!</a>
      </nav>

      <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="container">
      <nav class="mobile-nav" aria-label="Mobile navigation">
        <a href="index.html">HOME</a>
        <a href="https://www.bestvienna.at/events">EVENTS</a>
        <a href="https://www.bestvienna.at/news">COURSES</a>
        <a href="https://www.bestvienna.at/about">ABOUT US</a>
        <a href="board.html">BOARD</a>
        <a href="faq.html">FAQ</a>
        <a href="https://forms.gle/giR4ARjsJGW3wWr38">APPLY!</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  </header>`;

  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;
  placeholder.outerHTML = HTML;

  // Mark active link based on current filename
  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();

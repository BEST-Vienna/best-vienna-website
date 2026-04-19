(function () {
  const HTML = `
  <footer class="site-footer">
    <div class="container footer-cols">
      <div class="footer-col">
        <img src="assets/images/best_logomark.png" alt="BEST Vienna" class="footer-logo" />
        <p class="footer-tagline">Board of European Students of Technology — Vienna Local Group since 1989.</p>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-title">Pages</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="https://www.bestvienna.at/news">Courses</a></li>
          <li><a href="https://www.bestvienna.at/about">About Us</a></li>
          <li><a href="board.html">Board</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-title">Connect</h4>
        <ul class="footer-links">
          <li><a href="mailto:vienna@best-eu.org">vienna@best-eu.org</a></li>
          <li><a href="https://www.instagram.com/bestvienna" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://www.tiktok.com/@best_vienna" target="_blank" rel="noopener">TikTok</a></li>
          <li><a href="https://www.linkedin.com/company/best-vienna/" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="http://facebook.com/BEST.Vienna" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href="https://www.flickr.com/photos/136321467@N02/" target="_blank" rel="noopener">Flickr</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bar">
      <p>© 2025 BEST Vienna | All Rights Reserved | <a href="https://www.bestvienna.at/impressum">Impressum</a></p>
    </div>
  </footer>`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = HTML;
})();

(function () {
  'use strict';

  var CONSENT_KEY = 'bv-analytics-consent'; // 'granted' | 'denied'
  var GA_ID = 'G-Q09MJLS86E';

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      /* localStorage unavailable — consent choice won't persist, banner will re-show */
    }
  }

  // Google Analytics is only ever requested from here, and only after explicit opt-in.
  function loadAnalytics() {
    if (window.__bvAnalyticsLoaded) return;
    window.__bvAnalyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }

  function buildBanner() {
    var wrap = document.createElement('div');
    wrap.id = 'cookie-consent-banner';
    wrap.className = 'cookie-banner';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-live', 'polite');
    wrap.setAttribute('aria-label', 'Cookie consent');
    wrap.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">' +
          'We\'d like to use Google Analytics to understand how visitors use our site. ' +
          'It only runs if you click "Accept" — you can change your mind anytime via the ' +
          '"Cookie Settings" link in the footer. See our ' +
          '<a href="privacy.html">Privacy Policy</a> for details.' +
        '</p>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="btn btn-outline cookie-btn-reject">Reject</button>' +
          '<button type="button" class="btn btn-primary cookie-btn-accept">Accept</button>' +
        '</div>' +
      '</div>';
    return wrap;
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-consent-banner');
    if (!banner) return;
    banner.classList.remove('visible');
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 300);
  }

  function showBanner() {
    if (document.getElementById('cookie-consent-banner')) return;
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', showBanner);
      return;
    }

    var banner = buildBanner();
    document.body.appendChild(banner);
    requestAnimationFrame(function () {
      banner.classList.add('visible');
    });

    banner.querySelector('.cookie-btn-accept').addEventListener('click', function () {
      setConsent('granted');
      loadAnalytics();
      hideBanner();
    });
    banner.querySelector('.cookie-btn-reject').addEventListener('click', function () {
      setConsent('denied');
      // If analytics was already running (consent withdrawn via "Cookie Settings"),
      // a reload is the only way to actually stop it — an injected gtag script can't be unloaded.
      if (window.__bvAnalyticsLoaded) {
        location.reload();
      } else {
        hideBanner();
      }
    });
  }

  function init() {
    var consent = getConsent();
    if (consent === 'granted') {
      loadAnalytics();
    } else if (consent !== 'denied') {
      showBanner();
    }
  }

  // Lets the footer's "Cookie Settings" link reopen the banner to change consent later.
  document.addEventListener('click', function (e) {
    var target = e.target.closest && e.target.closest('#cookie-settings-link');
    if (target) {
      e.preventDefault();
      showBanner();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ============================================
   BEST Vienna — Events Detail Page Render
   Reads from the shared source assets/js/events-data.js
   (BEST_EVENTS). Full events render as detail sections;
   entries flagged `comingSoon` render as teaser cards.
   ============================================ */

(function () {
  "use strict";

  const detailsContainer = document.getElementById("eventDetails");
  const comingSoonGrid = document.getElementById("comingSoonGrid");

  if (!detailsContainer || !comingSoonGrid) return;

  const allEvents = Object.entries(BEST_EVENTS);
  const detailEvents = allEvents.filter(function ([, ev]) { return !ev.comingSoon; });
  const comingSoonEvents = allEvents.filter(function ([, ev]) { return ev.comingSoon; });

  detailsContainer.innerHTML = detailEvents
    .map(function ([id, event], index) {
      const tintClass = index % 2 === 1 ? " ev-detail-section--tint" : "";
      const imageOrderClass = index % 2 === 1 ? " image-second" : "";

      return (
        '<section class="section-pad ev-detail-section' + tintClass + '" id="event-' + id + '">' +
        '<div class="container">' +
        '<div class="about-split' + imageOrderClass + '">' +
        '<div class="about-split-img fade-up">' +
        '<img src="' + event.image + '" alt="' + event.name + '" />' +
        "</div>" +
        '<div class="about-split-text fade-up delay-2">' +
        '<span class="board-hero-label">' + event.tag + "</span>" +
        "<h2>" + event.name + "</h2>" +
        "<p>" + event.longDesc + "</p>" +
        '<div class="ev-detail-highlights">' +
        '<h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 12px; color: var(--navy);">What to expect</h4>' +
        "<ul>" +
        event.highlights.map(function (h) {
          return "<li>✓ " + h + "</li>";
        }).join("") +
        "</ul>" +
        "</div>" +
        '<div class="ev-detail-info">' +
        '<h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 12px; color: var(--navy);">Good to know</h4>' +
        "<dl>" +
        event.info.map(function (item) {
          return "<dt>" + item.label + "</dt><dd>" + item.value + "</dd>";
        }).join("") +
        "</dl>" +
        "</div>" +
        '<ul class="ev-detail-facts">' +
        event.facts.map(function (f) {
          return "<li><span aria-hidden=\"true\">" + f.icon + "</span>" + f.text + "</li>";
        }).join("") +
        "</ul>" +
        '<a href="' + event.detailCta.href + '" class="btn btn-primary">' + event.detailCta.text + "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>"
      );
    })
    .join("");

  comingSoonGrid.innerHTML = comingSoonEvents
    .map(function ([id, event]) {
      return (
        '<div class="ev-coming-card fade-up">' +
        '<div class="ev-coming-bg">' +
        '<img src="' + event.image + '" alt="' + event.name + '" />' +
        "</div>" +
        '<div class="ev-coming-body">' +
        '<div class="ev-coming-abbr">' + event.abbr + "</div>" +
        '<div class="ev-coming-tag">' + event.tag + "</div>" +
        "<p>" + event.desc + "</p>" +
        '<a href="' + event.detailCta.href + '" class="btn btn-outline" style="margin-top: 12px;">Follow Updates</a>' +
        "</div>" +
        "</div>"
      );
    })
    .join("");
})();

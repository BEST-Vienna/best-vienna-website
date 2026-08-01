/* ============================================
   BEST Vienna — Events Detail Page Data
   ============================================ */

const EVENT_DETAILS = {
  sc: {
    abbr: "SC",
    name: "BEST Course in Summer",
    tag: "Academic & Cultural",
    image: "assets/images/events/BEST_Course.jpg",
    colorA: "#e8521a",
    colorB: "#7a1e05",
    desc: "Each summer, TU Wien students can apply for a fully-funded 10-day academic course hosted by one of 84 BEST groups across Europe.",
    longDesc: "Immerse yourself in cutting-edge tech, make lifelong friends, and explore a new country — all completely free. Whether you're interested in cutting-edge technologies, business skills, or just want to experience a week outside the classroom, there's a course for you across Europe.",
    highlights: [
      "Fully funded — no costs, travel & accommodation included",
      "Hands-on workshops & lectures led by industry professionals",
      "Network with students from across Europe",
      "Explore a new country with fellow BEST Vienna members"
    ],
    info: [
      { label: "Cost", value: "Free for TU Wien students" },
      { label: "Who can apply", value: "All TU Wien students (BSc, MSc, any field)" },
      { label: "Language", value: "English" },
      { label: "Application", value: "Apply via email; deadlines vary by course. Contact us for this year's timeline." }
    ],
    facts: [
      { icon: "🗓", text: "July – August" },
      { icon: "📍", text: "Across Europe" },
      { icon: "⏱", text: "~10 days" },
      { icon: "🎓", text: "Open to TU Wien students" }
    ],
    cta: { text: "Learn More & Apply", href: "mailto:vienna-bestcourses@best-eu.org" }
  },

  arm: {
    abbr: "aRM",
    name: "Autumn Regional Meeting",
    tag: "Internal BEST Event",
    image: "assets/images/events/aRegionalMeeting.jpg",
    colorA: "#1e6aaa",
    colorB: "#0b1e36",
    desc: "The Autumn Regional Meeting gathers BEST members from across Central Europe for a weekend of workshops, discussions, and networking.",
    longDesc: "This is where Vienna shines as host — we organize strategy sessions, skill-building workshops, and social events that bring together BEST delegates and members from neighboring countries. It's a chance to meet the wider BEST community, learn how other local groups work, and shape the future of BEST in Central Europe.",
    highlights: [
      "Network with BEST members from Central European countries",
      "Attend workshops on leadership, event management, and strategy",
      "Join social activities and team-building games",
      "Help organize and co-host — a hands-on learning opportunity"
    ],
    info: [
      { label: "Who can attend", value: "BEST members (from Vienna or visiting groups)" },
      { label: "Commitment", value: "Volunteer to help organize; no special skills needed" },
      { label: "Language", value: "English & German" },
      { label: "More info", value: "Contact us to learn about the next meeting date and your role." }
    ],
    facts: [
      { icon: "🗓", text: "October – November" },
      { icon: "📍", text: "Vienna, Austria" },
      { icon: "⏱", text: "3 days" },
      { icon: "👥", text: "BEST members & delegates" }
    ],
    cta: { text: "Get Involved", href: "mailto:vienna@best-eu.org" }
  },

  bw: {
    abbr: "beWANTED",
    name: "beWANTED",
    tag: "Career & Industry",
    image: "assets/images/events/beWANTED.jpg",
    colorA: "#0d8aaa",
    colorB: "#044f65",
    desc: "Vienna's flagship career fair, bridging TU Wien students with top engineering and tech companies.",
    longDesc: "From casual networking to on-site interviews — land your next internship, thesis project, or full-time position. Companies from robotics, software, consulting, and more are looking to meet talented students like you. Whether you're exploring career paths or ready to apply, beWANTED is the place to make it happen.",
    highlights: [
      "Meet 30+ leading engineering and tech companies",
      "Attend talks and workshops on industry topics",
      "Participate in on-site interviews and networking sessions",
      "Discover internship, thesis, and full-time opportunities"
    ],
    info: [
      { label: "Who can attend", value: "All TU Wien students (no experience necessary)" },
      { label: "Cost", value: "Free to attend" },
      { label: "Language", value: "English" },
      { label: "Company list", value: "See participating companies on our website or contact us." }
    ],
    facts: [
      { icon: "🗓", text: "Spring semester" },
      { icon: "📍", text: "TU Wien campus" },
      { icon: "⏱", text: "1–2 days" },
      { icon: "🎓", text: "Open to TU Wien students" }
    ],
    cta: { text: "Save the Date", href: "mailto:vienna@best-eu.org" }
  },

  mw: {
    abbr: "MW",
    name: "Motivational Weekends",
    tag: "Social & Community",
    image: "assets/images/events/MotivationalWeekend.jpg",
    colorA: "#7b52b8",
    colorB: "#3d1f6a",
    desc: "Fun-packed weekend adventures organized for bonding and friendship. Team games, hiking, city trips, and unforgettable evenings.",
    longDesc: "The perfect way to connect with BEST Vienna members and explore Austria. Whether you're a new member or a long-time friend, these weekends are where real friendships happen — think hiking trails, city explorations, cozy evenings by the fire, and plenty of laughs.",
    highlights: [
      "Explore Austria: mountains, cities, and hidden gems",
      "Team games and competitions (yes, we're competitive!)",
      "Bonding activities and social nights",
      "Casual atmosphere — join for the whole weekend or just a day"
    ],
    info: [
      { label: "Who can join", value: "BEST members and friends" },
      { label: "Cost", value: "Usually €20–50 depending on destination; scholarships available" },
      { label: "Frequency", value: "Several throughout the year" },
      { label: "Sign up", value: "Announcements via email & Instagram. Contact us to join the mailing list." }
    ],
    facts: [
      { icon: "🗓", text: "Throughout the year" },
      { icon: "📍", text: "Austria & beyond" },
      { icon: "⏱", text: "2–3 days" },
      { icon: "🎉", text: "BEST members & friends" }
    ],
    cta: { text: "Join the Next One", href: "https://www.instagram.com/bestvienna" }
  }
};

const COMING_SOON = {
  ph1: {
    abbr: "G2K",
    name: "Coming Soon",
    tag: "New Event",
    image: "assets/images/events/G2K.jpg",
    desc: "Something exciting is in the making. Stay tuned for updates on our next event — follow our social media for the latest announcements.",
    cta: { text: "Follow Us", href: "https://www.instagram.com/bestvienna" }
  },
  ph2: {
    abbr: "BSE",
    name: "Coming Soon",
    tag: "New Event",
    image: "assets/images/events/BSE.jpg",
    desc: "Another exciting event is being planned for the BEST Vienna calendar. Follow us on social media for the latest announcements and how to get involved.",
    cta: { text: "Follow Us", href: "https://www.instagram.com/bestvienna" }
  }
};

(function () {
  "use strict";

  const detailsContainer = document.getElementById("eventDetails");
  const comingSoonGrid = document.getElementById("comingSoonGrid");

  if (!detailsContainer || !comingSoonGrid) return;

  detailsContainer.innerHTML = Object.entries(EVENT_DETAILS)
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
        '<a href="' + event.cta.href + '" class="btn btn-primary">' + event.cta.text + "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</section>"
      );
    })
    .join("");

  comingSoonGrid.innerHTML = Object.entries(COMING_SOON)
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
        '<a href="' + event.cta.href + '" class="btn btn-outline" style="margin-top: 12px;">Follow Updates</a>' +
        "</div>" +
        "</div>"
      );
    })
    .join("");
})();

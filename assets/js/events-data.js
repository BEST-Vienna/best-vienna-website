/* ============================================
   BEST Vienna — events-data.js
   Single source of truth for all event content.
   Consumed by:
     • home-events stage  (assets/js/events.js)
     • events page detail (assets/js/events-detail.js)
   Shared fields (name, tag, image, colours, facts,
   descriptions) live here once. The call-to-action
   is intentionally per-surface, so each event keeps
   an explicit `homeCta` and `detailCta`.
   ============================================ */

const BEST_EVENTS = {
  sc: {
    abbr:  'SC',
    name:  'BEST Course in Summer',
    tag:   'Academic & Cultural',
    image: 'assets/images/events/BEST_Course.jpg',
    colorA: '#e8521a',
    colorB: '#7a1e05',
    desc: 'Each summer, TU Wien students can apply for a fully-funded 10-day academic course hosted by one of 84 BEST groups across Europe. Immerse yourself in cutting-edge tech, make lifelong friends, and explore a new country — all for free.',
    longDesc: "Immerse yourself in cutting-edge tech, make lifelong friends, and explore a new country — all completely free. Whether you're interested in cutting-edge technologies, business skills, or just want to experience a week outside the classroom, there's a course for you across Europe.",
    facts: [
      { icon: '🗓', text: 'July – August' },
      { icon: '📍', text: 'Across Europe' },
      { icon: '⏱', text: '~10 days' },
      { icon: '🎓', text: 'Open to TU Wien students' },
    ],
    highlights: [
      'Fully funded — no costs, travel & accommodation included',
      'Hands-on workshops & lectures led by industry professionals',
      'Network with students from across Europe',
      'Explore a new country with fellow BEST Vienna members',
    ],
    info: [
      { label: 'Cost', value: 'Free for TU Wien students' },
      { label: 'Who can apply', value: 'All TU Wien students (BSc, MSc, any field)' },
      { label: 'Language', value: 'English' },
      { label: 'Application', value: "Apply via email; deadlines vary by course. Contact us for this year's timeline." },
    ],
    homeCta:   { text: 'Apply Now', href: 'mailto:vienna-bestcourses@best-eu.org' },
    detailCta: { text: 'Learn More & Apply', href: 'mailto:vienna-bestcourses@best-eu.org' },
  },

  arm: {
    abbr:  'aRM',
    name:  'Autumn Regional Meeting',
    tag:   'Internal BEST Event',
    image: 'assets/images/events/aRegionalMeeting.jpg',
    colorA: '#1e6aaa',
    colorB: '#0b1e36',
    desc: 'The Autumn Regional Meeting gathers BEST members from across Central Europe for a weekend of workshops, discussions, and networking. Vienna takes the stage as host, organizing sessions on internal strategy and future planning.',
    longDesc: "This is where Vienna shines as host — we organize strategy sessions, skill-building workshops, and social events that bring together BEST delegates and members from neighboring countries. It's a chance to meet the wider BEST community, learn how other local groups work, and shape the future of BEST in Central Europe.",
    facts: [
      { icon: '🗓', text: 'October – November' },
      { icon: '📍', text: 'Vienna, Austria' },
      { icon: '⏱', text: '3 days' },
      { icon: '👥', text: 'BEST members & delegates' },
    ],
    highlights: [
      'Network with BEST members from Central European countries',
      'Attend workshops on leadership, event management, and strategy',
      'Join social activities and team-building games',
      'Help organize and co-host — a hands-on learning opportunity',
    ],
    info: [
      { label: 'Who can attend', value: 'BEST members (from Vienna or visiting groups)' },
      { label: 'Commitment', value: 'Volunteer to help organize; no special skills needed' },
      { label: 'Language', value: 'English & German' },
      { label: 'More info', value: 'Contact us to learn about the next meeting date and your role.' },
    ],
    homeCta:   { text: 'Learn More', href: 'mailto:vienna@best-eu.org' },
    detailCta: { text: 'Get Involved', href: 'mailto:vienna@best-eu.org' },
  },

  bw: {
    abbr:  'beWANTED',
    name:  'beWANTED',
    tag:   'Career & Industry',
    image: 'assets/images/events/beWANTED.jpg',
    colorA: '#0d8aaa',
    colorB: '#044f65',
    desc: "Vienna's flagship career fair, bridging TU Wien students with top engineering and tech companies. From casual networking to on-site interviews — land your next internship, thesis project, or full-time position.",
    longDesc: "From casual networking to on-site interviews — land your next internship, thesis project, or full-time position. Companies from robotics, software, consulting, and more are looking to meet talented students like you. Whether you're exploring career paths or ready to apply, beWANTED is the place to make it happen.",
    facts: [
      { icon: '🗓', text: 'Spring semester' },
      { icon: '📍', text: 'TU Wien campus' },
      { icon: '⏱', text: '1–2 days' },
      { icon: '🎓', text: 'Open to TU Wien students' },
    ],
    highlights: [
      'Meet 30+ leading engineering and tech companies',
      'Attend talks and workshops on industry topics',
      'Participate in on-site interviews and networking sessions',
      'Discover internship, thesis, and full-time opportunities',
    ],
    info: [
      { label: 'Who can attend', value: 'All TU Wien students (no experience necessary)' },
      { label: 'Cost', value: 'Free to attend' },
      { label: 'Language', value: 'English' },
      { label: 'Company list', value: 'See participating companies on our website or contact us.' },
    ],
    homeCta:   { text: 'Meet Companies', href: 'mailto:vienna@best-eu.org' },
    detailCta: { text: 'Save the Date', href: 'mailto:vienna@best-eu.org' },
  },

  mw: {
    abbr:  'MW',
    name:  'Motivational Weekends',
    tag:   'Social & Community',
    image: 'assets/images/events/MotivationalWeekend.jpg',
    colorA: '#7b52b8',
    colorB: '#3d1f6a',
    desc: 'Fun-packed weekend adventures organized for bonding and friendship. Team games, hiking, city trips, and unforgettable evenings — the perfect way to connect with BEST Vienna members and explore Austria.',
    longDesc: "The perfect way to connect with BEST Vienna members and explore Austria. Whether you're a new member or a long-time friend, these weekends are where real friendships happen — think hiking trails, city explorations, cozy evenings by the fire, and plenty of laughs.",
    facts: [
      { icon: '🗓', text: 'Throughout the year' },
      { icon: '📍', text: 'Austria & beyond' },
      { icon: '⏱', text: '2–3 days' },
      { icon: '🎉', text: 'BEST members & friends' },
    ],
    highlights: [
      'Explore Austria: mountains, cities, and hidden gems',
      "Team games and competitions (yes, we're competitive!)",
      'Bonding activities and social nights',
      'Casual atmosphere — join for the whole weekend or just a day',
    ],
    info: [
      { label: 'Who can join', value: 'BEST members and friends' },
      { label: 'Cost', value: 'Usually €20–50 depending on destination; scholarships available' },
      { label: 'Frequency', value: 'Several throughout the year' },
      { label: 'Sign up', value: 'Announcements via email & Instagram. Contact us to join the mailing list.' },
    ],
    homeCta:   { text: 'Join the Fun', href: 'mailto:vienna@best-eu.org' },
    detailCta: { text: 'Join the Next One', href: 'https://www.instagram.com/bestvienna' },
  },

  ph1: {
    abbr:  'G2K',
    name:  'Coming Soon',
    tag:   'New Event',
    image: 'assets/images/events/G2K.jpg',
    colorA: '#3a8a6a',
    colorB: '#1a3a2a',
    comingSoon: true,
    desc: 'Something exciting is in the making. Stay tuned for updates on our next event — coming soon to BEST Vienna. Follow our social media for the latest announcements.',
    facts: [
      { icon: '🗓', text: 'TBA' },
      { icon: '📍', text: 'TBA' },
      { icon: '⏱', text: 'TBA' },
      { icon: '👤', text: 'TBA' },
    ],
    homeCta:   { text: 'Stay Tuned', href: 'https://www.instagram.com/bestvienna' },
    detailCta: { text: 'Follow Us', href: 'https://www.instagram.com/bestvienna' },
  },

  ph2: {
    abbr:  'BSE',
    name:  'Coming Soon',
    tag:   'New Event',
    image: 'assets/images/events/BSE.jpg',
    colorA: '#9a6a2a',
    colorB: '#3a2010',
    comingSoon: true,
    desc: 'Another exciting event is being planned for the BEST Vienna calendar. Follow us on social media for the latest announcements, dates, and how to get involved.',
    facts: [
      { icon: '🗓', text: 'TBA' },
      { icon: '📍', text: 'TBA' },
      { icon: '⏱', text: 'TBA' },
      { icon: '👤', text: 'TBA' },
    ],
    homeCta:   { text: 'Follow Us', href: 'https://www.instagram.com/bestvienna' },
    detailCta: { text: 'Follow Us', href: 'https://www.instagram.com/bestvienna' },
  },
};

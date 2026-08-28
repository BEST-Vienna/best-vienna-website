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
    abbr:  'Course',
    name:  'BEST Course in Summer',
    tag:   'Academic & Cultural',
    image: 'assets/images/events/BEST_Course.jpg',
    colorA: '#e8521a',
    colorB: '#7a1e05',
    desc: 'For a time period of seven to ten days you get to go to a city of your choice and experience everything from Culture and Food to people and parties, all while learning about the academic topic that is being covered. The goal is to make it possible for students from all over Europe to be able to experience this regardless of socioeconomic background – which is the reason why the price of the course doesn’t surpass 100 Euros, and is often even significantly cheaper.',
    longDesc: "How does a BEST course look like? \n" +
        "Imagine you arrive in this city you’ve always wanted to go to. Now you found your reason to actually do it. You arrive at the airport, get into the plane, touchdown. Then otw to the meeting place. Once there you get greeted by some local organizers and some of the early participants. Good vibe. First night, a welcome party. First day, sessions that are more engaging than you thought. And quite a few people that you vibe with. And a lot of dance and music.\n" +
        "You get to know the city, the people, the food, the celebrations, and also get to share a bit of your culture. And days pass, the time is legendary. But all good things come to an end. You get into the plane back to Vienna. The Course is over. But the memories stay. And the friends you’ve made do too. \n",
    facts: [
      { icon: '🗓', text: 'All year round in different countries' },
      { icon: '📍', text: 'Across Europe' },
      { icon: '⏱', text: '~10 days' },
      { icon: '🎓', text: 'Open to TU Wien students' },
    ],
    highlights: [
      'under 100€, food & accommodation included',
      'Hands-on workshops & lectures led by professors& industry professionals',
      'Make unforgettable Memories with students from across Europe',
      'Explore a new countries and their cultures',
    ],
    info: [
      { label: 'Cost', value: 'under 100€' },
      { label: 'Who can apply', value: 'All TU Wien students (BSc, MSc, any field)' },
      { label: 'Language', value: 'English' },
      { label: 'Application', value: "Apply via email; deadlines vary by course. Contact us for this year's timeline."},
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
    desc: 'Motivational Weekends integrate new members into the organization while bringing our current members together. Over the span of a weekend we escape the city for trainings, workshops and social activities, usually in a rural part of Austria. Beyond the schedule, the true magic lies in the atmosphere of spending a weekend growing with a community of friends.',
    longDesc: "The perfect way to connect with BEST Vienna members and explore Austria. Whether you're a new member or a long-time friend, these weekends are where real friendships happen — think hiking trails, city explorations, cozy evenings by the fire, and plenty of laughs.",
    facts: [
      { icon: '🗓', text: 'Once per semester' },
      { icon: '📍', text: 'Austria' },
      { icon: '⏱', text: '2–3 days' },
      { icon: '🎉', text: 'BEST Vienna members' },
    ],
    highlights: [
      'Explore Austria: mountains, cities, and hidden gems',
      "Team games and competitions (yes, we're competitive!)",
      'Bonding activities and social nights',
      'Casual atmosphere — join for the whole weekend or just a day',
    ],
    info: [
      { label: 'Who can join', value: 'BEST members' },
      { label: 'Cost', value: 'Usually ~€30, free for first timers' },
      { label: 'Frequency', value: 'Once per semester' },
      { label: 'Sign up', value: 'All further Infos will be provided after you Join BEST Vienna ;)' },
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

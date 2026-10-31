/* ============================================
   BEST Vienna — config.js
   Single source of truth for all editable
   content: board term, members, and stats.
   ============================================ */

/* ---------- Board term ---------- */
const BOARD_TERM = 'XXIII';

/* ---------- Board members ---------- */
const BOARD_MEMBERS = [
  {
    name:  'Eszter Anna Torgyik',
    role:  'President',
    study: 'Architecture',
    email: 'eszter.anna.torgyik@best-eu.org',
    photo: 'eszter.jpg',
  },
  {
    name:  'Emanuel Klatzer',
    role:  'Secretary',
    study: 'Informatics',
    email: 'emanuel.klatzer@best-eu.org',
    photo: 'emanuel.jpg',
  },
  {
    name:  'Yoana Stefanova',
    role:  'Treasurer',
    study: 'Business Informatics',
    email: 'yoana.stefanova@best-eu.org',
    photo: 'yoana.jpg',
  },
  {
    name:  'Lilly Görlitz',
    role:  'Vice President for Public Relations',
    study: 'Technical Physics',
    email: 'lilly.görlitz@best-eu.org',
    photo: 'lilly.jpg',
  },
  {
    name:  'Sebastian Maur',
    role:  'Vice President for Corporate Relations',
    study: 'Informatics',
    email: 'sebastian.maur@best-eu.org',
    photo: 'sebastian.jpg',
  },
  {
    name:  'Moritz Laichner',
    role:  'Vice President for Human Resources',
    study: 'Informatics',
    email: 'moritz.laichner@best-eu.org',
    photo: 'moritz.jpg',
  },
];

/* ---------- Organisation-wide stats ---------- */
const BEST_STATS = {
  localGroups:   79,    // number of Local BEST Groups across Europe
  countries:     29,    // number of countries
  volunteers:    3300,  // approximate number of volunteers
  activeMembers: 40,    // active members in Vienna
};

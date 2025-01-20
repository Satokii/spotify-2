const ARTISTS_INITIAL_STATE = [
  {
    name: "ALL TIME",
    title: "artists-all-time",
    className: "active-date-filter",
    click: "long_term",
  },
  {
    name: "LAST 6 MONTHS",
    title: "artists-6-months",
    className: "inactive-date-filter",
    click: "medium_term",
  },
  {
    name: "LAST 4 WEEKS",
    title: "artists-4-weeks",
    className: "inactive-date-filter",
    click: "short_term",
  },
];

export default ARTISTS_INITIAL_STATE;

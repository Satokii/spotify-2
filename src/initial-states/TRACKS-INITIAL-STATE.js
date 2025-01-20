const TRACKS_INITIAL_STATE = [
  {
    name: "ALL TIME",
    title: "tracks-all-time",
    className: "active-date-filter",
    click: "long_term",
  },
  {
    name: "LAST 6 MONTHS",
    title: "tracks-6-months",
    className: "inactive-date-filter",
    click: "medium_term",
  },
  {
    name: "LAST 4 WEEKS",
    title: "tracks-4-weeks",
    className: "inactive-date-filter",
    click: "short_term",
  },
];

export default TRACKS_INITIAL_STATE;

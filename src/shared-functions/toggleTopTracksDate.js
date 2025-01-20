const toggleTopTracksDate = (selectedDate, topTracksDate, setTopTracksDate) => {
  const updatedTopTracks = topTracksDate.map((date) => {
    if (date.name === selectedDate.target.innerText) {
      return { ...date, className: "active-date-filter" };
    } else {
      return { ...date, className: "inactive-date-filter" };
    }
  });
  setTopTracksDate(updatedTopTracks);
};

export default toggleTopTracksDate;

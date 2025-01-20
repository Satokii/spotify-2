const toggleTopArtistsDate = (
  selectedDate,
  topArtistsDate,
  setTopArtistsDate
) => {
  const updatedTopArtists = topArtistsDate.map((date) => {
    if (date.name === selectedDate.target.innerText) {
      return { ...date, className: "active-date-filter" };
    } else {
      return { ...date, className: "inactive-date-filter" };
    }
  });
  setTopArtistsDate(updatedTopArtists);
};

export default toggleTopArtistsDate;

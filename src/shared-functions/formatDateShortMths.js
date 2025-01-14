const formatDateShortMths = (inputDate) => {
    const strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(inputDate)
    const day = date.getDate();
    const month = strArray[date.getMonth()];
    const year = date.getFullYear();
    return `${(day <= 9 ? 0 + day : day)} ${month} ${year}`;
  }

  export default formatDateShortMths
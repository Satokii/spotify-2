const formatDate = (inputDate) => {
    const strArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(inputDate)
    const day = date.getDate();
    const month = strArray[date.getMonth()];
    const year = date.getFullYear();
    return `${(day <= 9 ? 0 + day : day)} ${month} ${year}`;
  }

  export default formatDate
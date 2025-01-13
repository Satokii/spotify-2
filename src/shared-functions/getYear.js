const getYear = (inputDate) => {
    const date = new Date(inputDate)
    const year = date.getFullYear();
    return `${year}`
}

  export default getYear
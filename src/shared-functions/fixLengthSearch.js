const fixLengthSearch = (string) => {
    if (string.length > 15) {
        return `${string.slice(0, 15)}...`
    }
    else return string
}

export default fixLengthSearch
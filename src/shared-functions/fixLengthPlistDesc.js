const fixLenthPlistDesc = (string) => {
    if (string.length > 35) {
        return `${string.slice(0, 35)}...`
    }
    else return string
}

export default fixLenthPlistDesc
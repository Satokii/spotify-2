const fixLengthQueue = (string) => {
    if (string.length > 10) {
        return `${string.slice(0, 10)}...`
    }
    else return string
}

export default fixLengthQueue
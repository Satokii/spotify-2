const fixLengthPreviews = (string) => {
    if (string.length > 18) {
        return `${string.slice(0, 18)}...`
    }
    else return string
}

export default fixLengthPreviews
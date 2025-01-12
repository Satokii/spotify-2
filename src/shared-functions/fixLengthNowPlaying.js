const fixLengthNowPlaying = (string) => {
    if (string.length > 60) {
        return `${string.slice(0, 60)}...`
    }
    else return string
}

export default fixLengthNowPlaying
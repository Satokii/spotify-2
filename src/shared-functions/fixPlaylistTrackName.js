const fixPlaylistTrackName = (string) => {
    if (string.length > 16) {
        return `${string.slice(0, 16)}...`
    }
    else return string
}

export default fixPlaylistTrackName
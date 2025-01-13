const fixLengthPlaylistAlbum = (string) => {
    if (string.length > 11) {
        return `${string.slice(0, 11)}...`
    }
    else return string
}

export default fixLengthPlaylistAlbum
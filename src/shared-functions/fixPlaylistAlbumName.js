const fixPlaylistAlbumName = (string) => {
    if (string.length > 32) {
        return `${string.slice(0, 32)}...`
    }
    else return string
}

export default fixPlaylistAlbumName
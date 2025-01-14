import axios from "axios";

const getPlaylist = async (token, playlistId, setPlaylistInfo, setPlaylistTracks) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setPlaylistTracks(data.tracks.items)
    setPlaylistInfo({
        name: data.name,
        img: data.images[0].url,
        description: data.description,
        followers: (data.followers.total).toLocaleString(),
        totalTracks: data.tracks.total,
        type: data.type,
        isPublic: data.public,
        owner: data.owner.display_name
    })
};

export default getPlaylist
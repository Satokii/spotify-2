import axios from "axios";

const getSingles = async (token, artistId, setSingle) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          include_groups: 'single',
          limit: 10
        }
      }
    );
    const { items } = data
    setSingle(items)
};

export default getSingles
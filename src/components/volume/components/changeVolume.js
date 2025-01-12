import axios from "axios";

const changeVolume = async (token, volume) => {
  await axios.put(
    "https://api.spotify.com/v1/me/player/volume",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        volume_percent: Number(volume),
      },
    }
  );
};

export default changeVolume
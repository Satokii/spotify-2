import axios from "axios";

  // API CALL TO SEEK TO POSITION
const seekToPosition = async (token, manualSeekVal) => {
  await axios.put(
    "https://api.spotify.com/v1/me/player/seek",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        position_ms: manualSeekVal,
      },
    }
  );
};

export default seekToPosition;

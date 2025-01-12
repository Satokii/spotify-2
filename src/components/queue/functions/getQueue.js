import axios from "axios";

const getQueue = async (token, setQueue) => {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/player/queue",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    setQueue(data.queue)
  };

  export default getQueue
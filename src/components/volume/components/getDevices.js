import axios from "axios";

// GET DEVICES API CALL
const getDevices = async (token, setAvailableDevices) => {
  const { data } = await axios.get(
    "https://api.spotify.com/v1/me/player/devices",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  setAvailableDevices(data.devices);
};

export default getDevices;

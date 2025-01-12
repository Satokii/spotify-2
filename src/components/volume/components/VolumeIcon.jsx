import { useEffect, useState } from "react";
import changeVolume from "../functions/changeVolume";

function VolumeIcon({ token, volume, setVolume }) {
  const [mute, setMute] = useState(false);
  const [savedLastVolume, setSavedLastVolume] = useState(0);

  const handleMuteBehaviour = () => {
    if (mute === false) {
      setSavedLastVolume(volume);
      setMute(true);
      changeVolume(token, 0);
      setVolume(0);
    } else {
      setMute(false);
      changeVolume(token, savedLastVolume);
      setVolume(savedLastVolume);
    }
  };

  useEffect(() => {
    if (Number(volume) === 0) setMute(true);
    else setMute(false);
  }, [setMute, volume]);

  return (
    <div className="volume-mute-icon-container" onClick={handleMuteBehaviour}>
      {mute ? (
        <img
          className="volume-mute-icon"
          src={VolumeMuteIcon}
          alt="volume mute icon"
        />
      ) : (
        <img
          className="volume-on-icon"
          src={VolumeOnIcon}
          alt="volume on icon"
        />
      )}
    </div>
  );
}

export default VolumeIcon;

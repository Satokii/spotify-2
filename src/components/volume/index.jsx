import { useEffect, useState } from "react";

function VolumeControls({ token }) {
  const [availableDevices, setAvailableDevices] = useState([]);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    // setInterval(() => {
    getDevices(token, setAvailableDevices);
    // }, 100);
  }, [token]);

  useEffect(() => {
    handleDeviceVolumeChanges(availableDevices, setVolume);
  }, [availableDevices]);

  useEffect(() => {
    changeVolume(token, volume);
  }, [token, volume]);

  return (
    <section className="volume-controls-container grid">
      <VolumeIcon token={token} volume={volume} setVolume={setVolume} />
      <div className="volume-slide-container grid">
        <input
          className="volume-slider"
          type="range"
          name="volume-slider"
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          onMouseUp={(e) => setVolume(e.target.value)}
          onMouseDown={(e) => setVolume(e.target.value)}
        />
      </div>
    </section>
  );
}

export default VolumeControls;

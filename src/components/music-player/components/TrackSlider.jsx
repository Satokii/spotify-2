import calcTrackTime from "@/shared-functions/calcTrackTime";
import renderCurrentTrackTime from "../functions/renderCurrentTrackTime";
import calcSeekPosition from "../functions/calcSeekPosition";

function TrackSlider({
  currentTrack,
  sliderVal,
  setSliderVal,
  setManualSeekVal,
}) {
  return (
    <div className="song-progress-bar-container grid">
      <p className="song-start">{renderCurrentTrackTime(currentTrack)}</p>
      <div className="slide-container">
        <input
          className="slider"
          type="range"
          name="song-expired"
          min={0}
          max={100}
          step={1}
          value={sliderVal}
          onChange={(e) => {
            setSliderVal(e.target.value);
          }}
          onMouseUp={(e) =>
            calcSeekPosition(e.target.value, currentTrack, setManualSeekVal)
          }
        />
      </div>
      <p className="song-end">{calcTrackTime(currentTrack.trackDuration)}</p>
    </div>
  );
}

export default TrackSlider;

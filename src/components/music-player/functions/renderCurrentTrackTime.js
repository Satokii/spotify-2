import calcTrackTime from "@/shared-functions/calcTrackTime";

// RENDER CURRENT TRACK TIME
const renderCurrentTrackTime = (currentTrack) => {
    const currentTime = currentTrack.trackProgress;
    if (currentTime === null) return "0:00";
    if (currentTime === 0) return "0:00";
    else if (currentTime < 0) return "0:00";
    else return calcTrackTime(currentTime);
  };
  
  export default renderCurrentTrackTime
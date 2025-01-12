const calcSeekPosition = async (slidebarPosition, currentTrack, setManualSeekVal) => {
    const currentTimeinMs = (slidebarPosition / 100) * currentTrack.trackDuration;
    setManualSeekVal(Number(currentTimeinMs.toFixed(0)));
  };
  
  export default calcSeekPosition;
  
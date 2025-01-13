const convertMsToTime = (ms) => {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    if (!hours && !minutes) return `${seconds} sec`
    if (!hours) return `${minutes} min ${seconds} sec`;
    if (!minutes) return `${hours} hr`;
    if (hours) return `${hours} hr ${minutes} min`; 
}

  export default convertMsToTime
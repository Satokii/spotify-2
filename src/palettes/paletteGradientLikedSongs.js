const paletteGradientLikedSongs = (data) => {
    const lightImgColour = data.muted;
    const darkImgColour = data.lightVibrant;
    let mixedImgColour = "#";
  
    for (let i = 0; i < 3; i++) {
      let sub1 = lightImgColour.substring(1 + 2 * i, 3 + 2 * i);
      let sub2 = darkImgColour.substring(1 + 2 * i, 3 + 2 * i);
      let v1 = parseInt(sub1, 16);
      let v2 = parseInt(sub2, 16);
      let v = Math.floor((v1 + v2) / 2);
      let sub = v.toString(16).toUpperCase();
      let padsub = ("0" + sub).slice(-2);
      mixedImgColour += padsub;
    }
  
    let navBackgroundBacker = document.querySelector(".liked-songs--menu-backing")
    let navBackground = document.querySelector(".liked-songs--menu-container")
    let bannerBackground = document.querySelector(".liked-songs--banner");
    let albumBackground = document.querySelector(".liked-songs--sub-container");
    let foundColour = `${mixedImgColour}`;
    let darkFoundColour = `${mixedImgColour}70`;
    let darkerFoundColour = `${mixedImgColour}55`;
    let evenDarkerFoundColour = `${mixedImgColour}33`;
  
    const scrolled = document.querySelector('.scrollbar-liked-songs')
    scrolled.addEventListener('scroll', () => {
        if (scrolled.scrollTop <= 30) {
          navBackgroundBacker.style.background = 'transparent'
          navBackground.style.backgroundColor = 'transparent'
        }
        else if (scrolled.scrollTop > 30 && scrolled.scrollTop <= 100) {
          navBackgroundBacker.style.background = '#12121219'
          navBackground.style.backgroundColor = `${foundColour}40`
        }
        else if (scrolled.scrollTop > 100 && scrolled.scrollTop <= 200) {
          navBackgroundBacker.style.background = '#1212127e'
          navBackground.style.backgroundColor = `${foundColour}82`
        }
        else if (scrolled.scrollTop > 200 && scrolled.scrollTop <= 300) {
          navBackgroundBacker.style.background = '#121212af'
          navBackground.style.backgroundColor = `${foundColour}CC`
        }
        else {
          navBackgroundBacker.style.background = '#121212'
          navBackground.style.backgroundColor = `${foundColour}`
        }
    });
  
    bannerBackground.style.background = `${foundColour}`;
    albumBackground.style.background = `linear-gradient(${darkFoundColour}, ${darkerFoundColour} 10%, ${evenDarkerFoundColour} 20%, #1a1a1a 42%, #121212 60%)`;  
}

export default paletteGradientLikedSongs
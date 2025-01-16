const scrollFade = () => {
    let navBackgroundBacker = document.querySelector(".main-page--menu-backing")
    let navBackground = document.querySelector(".main-page--menu")
    
    const scrolled = document.querySelector('.scrollbar-dashboard')
    scrolled.addEventListener('scroll', () => {
      if (scrolled.scrollTop <= 30) {
        navBackgroundBacker.style.background = 'transparent'
        navBackground.style.backgroundColor = 'transparent'
      }
      else if (scrolled.scrollTop > 30 && scrolled.scrollTop <= 100) {
        navBackgroundBacker.style.background = '#12121219'
        navBackground.style.backgroundColor = `#4a020940`
      }
      else if (scrolled.scrollTop > 100 && scrolled.scrollTop <= 200) {
        navBackgroundBacker.style.background = '#1212127e'
        navBackground.style.backgroundColor = `#4a020982`
      }
      else if (scrolled.scrollTop > 200 && scrolled.scrollTop <= 300) {
        navBackgroundBacker.style.background = '#121212af'
        navBackground.style.backgroundColor = `#4a0209CC`
      }
      else {
        navBackgroundBacker.style.background = '#121212'
        navBackground.style.backgroundColor = `#4a0209`
      }
    })
    }
    
    export default scrollFade
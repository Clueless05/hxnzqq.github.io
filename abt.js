document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.querySelector('.background-stars');
    const starCount = 500;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('span');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starContainer.appendChild(star);
        animateStar(star);
    }
/*   
 /$$                   /$$                        ©
| $$                  | $$                        
| $$$$$$$  /$$   /$$ /$$$$$$    /$$$$$$   /$$$$$$ 
| $$__  $$| $$  | $$|_  $$_/   /$$__  $$ /$$__  $$
| $$  \ $$| $$  | $$  | $$    | $$  \__/| $$  \ $$
| $$  | $$| $$  | $$  | $$ /$$| $$      | $$  | $$
| $$  | $$|  $$$$$$$  |  $$$$/| $$      |  $$$$$$/
|__/  |__/ \____  $$   \___/  |__/       \______/ 
           /$$  | $$                              
          |  $$$$$$/                              
           \______/                               
What are you doing here? Don't copy my work! Any attempt to make a copy is considered theft.*/
    function animateStar(star) {
        const speed = Math.random() * 10 + 5; 
        const directionX = (Math.random() - 0.5) * 2 * 100; 
        const directionY = Math.random() * 100; 

        star.style.transition = `transform ${speed}s linear`;
        star.style.transform = `translate(${directionX}vw, ${directionY}vh)`;

        setTimeout(() => {
            resetStar(star);
        }, speed * 1000);
    }



    const themeSwitch = document.getElementById('theme-switch');
    const themeText = document.getElementById('theme-text');

    themeSwitch.addEventListener('change', function() {
        const isLightMode = themeSwitch.checked;
        document.body.classList.toggle('light-mode', isLightMode);
        document.body.classList.toggle('dark-mode', !isLightMode);

        const toggleElements = document.querySelectorAll('.dark-mode, .light-mode');
        toggleElements.forEach(element => {
            element.classList.toggle('light-mode', isLightMode);
            element.classList.toggle('dark-mode', !isLightMode);
        });

        const buttonElements = document.querySelectorAll('.button');
        buttonElements.forEach(element => {
            element.classList.toggle('light-mode', isLightMode);
            element.classList.toggle('dark-mode', !isLightMode);
        });

        const musicPlayer = document.querySelector('.music-player');
        if (musicPlayer) {
            musicPlayer.classList.toggle('light-mode', isLightMode);
            musicPlayer.classList.toggle('dark-mode', !isLightMode);
        }

        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.toggle('light-mode', isLightMode);
        sidePanel.classList.toggle('dark-mode', !isLightMode);

        const languageOptionsText = document.getElementById('language-options-text');
        languageOptionsText.classList.toggle('light-mode', isLightMode);
        languageOptionsText.classList.toggle('dark-mode', !isLightMode);

        const dropdown = document.querySelector('.language-selector .dropdown');
        dropdown.classList.toggle('light-mode', isLightMode);
        dropdown.classList.toggle('dark-mode', !isLightMode);

        themeText.textContent = isLightMode ? 'Dark mode' : 'Light mode';
    });

    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', function() {
        const sidePanel = document.getElementById('side-panel');
        sidePanel.classList.toggle('open');
        menuIcon.classList.toggle('open');
    });

    const languageSelector = document.querySelector('.language-selector');
    const dropdown = document.querySelector('.dropdown');
    languageSelector.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!languageSelector.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});

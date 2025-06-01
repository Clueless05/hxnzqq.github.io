document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.querySelector('.background-stars');
    const starCount = 350;

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

    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            changeLanguage(selectedLang);

            // Update the button to show the selected language
            const mainOption = languageSelector.querySelector('.language-option');
            const selectedFlag = this.querySelector('img').src;
            const selectedLangName = this.querySelector('.language-name').textContent;

            mainOption.querySelector('img').src = selectedFlag;
            mainOption.querySelector('.language-name').textContent = selectedLangName;

            // Close the dropdown
            dropdown.classList.remove('open');
        });
    });

    function changeLanguage(lang) {
        const textElements = document.querySelectorAll('[data-translate]');
        textElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[lang][key];
            element.textContent = translation;
        });
    }

    const translations = {
        cs: {
            'title': "Hxnzqq",
            'description': "Ahoj! Posledních pár let se zabývám tvorbou obsahu na různých platformách, videohrám, někdy hudbě a celkově všemu co se technologií týče. Můžete mě najít v odkazech dole:",
		
		},	 
        en: {
            'title': "Hxnzqq",
            'description': "Hello! For the past few years, I have been creating content on various platforms, video games, sometimes music, and generally everything related to technology. You can find me in the links below:",
        },
        fr: {
            'title': "Hxnzqq",
            'description': "Bonjour! Ces dernières années, jai c'réé du contenu sur diverses plateformes, des jeux vidéo, parfois de la musique, et en général tout ce qui concerne la technologie. Vous pouvez me trouver dans les liens ci-dessous:",
        },
        es: {
            'title': "Hxnzqq",
            'description': "¡Hola! Durante los últimos años, he estado creando contenido en varias plataformas, videojuegos, a veces música, y en general todo lo relacionado con la tecnología. Puedes encontrarme en los enlaces a continuación:",
        },
        ru: {
            'title': "Hxnzqq",
            'description': "Привет! Последние несколько лет я создаю контент на различных платформах, играю в видеоигры, иногда занимаюсь музыкой и в целом всем, что связано с технологиями. Вы можете найти меня по ссылкам ниже:",
        },
        uk: {
            'title': "Hxnzqq",
            'description': "Привіт! Останні кілька років я створюю контент на різних платформах, граю у відеоігри, іноді займаюся музикою і загалом всім, що пов'язано з технологіями. Ви можете знайти мене за посиланнями нижче:",
        },
    };
	
});

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

var theToggle = document.getElementById('toggle');

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
// --- Seznam tracků ---
const tracks = [
  {
    title: "Scars",
    artist: "Papa Roach",
    cover: "https://i.scdn.co/image/ab67616d0000b2732d5551c32546cafe3aafd939",
    url: "https://audio.jukehost.co.uk/jQqWY6Bt1ASpFzt5O0y1l0AYVdF7s7VMP"
  },

  {
    title: "Hand Of Blood",
    artist: "Bullet For My Valentine",
    cover: "https://i.scdn.co/image/ab67616d0000b27354113df5ab7a69df8a44c37e",
    url: "https://audio.jukehost.co.uk/eWI5uPM9f4xhEIYNkaNCin9sDDAe11BB"
  },

    {
    title: "Time is Running Out",
    artist: "Muse",
    cover: "https://i.scdn.co/image/ab67616d0000b2733303a842ee1bc0b23204333d",
    url: "https://audio.jukehost.co.uk/eNn4fnEq66GxzItu1uK3JspiCUJyogOi"
  },
      {
    title: "kiss kiss",
    artist: "mgk",
    cover: "https://i.scdn.co/image/ab67616d0000b273d4d4929a3a86fe2f9fadbd42",
    url: "https://audio.jukehost.co.uk/xTB8xHc2HOKY9o7pUlBYKmoQ7UQYQpBB"
  },
];
let currentIndex = Math.floor(Math.random() * tracks.length); // <-- náhodný start

const audio = new Audio();
audio.src = tracks[currentIndex].url;
audio.volume = 0.5;

// --- Elements ---
const playButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const albumArt = document.getElementById("album-art").querySelector("img");
const seekBar = document.getElementById("seek-bar");
const volumeBtn = document.getElementById("volume-button");
const volumeContainer = document.getElementById("volume-bar-container");
const volumeBar = document.getElementById("volume-bar");

// --- Load track with animation ---
function loadTrackAnimated(index) {
    const wasPlaying = !audio.paused;

    // fade out
    albumArt.classList.add("fade-out");
    trackTitle.classList.add("fade-out");
    trackArtist.classList.add("fade-out");

    setTimeout(() => {
        audio.src = tracks[index].url;
        trackTitle.textContent = tracks[index].title;
        trackArtist.textContent = tracks[index].artist;
        albumArt.src = tracks[index].cover;

        audio.currentTime = 0;
        seekBar.style.width = "0%";
        volumeBar.style.width = (audio.volume * 100) + "%";

        // fade in
        albumArt.classList.remove("fade-out");
        albumArt.classList.add("fade-in");
        trackTitle.classList.remove("fade-out");
        trackTitle.classList.add("fade-in");
        trackArtist.classList.remove("fade-out");
        trackArtist.classList.add("fade-in");

        setTimeout(() => {
            albumArt.classList.remove("fade-in");
            trackTitle.classList.remove("fade-in");
            trackArtist.classList.remove("fade-in");

            if (wasPlaying) audio.play().catch(() => {});
        }, 300);

        // --- Přepnout theme ---
        setThemeForTrack(index);

    }, 300);
}

// --- Play / Pause ---
playButton.addEventListener("click", () => {
  if(audio.paused){
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// --- Previous / Next ---
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrackAnimated(currentIndex);
  playButton.innerHTML = '<i class="fas fa-pause"></i>';
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrackAnimated(currentIndex);
  playButton.innerHTML = '<i class="fas fa-pause"></i>';
});

// --- Update seek bar ---
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.style.width = progress + "%";
});

// --- Click to seek ---
document.getElementById("seek-bar-container").addEventListener("click", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  audio.currentTime = (clickX / rect.width) * audio.duration;
});

// --- Volume slider always visible ---
let isDragging = false;

const setVolume = (e) => {
    const rect = volumeContainer.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const newVolume = x / rect.width;
    audio.volume = newVolume;
    volumeBar.style.width = (newVolume * 100) + "%";
};

// --- Automaticky přehrát další track po dohrání ---
audio.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % tracks.length; // další track (cyklicky)
    loadTrackAnimated(currentIndex);                  // nahraj nový track s animací

    // po malé prodlevě spustíme přehrávání, aby animace stihla nahrát track
    setTimeout(() => {
        audio.play().catch(() => {});                // ignoruje chybu, pokud autoplay blokuje prohlížeč
        playButton.innerHTML = '<i class="fas fa-pause"></i>'; // tlačítko zůstane jako pause
    }, 350); // prodleva cca stejna jako fade in animace
});

// Drag logika
volumeContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    setVolume(e);
});
// --- Reset play/pause button po dohrání tracku ---
audio.addEventListener('ended', () => {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) setVolume(e);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// Aktualizace při změně volume (např. tlačítkem)
audio.addEventListener("volumechange", () => {
    volumeBar.style.width = (audio.volume * 100) + "%";
});

// --- Load first track ---
loadTrackAnimated(currentIndex);

// --- Date / Time ---
function updateDateTime() {
    const now = new Date();
    const dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const day = dayNames[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    const dateStr = `${day} ${date}.${month}.${year}`;
    const timeStr = `${hours}:${minutes}:${seconds}`;
    document.getElementById('burger-date-time').innerHTML = `${dateStr}<br>${timeStr}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// --- Hvězdy a paralaxa ---
const starsContainer = document.querySelector('.stars');
const starsCount = 150;
const starsArray = [];

// Generování hvězd
for(let i=0;i<starsCount;i++){
    const star = document.createElement('span');
    star.classList.add('star');
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    const size = Math.random()*2 + 1;
    const speed = Math.random()*0.05 + 0.01;
    const opacity = Math.random()*0.7 + 0.3;

    star.style.top = top + "px";
    star.style.left = left + "px";
    star.style.width = star.style.height = size + "px";
    star.style.opacity = opacity;

    starsContainer.appendChild(star);
    starsArray.push({el: star, speed});
}

// Blikání hvězd
starsArray.forEach(starObj => {
    const { el } = starObj;
    const blink = () => {
        const newOpacity = Math.random() * 0.7 + 0.3;
        el.style.transition = `opacity ${Math.random()*0.5 + 0.2}s ease-in-out`;
        el.style.opacity = newOpacity;
        setTimeout(blink, Math.random() * 1000 + 500);
    };
    blink();
});

// Shooting stars
function createShootingStar() {
    const star = document.createElement('span');
    star.classList.add('shooting-star');
    const startX = Math.random() * window.innerWidth * 0.8;
    const startY = Math.random() * window.innerHeight * 0.3;

    star.style.position = 'absolute';
    star.style.top = startY + 'px';
    star.style.left = startX + 'px';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.boxShadow = '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)';
    star.style.opacity = '1';
    star.style.zIndex = 2;

    starsContainer.appendChild(star);

    const distanceX = 200 + Math.random() * 150;
    const distanceY = 50 + Math.random() * 50;

    star.animate([
        { transform: 'translate(0,0)', opacity: 1, boxShadow: '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)' },
        { transform: `translate(${distanceX}px, ${distanceY}px)`, opacity: 0, boxShadow: '0 0 4px white, 0 0 8px rgba(255,255,255,0.2)' }
    ], {
        duration: 1000 + Math.random()*500,
        easing: 'ease-out'
    });

    setTimeout(() => star.remove(), 1500);
}
setInterval(() => { if(Math.random() < 0.5) createShootingStar(); }, 500);

// Přepočet hvězd při resize
window.addEventListener('resize', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const top = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;
        star.style.top = top + 'px';
        star.style.left = left + 'px';
    });
});

// Paralaxa social ikon
document.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.example-2 svg');
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    icons.forEach((icon) => {
        icon.style.transition = 'transform 0.4s ease-out';
        icon.style.transform = `translate(${x}px, ${y}px)`;
    });
});

document.addEventListener('mouseleave', () => {
    const icons = document.querySelectorAll('.example-2 svg');
    icons.forEach((icon) => {
        icon.style.transition = 'transform 0.8s ease-out';
        icon.style.transform = 'translate(0, 0)';
    });
});

// Paralaxa hvězd podle myši
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    const x = (e.clientX / window.innerWidth - 0.5) * 40; 
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    
    stars.forEach(star => {
        const speed = star.offsetWidth / 2;
        star.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// --- Themes ---
const themes = {
    stars: () => {
        document.body.style.background = "black";
        document.querySelector('.stars').style.display = "block";
        document.querySelector('.storm-container').style.display = "none";
    },
};

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (event) => {
        targetX = event.gamma / 45 * 1; // dvojnásobná citlivost
        targetY = event.beta / 45 * 1;
    });
}

function updateParallax() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const speed = star.offsetWidth / 2;
        star.style.transform = `translate(${targetX * speed * 10}px, ${targetY * speed * 10}px)`; 
    });

    const icons = document.querySelectorAll('.example-2 svg');
    icons.forEach(icon => {
        icon.style.transform = `translate(${targetX * 5}px, ${targetY * 5}px)`; 
    });

    requestAnimationFrame(updateParallax);
}

updateParallax();


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

// --- Blikání hvězd ---
starsArray.forEach(starObj => {
    const { el } = starObj;

    const blink = () => {
        const newOpacity = Math.random() * 0.7 + 0.3; // náhodná průhlednost
        el.style.transition = `opacity ${Math.random()*0.5 + 0.2}s ease-in-out`;
        el.style.opacity = newOpacity;
        setTimeout(blink, Math.random() * 1000 + 500); // náhodný interval mezi bliknutími
    };

    blink();
});
// --- Realističtější shooting star ---
function createShootingStar() {
    const star = document.createElement('span');
    star.classList.add('shooting-star');

    // start pozice nahoře vlevo (mírná náhoda)
    const startX = Math.random() * window.innerWidth * 0.8;
    const startY = Math.random() * window.innerHeight * 0.3;

    star.style.position = 'absolute';
    star.style.top = startY + 'px';
    star.style.left = startX + 'px';
    star.style.width = '2px';   // hlavička
    star.style.height = '2px';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.boxShadow = '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)'; // jasnější hlavička
    star.style.opacity = '1';
    star.style.zIndex = 2;

    starsContainer.appendChild(star);

    // cíl pohybu (diagonálně)
    const distanceX = 200 + Math.random() * 150;
    const distanceY = 50 + Math.random() * 50;

    // animace
    star.animate([
        { transform: 'translate(0,0)', opacity: 1, boxShadow: '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)' },
        { transform: `translate(${distanceX}px, ${distanceY}px)`, opacity: 0, boxShadow: '0 0 4px white, 0 0 8px rgba(255,255,255,0.2)' }
    ], {
        duration: 1000 + Math.random()*500,
        easing: 'ease-out'
    });

    // odstranění po animaci
    setTimeout(() => star.remove(), 1500);
}

// 50% šance každých 5 sekund
setInterval(() => {
    if(Math.random() < 0.5) {
        createShootingStar();
    }
}, 500);
// --- Přepočet hvězd při resize ---
window.addEventListener('resize', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        // náhodná nová pozice podle nové velikosti okna
        const top = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;
        star.style.top = top + 'px';
        star.style.left = left + 'px';
    });
});
// Paralaxa pro všechny social icons v .example-2 se stejnou rychlostí a pomalejším pohybem
document.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.example-2 svg');
    const x = (e.clientX / window.innerWidth - 0.5) * 10; // menší číslo = pomalejší
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    icons.forEach((icon) => {
        icon.style.transition = 'transform 0.4s ease-out'; // delší animace
        icon.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Když myš opustí okno → vrátit ikony zpět pomalu
document.addEventListener('mouseleave', () => {
    const icons = document.querySelectorAll('.example-2 svg');
    icons.forEach((icon) => {
        icon.style.transition = 'transform 0.8s ease-out'; // ještě pomalejší návrat
        icon.style.transform = 'translate(0, 0)';
    });
});

// Paralaxa podle myši
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    const x = (e.clientX / window.innerWidth - 0.5) * 40; 
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    
    stars.forEach(star => {
        const speed = star.offsetWidth / 2; // rychlost podle velikosti
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

// --- Přepínání theme podle tracku ---

themes.Iris = () => {
    document.body.style.background = "black";
    document.querySelector('.stars').style.display = "none"; 
    document.querySelector('.storm-container').style.display = "none";

    const irisTheme = document.querySelector('.IrisTheme');
    irisTheme.style.display = "block";

    const video = irisTheme.querySelector('#bgVideo');
    if (video) {
        video.pause();
        video.currentTime = 0; // reset na začátek
        video.play();
    }
};
function hideIrisVideo() {
    const irisTheme = document.querySelector('.IrisTheme');
    if (irisTheme) {
        irisTheme.style.display = "none";
        const video = irisTheme.querySelector('#bgVideo');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
}


// --- Seznam tracků ---
const tracks = [
  { title: "Sextape", artist: "Deftones", src: "assets/sextape.mp3", cover: "https://i.ibb.co/DfhymFpt/Deftones-sextape.jpg" },
  { title: "No Surprises", artist: "Radiohead", src: "assets/nosurprises.mp3", cover: "https://i.ibb.co/GvsPxS4n/ab67616d0000b273c8b444df094279e70d0ed856.jpg" },
  { title: "Iris", artist: "Goo Goo Dolls", src: "assets/iris.m4a", cover: "https://i.ibb.co/JwL986CX/ab67616d0000b273eda9478c39a21e1cdc6609ca.jpg" },
  { title: "Home", artist: "Jordan Schor", src: "https://singhimalaya.github.io/Codepen/assets/music/4.mp3", cover: "https://singhimalaya.github.io/Codepen/assets/img/album-arts/4.jpg" },
  { title: "Proxy", artist: "Martin Garrix", src: "https://singhimalaya.github.io/Codepen/assets/music/5.mp3", cover: "https://singhimalaya.github.io/Codepen/assets/img/album-arts/5.jpg" }
];

let currentIndex = 0;
const audio = new Audio();
audio.src = tracks[currentIndex].src;
audio.volume = 0.5; // default volume

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
// --- Load track with smooth animation ---
function loadTrackAnimated(index) {
    const wasPlaying = !audio.paused;

    // fade out
    albumArt.classList.add("fade-out");
    trackTitle.classList.add("fade-out");
    trackArtist.classList.add("fade-out");

    setTimeout(() => {
        audio.src = tracks[index].src;
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

// --- Volume slider ---
const showVolume = () => volumeContainer.classList.add("show");
const hideVolume = () => volumeContainer.classList.remove("show");

volumeBtn.addEventListener("mouseenter", showVolume);
volumeContainer.addEventListener("mouseenter", showVolume);

volumeBtn.addEventListener("mouseleave", () => setTimeout(() => {
  if (!volumeContainer.matches(':hover') && !volumeBtn.matches(':hover')) hideVolume();
}, 50));

volumeContainer.addEventListener("mouseleave", () => setTimeout(() => {
  if (!volumeContainer.matches(':hover') && !volumeBtn.matches(':hover')) hideVolume();
}, 50));

let isDragging = false;

const setVolume = (e) => {
  const rect = volumeContainer.getBoundingClientRect();
  let x = e.clientX - rect.left;
  x = Math.max(0, Math.min(x, rect.width));
  const newVolume = x / rect.width;
  audio.volume = newVolume;
  volumeBar.style.width = (newVolume * 100) + "%";
};

volumeContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  setVolume(e);
});

document.addEventListener("mousemove", (e) => {
  if(isDragging) setVolume(e);
});

document.addEventListener("mouseup", () => isDragging = false);

audio.addEventListener("volumechange", () => {
  volumeBar.style.width = (audio.volume * 100) + "%";
});

// --- Load first track ---
loadTrackAnimated(currentIndex);
function updateDateTime() {
    const now = new Date();

    const dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const day = dayNames[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1; // 0-index
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


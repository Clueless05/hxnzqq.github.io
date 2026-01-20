/* --- DATA --- */
const tracks = [
  {
    title: "Fighting Myself",
    artist: "Linkin Park",
    cover: "https://i.scdn.co/image/ab67616d0000b273ca2e09fd52e6330146ea9550",
    url: "https://audio.jukehost.co.uk/3ujitCazy2DOVUTzZ3tuguLKnm6NEnAm"
  },
  {
    title: "Scars",
    artist: "Papa Roach",
    cover: "https://i.scdn.co/image/ab67616d0000b2732d5551c32546cafe3aafd939",
    url: "https://audio.jukehost.co.uk/jQqWY6Bt1ASpFzt5O0y1l0AYVdF7s7VMP"
  },
  {
    title: "Rosemary",
    artist: "Deftones",
    cover: "https://i.scdn.co/image/ab67616d0000b27373652b7a0dc388dd1d044b69",
    url: "https://audio.jukehost.co.uk/kZU2iN0KwGUc5LvpnR7ZHaKClh6wDXfn"
  },
  {
    title: "Can You Feel My Heart",
    artist: "Bring Me The Horizon",
    cover: "https://i.scdn.co/image/ab67616d0000b27360cf7c8dd93815ccd6cb4830",
    url: "https://audio.jukehost.co.uk/RPM2ch4dcbsObFDYwSA0WdKoeijfj88A"
  },
  {
    title: "Unsainted",
    artist: "Slipknot",
    cover: "https://i.scdn.co/image/ab67616d0000b27326f20b4d67c0c7b0f137ce4f",
    url: "https://audio.jukehost.co.uk/rYOoR9lTMCtk9RmxBeEl2RlgS0loKPhR"
  },
  {
    title: "i think about you all the time",
    artist: "Deftones",
    cover: "https://i.scdn.co/image/ab67616d0000b2732fe9acaf02e66d89c6524d3b",
    url: "https://audio.jukehost.co.uk/HEGTnkekXfJG5kcFP2nhXxvpIRznCEKd"
  },
  {
    title: "Wait and Bleed",
    artist: "Slipknot",
    cover: "https://i.scdn.co/image/ab67616d0000b27381e0d9617e70d75e7ae11fa6",
    url: "https://audio.jukehost.co.uk/yRGgF51z30fxKVac3LQcSLqd8O4MgYWl"
  },
  {
    title: "Hand Of Blood",
    artist: "Bullet For My Valentine",
    cover: "https://i.scdn.co/image/ab67616d0000b27354113df5ab7a69df8a44c37e",
    url: "https://audio.jukehost.co.uk/eWI5uPM9f4xhEIYNkaNCin9sDDAe11BB"
  },
  {
    title: "The Devil in I",
    artist: "Slipknot",
    cover: "https://i.scdn.co/image/ab67616d0000b273eed722040c6810f7a7da93ea",
    url: "https://audio.jukehost.co.uk/dKxedJYZmgnddQ7qlve2v9EMkJVg7KXw"
  },
  {
    title: "Time is Running Out",
    artist: "Muse",
    cover: "https://i.scdn.co/image/ab67616d0000b2733303a842ee1bc0b23204333d",
    url: "https://audio.jukehost.co.uk/eNn4fnEq66GxzItu1uK3JspiCUJyogOi"
  },
  {
    title: "Faint",
    artist: "Linkin Park",
    cover: "https://i.scdn.co/image/ab67616d0000b2735f1f51d14e8bea89484ecd1b",
    url: "https://audio.jukehost.co.uk/XpvEhwQedCxEO8BwHTeSFfgqH9cAAHbI"
  },
  {
    title: "Hereafter",
    artist: "Architects",
    cover: "https://i.scdn.co/image/ab67616d0000b2735b6bb2889c9276c2ad126831",
    url: "https://audio.jukehost.co.uk/Y3kLtXRRpz07ID14smvXEzgTRL9W6Hmj"
  },
  {
    title: "Landmines",
    artist: "Sum 41",
    cover: "https://i.scdn.co/image/ab67616d0000b273d4109eee9ce4b4be92cbac39",
    url: "https://audio.jukehost.co.uk/oKpoCc9IKpiTztcVdQGeNdDrloy5v48F"
  },
  {
    title: "Aerials",
    artist: "System Of A Down",
    cover: "https://i.scdn.co/image/ab67616d0000b27307bc7d2a745636c356b4d0aa",
    url: "https://audio.jukehost.co.uk/6DRAzaZ2c2ql4e8wJR9xpBxHRlbOPpjm"
  },
  {
    title: "Blinded in Chains",
    artist: "Avenged Sevenfold",
    cover: "https://i.scdn.co/image/ab67616d0000b27391b3adb195fd4017fd3d6400",
    url: "https://audio.jukehost.co.uk/S7R4WicmrwMtCF5WcfkxYbVgpcjtEoPS"
  }
];

let currentIndex = Math.floor(Math.random() * tracks.length);

const audio = new Audio();
audio.src = tracks[currentIndex].url;
audio.volume = 0.5;

/* --- ELEMENTS --- */
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

// Playlist Elements
const playlistWrap = document.getElementById('playlist-wrap');
const playlistList = document.getElementById('playlist-list');
const playlistBtn = document.getElementById('playlist-toggle');

/* --- FUNCTIONS --- */

function loadTrackAnimated(index) {
  const wasPlaying = !audio.paused;

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

    // Aktualizace playlistu (zvýraznění)
    if (typeof updateActivePlaylistClass === "function") {
      updateActivePlaylistClass();
    }
  }, 300);
}

/* --- EVENT LISTENERS (Player) --- */

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

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

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.style.width = progress + "%";
});

document.getElementById("seek-bar-container").addEventListener("click", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  audio.currentTime = (clickX / rect.width) * audio.duration;
});

let isDragging = false;

const setVolume = (e) => {
  const rect = volumeContainer.getBoundingClientRect();
  let x = e.clientX - rect.left;
  x = Math.max(0, Math.min(x, rect.width));
  const newVolume = x / rect.width;
  audio.volume = newVolume;
  volumeBar.style.width = (newVolume * 100) + "%";
};

audio.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrackAnimated(currentIndex);
  setTimeout(() => {
    audio.play().catch(() => {});
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  }, 350);
});

volumeContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  setVolume(e);
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) setVolume(e);
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

audio.addEventListener("volumechange", () => {
  volumeBar.style.width = (audio.volume * 100) + "%";
});

/* --- STARS & VISUALS (CORRECTED GENERATION) --- */

const starsContainer = document.querySelector('.stars');
const starsCount = 150;
const starsArray = [];

for (let i = 0; i < starsCount; i++) {
  const star = document.createElement('span');
  star.classList.add('star');
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;
  
  // Tady si uložíme velikost
  const size = Math.random() * 2 + 1;
  const opacity = Math.random() * 0.7 + 0.3;

  star.style.top = top + "px";
  star.style.left = left + "px";
  star.style.width = star.style.height = size + "px";
  star.style.opacity = opacity;

  starsContainer.appendChild(star);
  
  // KLÍČOVÉ: Uložíme "parallaxFactor" (velikost / 2), aby se to hýbalo jako dřív
  starsArray.push({
    el: star,
    speed: Math.random() * 0.05 + 0.01, // Pro blikání
    parallaxFactor: size / 2             // Pro pohyb (rychlost podle velikosti)
  });
}

// Nastavení CSS animace pro hvězdy
starsArray.forEach(starObj => {
  const { el } = starObj;
  el.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
});

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

  star.animate([{
      transform: 'translate(0,0)',
      opacity: 1,
      boxShadow: '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)'
    },
    {
      transform: `translate(${distanceX}px, ${distanceY}px)`,
      opacity: 0,
      boxShadow: '0 0 4px white, 0 0 8px rgba(255,255,255,0.2)'
    }
  ], {
    duration: 1000 + Math.random() * 500,
    easing: 'ease-out'
  });

  setTimeout(() => star.remove(), 1500);
}
setInterval(() => {
  if (Math.random() < 0.5) createShootingStar();
}, 500);

window.addEventListener('resize', () => {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    star.style.top = top + 'px';
    star.style.left = left + 'px';
  });
});

/* --- PARALLAX (OPTIMALIZOVANÉ & OPRAVENÁ RYCHLOST) --- */
let targetX = 0;
let targetY = 0;

// Cachujeme ikony
const socialIcons = document.querySelectorAll('.example-2 svg');

// 1. Sledování myši
document.addEventListener('mousemove', (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 4;
  targetY = (e.clientY / window.innerHeight - 0.5) * 4;
});

// 2. Reset při opuštění okna
document.addEventListener('mouseleave', () => {
  targetX = 0;
  targetY = 0;
});

// 3. Gyroskop pro mobil
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {
    targetX = event.gamma / 45;
    targetY = event.beta / 45;
  });
}

// 4. Hlavní smyčka vykreslování
function updateParallax() {
  
  // OPTIMALIZACE: Používáme starsArray a parallaxFactor (správná rychlost)
  for (let i = 0; i < starsArray.length; i++) {
      const starObj = starsArray[i];
      // Tady používáme starObj.parallaxFactor místo starObj.speed
      starObj.el.style.transform = `translate(${targetX * starObj.parallaxFactor * 10}px, ${targetY * starObj.parallaxFactor * 10}px)`;
  }

  // Ikony sociálních sítí
  for (let i = 0; i < socialIcons.length; i++) {
      socialIcons[i].style.transform = `translate(${targetX * 3}px, ${targetY * 3}px)`;
  }

  requestAnimationFrame(updateParallax);
}

// Spuštění smyčky
updateParallax();


/* --- PLAYLIST LOGIC --- */

// 1. Generování HTML pro playlist
function renderPlaylist() {
  if (!playlistList) return;
  playlistList.innerHTML = ''; 
  tracks.forEach((track, index) => {
    const div = document.createElement('div');
    div.classList.add('playlist-item');
    if (index === currentIndex) div.classList.add('active'); 

    div.innerHTML = `
            <img src="${track.cover}" class="playlist-thumb" alt="cover">
            <div class="playlist-info">
                <span class="playlist-title">${track.title}</span>
                <span class="playlist-artist">${track.artist}</span>
            </div>
        `;

    // Kliknutí na skladbu v playlistu
    div.addEventListener('click', function() { 
        
      // --- ANIMACE KLIKNUTÍ ---
      document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('animating'));
      
      this.classList.add('animating');

      setTimeout(() => {
          this.classList.remove('animating');
      }, 450); 
      // --- KONEC ANIMACE ---


      currentIndex = index;
      loadTrackAnimated(currentIndex);
      playButton.innerHTML = '<i class="fas fa-pause"></i>';

      if (window.innerWidth < 600) {
        playlistWrap.classList.add('hidden');
      }
    });

    playlistList.appendChild(div);
  });
}

// 2. Funkce pro aktualizaci zvýraznění v playlistu
function updateActivePlaylistClass() {
  const items = document.querySelectorAll('.playlist-item');
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
      item.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    } else {
      item.classList.remove('active');
    }
  });
}

// 3. Toggle tlačítko
if (playlistBtn) {
  playlistBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    playlistWrap.classList.toggle('hidden');
    if (!playlistWrap.classList.contains('hidden')) {
      setTimeout(updateActivePlaylistClass, 100);
    }
  });
}

// 4. Zavření playlistu při kliknutí mimo
document.addEventListener('click', (e) => {
  if (playlistWrap && !playlistWrap.contains(e.target) && playlistBtn && !playlistBtn.contains(e.target)) {
    playlistWrap.classList.add('hidden');
  }
});

/* --- INITIALIZATION --- */
renderPlaylist();
loadTrackAnimated(currentIndex);
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

/* =========================================
   PLAYER LOGIC (Runs ONLY if player exists)
   ========================================= */
if (document.getElementById('music-player')) {

    /* --- INIT --- */
    let currentIndex = Math.floor(Math.random() * tracks.length);
    const audio = new Audio();
    audio.crossOrigin = "anonymous"; 
    audio.src = tracks[currentIndex].url;
    audio.volume = 0.5;

    /* --- DOM ELEMENTS --- */
    const playButton = document.getElementById("play-pause");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const trackTitle = document.getElementById("track-title");
    const trackArtist = document.getElementById("track-artist");
    const albumArt = document.getElementById("album-art-img");
    const seekBar = document.getElementById("seek-bar");
    const currentTimeEl = document.getElementById("current-time");
    const totalDurationEl = document.getElementById("total-duration");
    const volumeBtn = document.getElementById("volume-button");
    const volumeBar = document.getElementById("volume-bar");
    const volumeContainer = document.getElementById("volume-bar-container");

    const playlistWrap = document.getElementById('playlist-wrap');
    const playlistList = document.getElementById('playlist-list');
    const playlistBtn = document.getElementById('playlist-toggle');
    const playlistClose = document.getElementById('playlist-close');

    const nebulaGlow = document.querySelector('.nebula-glow');

    /* --- AUDIO CONTEXT & VISUALIZER SETUP --- */
    let audioCtx;
    let analyser;
    let source;
    let isAudioCtxSetup = false;

    function setupAudioContext() {
        if (isAudioCtxSetup) return;
        
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        
        analyser = audioCtx.createAnalyser();
        source = audioCtx.createMediaElementSource(audio);
        
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        
        analyser.fftSize = 256; 
        
        isAudioCtxSetup = true;
        renderVisualizer();
    }

    function renderVisualizer() {
        if (!audio.paused) {
            requestAnimationFrame(renderVisualizer);
        }
        
        if (!analyser) return;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        let bassTotal = 0;
        const bassRange = 10;
        for (let i = 0; i < bassRange; i++) {
            bassTotal += dataArray[i];
        }
        const bassAverage = bassTotal / bassRange;

        const intensity = bassAverage / 255;
        const newOpacity = 0.15 + (intensity * 0.5); 
        const newScale = 1 + (intensity * 0.3);

        if (nebulaGlow) {
            nebulaGlow.style.opacity = newOpacity;
            nebulaGlow.style.transform = `translate(-50%, -50%) scale(${newScale})`;
        }
    }

    /* --- PLAYER FUNCTIONS --- */
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    function loadTrack(index) {
        const wasPlaying = !audio.paused || audio.ended;
        const textWrapper = document.querySelector('.track-text'); 
        
        // Animace textu
        if(textWrapper) textWrapper.classList.add('anim-out');
        
        // Animace coveru
        if(albumArt) {
            albumArt.style.transform = "scale(0.8) rotate(-10deg)";
            albumArt.style.opacity = 0;
        }

        setTimeout(() => {
            audio.src = tracks[index].url;
            if(trackTitle) trackTitle.textContent = tracks[index].title;
            if(trackArtist) trackArtist.textContent = tracks[index].artist;
            if(albumArt) albumArt.src = tracks[index].cover;
            
            audio.currentTime = 0;
            if(seekBar) seekBar.style.width = "0%";
            if(volumeBar) volumeBar.style.height = (audio.volume * 100) + "%";
            
            if(textWrapper) {
                textWrapper.classList.remove('anim-out');
                textWrapper.classList.add('anim-in');
                void textWrapper.offsetWidth; // Trigger reflow
                textWrapper.classList.remove('anim-in');
            }
            
            if(albumArt) {
                albumArt.style.transform = "scale(1) rotate(0deg)";
                albumArt.style.opacity = 1;
            }

            if (wasPlaying) {
                audio.play()
                    .then(() => { if(isAudioCtxSetup) renderVisualizer(); })
                    .catch(e => console.log("Auto-play prevented", e));
            }
            updatePlaylistActive();
        }, 400); 
    }

    /* --- EVENT LISTENERS --- */
    if(playButton) {
        playButton.addEventListener("click", () => {
            if (!isAudioCtxSetup) setupAudioContext();
            if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

            if (audio.paused) {
                audio.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                document.getElementById('music-player').classList.add('playing');
                renderVisualizer();
            } else {
                audio.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
                document.getElementById('music-player').classList.remove('playing');
                if (nebulaGlow) {
                    nebulaGlow.style.opacity = 0.3;
                    nebulaGlow.style.transform = `translate(-50%, -50%) scale(1)`;
                }
            }
        });
    }

    if(nextButton) nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % tracks.length;
        loadTrack(currentIndex);
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    });

    if(prevButton) prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentIndex);
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    });

    audio.addEventListener('ended', () => {
        currentIndex = (currentIndex + 1) % tracks.length;
        loadTrack(currentIndex);
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    });

    audio.addEventListener("timeupdate", () => {
        if(seekBar) {
            const progress = (audio.currentTime / audio.duration) * 100;
            seekBar.style.width = progress + "%";
        }
        if(currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
        if(totalDurationEl) totalDurationEl.textContent = formatTime(audio.duration);
    });

    if(document.getElementById("seek-bar-container")) {
        document.getElementById("seek-bar-container").addEventListener("click", (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            audio.currentTime = (clickX / rect.width) * audio.duration;
        });
    }

    // Volume
    const setVolume = (e) => {
        const rect = volumeContainer.getBoundingClientRect();
        let y = rect.bottom - e.clientY; 
        y = Math.max(0, Math.min(y, rect.height));
        const newVolume = y / rect.height;
        
        audio.volume = newVolume;
        volumeBar.style.height = (newVolume * 100) + "%";
        
        if(newVolume === 0) volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        else if(newVolume < 0.5) volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
        else volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    };

    let isDraggingVol = false;
    if(volumeContainer) {
        volumeContainer.addEventListener("mousedown", (e) => { 
            isDraggingVol = true; 
            setVolume(e); 
            e.preventDefault(); 
        });
    }
    document.addEventListener("mousemove", (e) => { if(isDraggingVol) setVolume(e); });
    document.addEventListener("mouseup", () => { isDraggingVol = false; });

    /* --- PLAYLIST --- */
    function renderPlaylist() {
        if(!playlistList) return;
        playlistList.innerHTML = '';
        tracks.forEach((track, index) => {
            const div = document.createElement('div');
            div.classList.add('playlist-item');
            if (index === currentIndex) div.classList.add('active');
            
            div.innerHTML = `
                <img src="${track.cover}" class="playlist-thumb">
                <div class="playlist-info">
                    <span class="playlist-title">${track.title}</span>
                    <span class="playlist-artist">${track.artist}</span>
                </div>
            `;
            
            div.addEventListener('click', () => {
                if (!isAudioCtxSetup) setupAudioContext();
                currentIndex = index;
                loadTrack(currentIndex);
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                document.getElementById('music-player').classList.add('playing');
            });
            
            playlistList.appendChild(div);
        });
    }

    function updatePlaylistActive() {
        const items = document.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            if(index === currentIndex) item.classList.add('active');
            else item.classList.remove('active');
        });
    }

    if(playlistBtn) {
        playlistBtn.addEventListener('click', () => {
            playlistWrap.classList.toggle('hidden');
            if(!playlistWrap.classList.contains('hidden')) {
                const active = document.querySelector('.playlist-item.active');
                if(active) active.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
    if(playlistClose) playlistClose.addEventListener('click', () => playlistWrap.classList.add('hidden'));

    /* --- 3D TILT EFFECT (DESKTOP ONLY) --- */
    const playerCard = document.getElementById('music-player');

    if (window.innerWidth > 900 && playerCard) {
        playerCard.addEventListener('mousemove', (e) => {
            const rect = playerCard.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const x = e.clientX - centerX;
            const y = e.clientY - centerY;
            
            const rotateX = -y / 10; 
            const rotateY = x / 10;
            
            playerCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        playerCard.addEventListener('mouseleave', () => {
            playerCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            playerCard.style.transition = 'transform 0.5s ease';
            setTimeout(() => { playerCard.style.transition = 'none'; }, 500);
        });
    }

    // Inicializace
    renderPlaylist();
    loadTrack(currentIndex);
} // Konec IF (player check)

/* =========================================
   STARS & BACKGROUND LOGIC (Runs EVERYWHERE)
   ========================================= */
const starsContainer = document.querySelector('.stars');
const starCount = 200;

if (starsContainer) {
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2;
        const duration = Math.random() * 3 + 2;
        
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animation = `twinkle ${duration}s infinite alternate`;
        
        starsContainer.appendChild(star);
    }

    // Paralaxa jen na PC
    if (window.innerWidth > 900) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 20;
            const y = (e.clientY / window.innerHeight) * 20;
            starsContainer.style.transform = `translate(-${x}px, -${y}px)`;
        });
    }
}
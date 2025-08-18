// --- Seznam tracků ---
const tracks = [
  { title: "Scars", artist: "Papa Roach", cover: "https://i.scdn.co/image/ab67616d0000b2732d5551c32546cafe3aafd939", url: "https://audio.jukehost.co.uk/jQqWY6Bt1ASpFzt5O0y1l0AYVdF7s7VMP" },
  { title: "Can You Feel My Heart", artist: "Bring Me The Horizon", cover: "https://i.scdn.co/image/ab67616d0000b27360cf7c8dd93815ccd6cb4830", url: "https://audio.jukehost.co.uk/RPM2ch4dcbsObFDYwSA0WdKoeijfj88A" },
    { title: "Hit 'Em Up", artist: "2pac", cover: "https://i.scdn.co/image/ab67616d0000b273d81a092eb373ded457d94eec", url: "https://audio.jukehost.co.uk/P65uLV7S4q74s4ApKNX5tI8VxSMbOz8H" },
  { title: "Ambitionz Az A Ridah", artist: "2pac", cover: "https://i.scdn.co/image/ab67616d0000b273073aebff28f79959d2543596", url: "https://audio.jukehost.co.uk/dhXWYMZI7zPdBeSj35DdSWFIyWc4poxP" },
];

let currentIndex = 0;
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

// --- Load track with fade ---
function loadTrack(index) {
    const wasPlaying = !audio.paused;

    [albumArt, trackTitle, trackArtist].forEach(el => {
        el.classList.add("fade-out");
    });

    setTimeout(() => {
        const track = tracks[index];
        audio.src = track.url;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        albumArt.src = track.cover;
        audio.currentTime = 0;
        seekBar.style.width = "0%";
        volumeBar.style.width = (audio.volume * 100) + "%";

        [albumArt, trackTitle, trackArtist].forEach(el => {
            el.classList.remove("fade-out");
            el.classList.add("fade-in");
        });

        setTimeout(() => {
            [albumArt, trackTitle, trackArtist].forEach(el => el.classList.remove("fade-in"));
            if (wasPlaying) audio.play().catch(() => {});
        }, 300);

        setThemeForTrack(index);
    }, 300);
}

// --- Play/Pause ---
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
    loadTrack(currentIndex);
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
});
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
});

// --- Seek Bar ---
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100 || 0;
    seekBar.style.width = progress + "%";
});
document.getElementById("seek-bar-container").addEventListener("click", (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
});

// --- Volume Bar ---
let volumeTimeout;
let isDragging = false;
const showVolume = () => {
    volumeContainer.classList.add("show");
    volumeContainer.style.cursor = "pointer";
    clearTimeout(volumeTimeout);
    volumeTimeout = setTimeout(() => volumeContainer.classList.remove("show"), 5000);
};
const setVolume = (e) => {
    const rect = volumeContainer.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    audio.volume = x / rect.width;
    volumeBar.style.width = (audio.volume * 100) + "%";
    showVolume();
};
volumeBtn.addEventListener("mouseenter", showVolume);
volumeContainer.addEventListener("mouseenter", showVolume);
volumeContainer.addEventListener("mousedown", e => { isDragging = true; setVolume(e); showVolume(); });
document.addEventListener("mousemove", e => { if(isDragging) setVolume(e); });
document.addEventListener("mouseup", () => isDragging = false);
audio.addEventListener("volumechange", () => { volumeBar.style.width = (audio.volume * 100) + "%"; showVolume(); });

// --- Initial track ---
loadTrack(currentIndex);

// --- Date/Time ---
function updateDateTime() {
    const now = new Date();
    const dayNames = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    const dateStr = `${dayNames[now.getDay()]} ${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    document.getElementById('burger-date-time').innerHTML = `${dateStr}<br>${timeStr}`;
}
setInterval(updateDateTime,1000); updateDateTime();

// --- Stars & Shooting Stars ---
const starsContainer = document.querySelector('.stars');
const starsArray = [];
for(let i=0;i<150;i++){
    const star = document.createElement('span');
    star.classList.add('star');
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    const size = Math.random()*2+1;
    const speed = Math.random()*0.05 + 0.01;
    const opacity = Math.random()*0.7 + 0.3;
    star.style.top = top + "px";
    star.style.left = left + "px";
    star.style.width = star.style.height = size + "px";
    star.style.opacity = opacity;
    starsContainer.appendChild(star);
    starsArray.push({el: star, speed});
    (function blink(el){
        const newOpacity = Math.random()*0.7 +0.3;
        el.style.transition = `opacity ${Math.random()*0.5+0.2}s ease-in-out`;
        el.style.opacity = newOpacity;
        setTimeout(()=>blink(el), Math.random()*1000+500);
    })(star);
}

function createShootingStar(){
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
    const dx = 200+Math.random()*150, dy=50+Math.random()*50;
    star.animate([{transform:'translate(0,0)',opacity:1},{transform:`translate(${dx}px,${dy}px)`,opacity:0}],{duration:1200+Math.random()*500,easing:'ease-out'});
    setTimeout(()=>star.remove(),1500);
}
setInterval(()=>{ if(Math.random()<0.3) createShootingStar(); }, 800);

// --- Paralaxa social ikon ---
document.addEventListener('mousemove', e => {
    const icons = document.querySelectorAll('.example-2 svg');
    const x = (e.clientX / window.innerWidth -0.5)*10;
    const y = (e.clientY / window.innerHeight-0.5)*10;
    icons.forEach(icon=>{ icon.style.transition='transform 0.4s ease-out'; icon.style.transform=`translate(${x}px,${y}px)`; });
});
document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.example-2 svg').forEach(icon=>{ icon.style.transition='transform 0.8s ease-out'; icon.style.transform='translate(0,0)'; });
});

// --- Paralaxa hvězd podle myši ---
document.addEventListener('mousemove', e => {
    const x = (e.clientX/window.innerWidth-0.5)*40;
    const y = (e.clientY/window.innerHeight-0.5)*40;
    starsArray.forEach(s=>{ s.el.style.transform = `translate(${x*s.speed}px, ${y*s.speed}px)`; });
});
window.addEventListener('resize', ()=>{
    starsArray.forEach(s=>{
        s.el.style.top = Math.random()*window.innerHeight+'px';
        s.el.style.left = Math.random()*window.innerWidth+'px';
    });
});

// --- Themes ---
const themes = { stars: ()=>{ document.body.style.background='black'; document.querySelector('.stars').style.display='block'; } };
function setThemeForTrack(index){ themes.stars(); }

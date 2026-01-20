/* --- OPTIMALIZOVANÝ ENGINE PRO POZADÍ (HVĚZDY) --- */
const starsContainer = document.querySelector('.stars');
const starsCount = 150;
const starsArray = [];

for (let i = 0; i < starsCount; i++) {
  const star = document.createElement('span'); star.classList.add('star');
  const top = Math.random() * window.innerHeight; const left = Math.random() * window.innerWidth;
  const size = Math.random() * 2 + 1; const opacity = Math.random() * 0.7 + 0.3;
  star.style.top = top + "px"; star.style.left = left + "px";
  star.style.width = star.style.height = size + "px"; star.style.opacity = opacity;
  star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
  starsContainer.appendChild(star);
  starsArray.push({ el: star, speed: Math.random() * 0.05 + 0.01, parallaxFactor: size / 3 });
}
if (!document.getElementById('star-style')) {
    const style = document.createElement('style'); style.id = 'star-style';
    style.innerHTML = `@keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } } .star { animation: twinkle var(--duration) ease-in-out infinite; }`;
    document.head.appendChild(style);
}

function createShootingStar() {
  const star = document.createElement('span'); star.classList.add('shooting-star');
  const startX = Math.random() * window.innerWidth * 0.8; const startY = Math.random() * window.innerHeight * 0.3;
  Object.assign(star.style, { position: 'absolute', top: startY + 'px', left: startX + 'px', width: '2px', height: '2px', background: 'white', borderRadius: '50%', boxShadow: '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)', opacity: '1', zIndex: '0' });
  starsContainer.appendChild(star);
  const distanceX = 200 + Math.random() * 150; const distanceY = 50 + Math.random() * 50;
  star.animate([ { transform: 'translate(0,0)', opacity: 1 }, { transform: `translate(${distanceX}px, ${distanceY}px)`, opacity: 0 } ], { duration: 1000 + Math.random() * 500, easing: 'ease-out' });
  setTimeout(() => star.remove(), 1500);
}
setInterval(() => { if (Math.random() < 0.3) createShootingStar(); }, 1500);
window.addEventListener('resize', () => {
    starsArray.forEach(starObj => { starObj.el.style.top = (Math.random() * window.innerHeight) + 'px'; starObj.el.style.left = (Math.random() * window.innerWidth) + 'px'; });
});

/* --- PARALLAX --- */
let targetX = 0; let targetY = 0;
document.addEventListener('mousemove', (e) => { targetX = (e.clientX / window.innerWidth - 0.5) * 4; targetY = (e.clientY / window.innerHeight - 0.5) * 4; });
document.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });
function updateParallax() {
  for (let i = 0; i < starsArray.length; i++) { const starObj = starsArray[i]; starObj.el.style.transform = `translate(${targetX * starObj.parallaxFactor * 10}px, ${targetY * starObj.parallaxFactor * 10}px)`; }
  requestAnimationFrame(updateParallax);
}
updateParallax();


/* --- LOGIKA PRO HRY A FILTRY --- */

// 1. Filtrování
const filterCheckboxes = document.querySelectorAll('.filters input[type="checkbox"]');
const games = document.querySelectorAll('.game-box');

filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Pokud zapínám checkbox, vypnu ostatní (single select)
        if (checkbox.checked) {
            filterCheckboxes.forEach(cb => {
                if (cb !== checkbox) cb.checked = false;
            });
        }

        const activeFilter = Array.from(filterCheckboxes).find(cb => cb.checked)?.value;

        games.forEach(game => {
            const genre = game.dataset.genre;
            if (!activeFilter || genre === activeFilter) {
                game.style.display = "flex"; 
                // Reset animace
                game.style.animation = 'none';
                game.offsetHeight; /* trigger reflow */
                game.style.animation = 'fadeIn 0.3s ease forwards';
            } else {
                game.style.display = "none"; 
            }
        });
    });
});

// 2. Rating Circles
document.querySelectorAll('.game-box').forEach(box => {
    const rating = box.dataset.rating; 
    const circle = box.querySelector('.circle');
    const text = box.querySelector('.percentage');

    if(circle && text) {
        const dash = (rating / 10) * 100;
        circle.setAttribute('stroke-dasharray', `${dash}, 100`);
        text.textContent = rating;
        
        if(rating >= 9) circle.style.stroke = "#fff"; 
        else if(rating >= 7) circle.style.stroke = "#ccc"; 
        else circle.style.stroke = "#888"; 
    }
});

// 3. Video Hover
const gameBoxes = document.querySelectorAll('.game-box');

gameBoxes.forEach(box => {
    const video = box.querySelector('video');
    const img = box.querySelector('img');

    box.addEventListener('mouseenter', () => {
        if(video) {
            video.currentTime = 0; 
            video.play().catch(e => {}); 
        }
    });

    box.addEventListener('mouseleave', () => {
        if(video) {
            video.pause();
        }
    });
});

/* --- DATUM A ČAS --- */
function updateDateTime() {
    const timeElement = document.getElementById('burger-date-time');
    if (!timeElement) return;
    const now = new Date();
    const dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    timeElement.innerHTML = `${dayNames[now.getDay()]} ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}<br>${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
}
setInterval(updateDateTime, 1000); updateDateTime();
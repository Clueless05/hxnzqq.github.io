/* --- OPTIMALIZOVANÝ ENGINE PRO HVĚZDY A GLOW --- */
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


/* --- 3D TILT EFFECT (100% OPRAVA RESETU) --- */
const card = document.getElementById('tilt-card');

if (card) {
    // Stavová proměnná: sledujeme, jestli jsme byli uvnitř v minulém snímku
    let isHovering = false;

    // Funkce pro reset (narovnání karty)
    const resetCard = () => {
        // Pomalý, pružný návrat
        card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        card.style.setProperty('--rotateX', `0deg`);
        card.style.setProperty('--rotateY', `0deg`);
    };

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;

        const rect = card.getBoundingClientRect();
        
        // Matematická kontrola: je myš uvnitř?
        const isInside = 
            e.clientX >= rect.left && 
            e.clientX <= rect.right && 
            e.clientY >= rect.top && 
            e.clientY <= rect.bottom;

        if (isInside) {
            // JSME UVNITŘ
            isHovering = true; // Značíme si, že jsme uvnitř

            // Rychlá reakce při pohybu
            card.style.transition = 'transform 0.1s ease-out';

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Glow
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);

            // Tilt s limitem (Clamp)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = Math.max(-10, Math.min(10, ((y - centerY) / 25) * -1));
            const rotateY = Math.max(-10, Math.min(10, (x - centerX) / 25));

            card.style.setProperty('--rotateX', `${rotateX}deg`);
            card.style.setProperty('--rotateY', `${rotateY}deg`);

        } else if (isHovering) {
            // PRÁVĚ JSME OPUSTILI KARTU (podle matematiky)
            // Toto se spustí i při velmi pomalém pohybu o 1px ven
            isHovering = false;
            resetCard();
        }
    });

    // Pojistka: Reset i při standardní události (např. alt-tab)
    card.addEventListener('mouseleave', () => {
        isHovering = false;
        resetCard();
    });
}

/* --- DATUM A ČAS --- */
function updateDateTime() {
    const timeElement = document.getElementById('burger-date-time');
    if (!timeElement) return;
    const now = new Date();
    const dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    timeElement.innerHTML = `${dayNames[now.getDay()]} ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}<br>${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
}
setInterval(updateDateTime, 1000); updateDateTime();
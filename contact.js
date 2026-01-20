/* --- OPTIMALIZOVANÝ ENGINE PRO HVĚZDY A GLOW --- */

const starsContainer = document.querySelector('.stars');
const starsCount = 150;
const starsArray = [];

/* 1. Generování hvězd */
for (let i = 0; i < starsCount; i++) {
  const star = document.createElement('span');
  star.classList.add('star');
  
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;
  const size = Math.random() * 2 + 1;
  const opacity = Math.random() * 0.7 + 0.3;

  star.style.top = top + "px";
  star.style.left = left + "px";
  star.style.width = star.style.height = size + "px";
  star.style.opacity = opacity;
  
  // Blikání
  star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');

  starsContainer.appendChild(star);
  
  starsArray.push({
    el: star,
    speed: Math.random() * 0.05 + 0.01,
    parallaxFactor: size / 3
  });
}

// Dynamické přidání animace blikání
if (!document.getElementById('star-style')) {
    const style = document.createElement('style');
    style.id = 'star-style';
    style.innerHTML = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        .star { animation: twinkle var(--duration) ease-in-out infinite; }
    `;
    document.head.appendChild(style);
}

/* 2. Padající hvězdy */
function createShootingStar() {
  const star = document.createElement('span');
  star.classList.add('shooting-star');
  
  const startX = Math.random() * window.innerWidth * 0.8;
  const startY = Math.random() * window.innerHeight * 0.3;

  Object.assign(star.style, {
      position: 'absolute', top: startY + 'px', left: startX + 'px',
      width: '2px', height: '2px', background: 'white', borderRadius: '50%',
      boxShadow: '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)', opacity: '1', zIndex: '0'
  });

  starsContainer.appendChild(star);

  const distanceX = 200 + Math.random() * 150;
  const distanceY = 50 + Math.random() * 50;

  star.animate([
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: `translate(${distanceX}px, ${distanceY}px)`, opacity: 0 }
  ], { duration: 1000 + Math.random() * 500, easing: 'ease-out' });

  setTimeout(() => star.remove(), 1500);
}
setInterval(() => { if (Math.random() < 0.3) createShootingStar(); }, 1500);

/* 3. Resize */
window.addEventListener('resize', () => {
    starsArray.forEach(starObj => {
        starObj.el.style.top = (Math.random() * window.innerHeight) + 'px';
        starObj.el.style.left = (Math.random() * window.innerWidth) + 'px';
    });
});

/* --- PARALLAX (OPTIMALIZOVANÁ) --- */
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 4;
  targetY = (e.clientY / window.innerHeight - 0.5) * 4;
});
document.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {
    targetX = event.gamma / 45; targetY = event.beta / 45;
  });
}

function updateParallax() {
  for (let i = 0; i < starsArray.length; i++) {
      const starObj = starsArray[i];
      starObj.el.style.transform = `translate(${targetX * starObj.parallaxFactor * 10}px, ${targetY * starObj.parallaxFactor * 10}px)`;
  }
  requestAnimationFrame(updateParallax);
}
updateParallax();

/* --- GLOW EFFECT PRO KONTAKTNÍ FORMULÁŘ --- */
const contactCard = document.querySelector('.contact-card');
if (contactCard) {
    contactCard.addEventListener('mousemove', (e) => {
        const rect = contactCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        contactCard.style.setProperty('--x', `${x}px`);
        contactCard.style.setProperty('--y', `${y}px`);
    });
}

/* --- DATUM A ČAS --- */
function updateDateTime() {
    const timeElement = document.getElementById('burger-date-time');
    if (!timeElement) return;

    const now = new Date();
    const dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const dateStr = `${dayNames[now.getDay()]} ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;

    timeElement.innerHTML = `${dateStr}<br>${timeStr}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

const starsContainer = document.querySelector('.stars');
const starsCount = 150;
const starsArray = [];


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


setInterval(() => {
    if(Math.random() < 0.5) {
        createShootingStar();
    }
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


document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    const x = (e.clientX / window.innerWidth - 0.5) * 40; 
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    
    stars.forEach(star => {
        const speed = star.offsetWidth / 2; 
        star.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});





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


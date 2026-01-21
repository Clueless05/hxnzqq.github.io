/* --- SETUP PAGE INTERACTIVITY --- */

/* MOUSE-TRACKING SPOTLIGHT EFFECT */
/* Tento skript sleduje myš nad každou kartou a posouvá světelný efekt */

const cards = document.querySelectorAll('.spec-card');

if (window.innerWidth > 900) { // Efekt aktivujeme jen na desktopu pro výkon
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // 1. Získáme rozměry a pozici karty
            const rect = card.getBoundingClientRect();

            // 2. Vypočítáme pozici myši RELATIVNĚ k levému hornímu rohu karty
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 3. Nastavíme CSS proměnné pro gradient
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
}
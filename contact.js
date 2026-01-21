/* --- CONTACT FORM LOGIC --- */

/* 1. Detekce vyplněného inputu pro animaci labelu */
const inputs = document.querySelectorAll('.input-wrapper input, .input-wrapper textarea');

inputs.forEach(input => {
    // Check na začátku (pro případ autofillu)
    if (input.value.trim() !== "") {
        input.parentElement.classList.add('has-value');
    }

    // Check při změně
    input.addEventListener('blur', () => {
        if (input.value.trim() !== "") {
            input.parentElement.classList.add('has-value');
        } else {
            input.parentElement.classList.remove('has-value');
        }
    });
    
    // Check při psaní
    input.addEventListener('input', () => {
        if (input.value.trim() !== "") {
            input.parentElement.classList.add('has-value');
        }
    });
});

/* (Volitelné) Glow efekt na kartě - zjednodušená verze */
const contactCard = document.querySelector('.contact-card');
if (contactCard && window.innerWidth > 900) {
    contactCard.addEventListener('mousemove', (e) => {
        const rect = contactCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Můžeme použít pro jemný odlesk, pokud bys chtěl v CSS přidat radial-gradient
        // contactCard.style.setProperty('--x', `${x}px`);
        // contactCard.style.setProperty('--y', `${y}px`);
    });
}

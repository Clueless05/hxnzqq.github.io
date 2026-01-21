/* --- GAMES PAGE LOGIC --- */

// 1. Filtrování her
const filterCheckboxes = document.querySelectorAll('.filters input[type="checkbox"]');
const games = document.querySelectorAll('.game-box');

filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Single select logika: vypnout ostatní
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
                // Reset animace pro efekt objevení
                game.style.animation = 'none';
                game.offsetHeight; /* trigger reflow */
                game.style.animation = 'fadeIn 0.3s ease forwards';
            } else {
                game.style.display = "none"; 
            }
        });
    });
});

// Přidání CSS animace pro filtrování
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);


// 2. Rating Circles (Vykreslení grafů)
document.querySelectorAll('.game-box').forEach(box => {
    const rating = box.dataset.rating; 
    const circle = box.querySelector('.circle');
    const text = box.querySelector('.percentage');

    if(circle && text) {
        const dash = (rating / 10) * 100;
        // Nastavení délky kruhu podle hodnocení
        circle.setAttribute('stroke-dasharray', `${dash}, 100`);
        text.textContent = rating;
        
        // Barvení podle skóre
        if(rating >= 9) circle.style.stroke = "#fff"; 
        else if(rating >= 7) circle.style.stroke = "#ccc"; 
        else circle.style.stroke = "#666"; 
    }
});


// 3. Video Hover Efekt
const gameBoxes = document.querySelectorAll('.game-box');

gameBoxes.forEach(box => {
    const video = box.querySelector('video');

    box.addEventListener('mouseenter', () => {
        if(video) {
            video.currentTime = 0; 
            // Play může selhat (policy prohlížeče), ošetříme catch
            video.play().catch(e => { /* Autoplay blocked or not loaded */ }); 
        }
    });

    box.addEventListener('mouseleave', () => {
        if(video) {
            video.pause();
        }
    });
});
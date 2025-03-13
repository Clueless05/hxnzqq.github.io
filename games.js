const completedGames = [
    "Assassins Creed (2007)",
    "Assassins Creed II (2009)",
    "Assassins Creed IV (2013)",
    "Assassins Creed Unity (2014)",
    "Assassins Creed Syndicate (2015)",
    "Assassins Creed Origins (2017)",
    "Assassins Creed Odyssey (2018)",
    "A Way Out (2018)",
    "Call of Duty Modern Warfare III (2023)",
    "Call of Duty Black Ops 6 (2024)",
    "Detroit: Become Human (2018)",
    "Far Cry 3 (2012)",
    "Far Cry 4 (2014)",
    "Forza Horizon 5 (2021)",
    "God of War (2018)",
    "God of War Ragnarok (2024)",
    "Grand Theft Auto V (2013)",
    "High on life (2022)",
    "Hogwarts Legacy (2023)",
    "Horizon Zero Dawn (2017)",
    "Horizon Forbidden West (2022)",
    "It Takes Two (2021)",
    "Just Cause 4 (2018)",
    "Kingdom Come Deliverance (2018)",
    "Mafia (2002)",
    "Mafia Definitive Edition (2020)",
    "Mafia II (2010)",
    "Marvel's Avengers (2020)",
    "Marvel's Guardians of The Galaxy (2021)",
    "Marvel's Spider-Man (2018) [100% with DLCs]",
    "Marvel's Spider-Man 2 (2025)",
    "Marvel's Spider-Man: Miles Morales (2020)",
    "My Friend Pedro (2019)",
    "Need for Speed Most Wanted (2005)",
    "Need for Speed Most Wanted (2012)",
    "Need for Speed Heat (2019)",
    "Need for Speed Payback (2017)",
    "Resident Evil 3 Remake (2022)",
    "Resident Evil 7 (2017)",
    "Rise of the Tomb Raider (2015)",
    "Sifu (2023)",
    "South Park Stick of truth (2014)",
    "South Park The fractured but whole (2017)",
    "Telltale The Walking Dead Season One (2012)",
    "Telltale The Walking Dead Season Two (2013)",
    "Telltale The Walking Dead The new Frontier (2016)",
    "Telltale The Walking Dead Final Season (2018)",
    "Telltale The Walking Dead Michone (2016)",
    "Terraria (2014)",
    "The Last of Us Part I (2023)",
    "Tomb Raider (2013)",
    "Uncharted 4 (2022)",
    "Watch Dogs (2014)",
    "Watch Dogs 2 (2016)",
];

const unfinishedGames = [
    "Atomic Heart (2023)",
    "Control  (2019)",
    "Days Gone (2021)",
    "Far Cry 5  (2018)",
    "Far Cry 6  (2023)",
    "Grand Theft Auto San Andreas (2004)",
    "Shadow of the Tomb Raider (2018)",
    "Watch Dogs Legion (2023)",
];

const completedGamesList = document.getElementById('completed-games');
const unfinishedGamesList = document.getElementById('unfinished-games');

completedGames.forEach(game => {
    const li = document.createElement('li');
    li.textContent = game;
    completedGamesList.appendChild(li);
});

unfinishedGames.forEach(game => {
    const li = document.createElement('li');
    li.textContent = game;
    unfinishedGamesList.appendChild(li);
});

// Calculate and display stats
document.getElementById('completed-count').textContent = completedGames.length;
document.getElementById('unfinished-count').textContent = unfinishedGames.length;
document.getElementById('completion-percentage').textContent = 
    ((completedGames.length / (completedGames.length + unfinishedGames.length)) * 100).toFixed(1) + '%';

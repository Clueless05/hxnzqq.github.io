const messages = [
    "Jsi si tím jistá?",
    "Jako opravdu jistá??",
    "Opravdu opravdu?",
    "Bella mia per favore...",
    "Zkus nad tím přemýšlet!",
    "Pokud řekneš ne, budu velmi smutný...",
    "Budu velmi velmi smutný...",
    "Dobře fajn přestanu se ptát...",
    "Dělám si srandu, prosím! ❤️"
];

let messageIndex = 0;

function sendWebhook(url, content) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    }).catch(err => console.error("Webhook error:", err));
}

function handleNoClick() {
    sendWebhook(
        "https://discordapp.com/api/webhooks/1460702752417251360/UwjSz3lWB_CrOstmvWJqGrzuc52XNsblcOv3G7NcSiFTgcB-yh89nO3ZyKe378m1jh7s",
        "❌ Kliknula na **NE** 😭"
    );

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    navigator.sendBeacon(
        "https://discordapp.com/api/webhooks/1460702607516504236/OFjzZ5sS0J8xqMYOIR52n94vDMFxbNsFr70_1Tim-yiOpCKcCMQqAIgftXS4MxVUKl6d",
        JSON.stringify({
            content: "💖 Kliknula na **ANO** 🥰 VALENTÝN JE JISTÝ!"
        })
    );

    window.location.href = "yes_page.html";
}

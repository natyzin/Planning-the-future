const buttons = document.querySelectorAll(".button");
const tabsContent = document.querySelectorAll(".tab-content");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
            tabsContent[j].classList.remove("active");
        }
        buttons[i].classList.add("active");
        tabsContent[i].classList.add("active");
    }
}

const counters = document.querySelectorAll(".counter");
const goalTime1 = new Date("2025-01-01T00:00:00"); // Updated to 2025

function updateCountdown() {
    const currentTime = new Date();
    counters[0].textContent = goalTime1 - currentTime; // Basic countdown display
}

// Initial call and set interval for countdown
updateCountdown();
setInterval(updateCountdown, 1000);
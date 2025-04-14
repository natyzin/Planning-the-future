const buttons = document.querySelectorAll(".button");
const tabsContent = document.querySelectorAll(".tab-content");

// Tab switching functionality
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

// Countdown functionality
const counters = document.querySelectorAll(".counter");
const goalDate1 = new Date("2025-01-15T00:00:00");
const goalDate2 = new Date("2025-03-20T00:00:00");
const goalDate3 = new Date("2025-06-30T00:00:00");
const goalDate4 = new Date("2025-12-31T00:00:00");
const goalDates = [goalDate1, goalDate2, goalDate3, goalDate4];

function calculateTime(goalDate) {
    let currentTime = new Date();
    let timeRemaining = goalDate - currentTime;
    
    if (timeRemaining <= 0) return "Goal Completed!";
    
    let seconds = Math.floor(timeRemaining / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

function updateCountdown() {
    for (let i = 0; i < counters.length; i++) {
        counters[i].textContent = calculateTime(goalDates[i]);
    }
}

function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

startCountdown();
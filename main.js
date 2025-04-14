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
const goalDate1 = new Date("2023-10-05T00:00:00");

counters[0].textContent = calculateTime(goalDate1);

function calculateTime(goalDate) {
    let currentTime = new Date();
    let timeRemaining = goalDate - currentTime;
    let seconds = Math.floor(timeRemaining / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}
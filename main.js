const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        buttons[i].classList.add("active");
    };
}
const buttons = document.querySelectorAll(".button");
const tabsContent = document.querySelectorAll(".tab-content");

for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        for(let j = 0; j < buttons.length; j++){
            buttons[j].classList.remove("active");
            tabsContent[j].classList.remove("active");
        }
        buttons[i].classList.add("active");
        tabsContent[i].classList.add("active");
    }
}
import setTimer from "./setTimer.js";
import timeObj from "./timeObj.js";

const butPlace = document.querySelector(".button_set_timer");

let button = document.createElement("button");

button.addEventListener("click", () => {
    let { hours: h, minutes: m, seconds: s } = timeObj;
    h = Number(h);
    m = Number(m);
    s = Number(s);
    if((isNaN(h) || isNaN(m) || isNaN(s)) || (h === 0 && m === 0 && s === 0)) {
        console.log('Fail, Try Again');
    }else {
        setTimer(h, m, s, button);
        button.innerHTML = "Timer Started";
    }
})

button.addEventListener("mouseover", () => {
    button.style.background = "chocolate";
});
button.addEventListener("mouseout", () => {
    button.style.background = "";
})
//There may be a bug with other elements, you can apply MutationObserver

window.addEventListener("load", () => {
    button.className = "button_time";
    button.innerHTML = "Start Timer"
    butPlace.append(button);
})
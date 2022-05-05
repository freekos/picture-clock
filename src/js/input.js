import timeObj from "./timeObj.js";

const setTimers = document.querySelector(".set_timers");
const inputCount = 3;

function createInput(i) {
    let input = document.createElement("input");
    input.type = "text";
    input.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    input.style.fontSize = "20px";
    input.style.paddingLeft = '10px';
    input.style.border = "1px solid";
    input.style.borderRadius = "6px"
    input.classList.add("set_timer");
    input.classList.add(`set_timer${i}`);

    if(i === 1) {
        input.placeholder = "Hours:00-23";
    }else if(i === 2) {
        input.placeholder = "Minutes:00-59";
    }else if(i === 3) {
        input.placeholder = "Seconds:00-59"
    }
    setTimers.append(input);
};

setTimers.addEventListener("input", (e) => {
    let target = e.target;
    let value = target.value;
    let result = value.replace(/\D/g, '');
    if(target.classList.contains("set_timer1")) {
        target.value = Number(result) <= 23 ? result : result.slice(0, 1);
        timeObj.hours = target.value;
    }else if(target.classList.contains("set_timer2")){
        target.value = Number(result) <= 59 ? result : result.slice(0, 1);
        timeObj.minutes = target.value;
    }else if(target.classList.contains("set_timer3")){
        target.value = Number(result) <= 59 ? result : result.slice(0, 1);
        timeObj.seconds = target.value;
    }
});

window.addEventListener('load', () => {
    for(let i=1; i <= inputCount; i++) {
        createInput(i);
    }
})
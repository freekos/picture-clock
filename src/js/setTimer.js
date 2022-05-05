const finish = document.querySelector(".time_has");
const logo = document.querySelector(".logo");

function setTimer(hours, minutes, seconds, button) {
    let time = Date.now();
    let date = new Date();
    date.setHours(date.getHours() + hours, 
    date.getMinutes() + minutes, 
    date.getSeconds() + seconds);

    date = date.getTime()

    let timer = setInterval(() => {
        if(time === date) {
            logo.style.marginTop = "5px";
            finish.style.display = "block";
            let winText = document.createElement("p");
            winText.innerHTML = "Time Has Passed!!!";
            winText.style.fontSize = "40px"
            winText.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            winText.className = "timer_time";
            finish.append(winText);

            setTimeout(() => {
                finish.style.display = "none"
                finish.innerHTML = '';
                logo.style.marginTop = '75px';
            }, 3000)

            button.innerHTML = "Start Timer";
            clearInterval(timer);
        }else {
            time += 1000;
        }
    }, 1000)
}

export default setTimer;
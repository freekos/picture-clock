const timer = document.querySelector('.timer_times');

function UpdateTime() {
    this.date = new Date();
    this.hours = this.date.getHours() > 9 ? this.date.getHours() : '0' + this.date.getHours();
    this.minutes = this.date.getMinutes() > 9 ? this.date.getMinutes() : '0' + this.date.getMinutes();
    this.seconds = this.date.getSeconds() > 9 ? this.date.getSeconds() : '0' + this.date.getSeconds();
}

function createTime(updateTime) {
    let date = new updateTime();   
     
    let time = document.createElement("p");
    time.className = "timer_time";
    time.innerHTML = `${date.hours}:${date.minutes}:${date.seconds} PM!`;
    timer.append(time)

    setInterval(() => {
        let date = new updateTime();
        time.innerHTML = `${date.hours}:${date.minutes}:${date.seconds} PM!`;
    }, 500)
}

window.addEventListener("load", () => {
    createTime(UpdateTime);
})
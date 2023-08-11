const milliseconds = document.querySelector('.ms');
const seconds = document.querySelector('.sec');
const minutes = document.querySelector('.min');
const hours = document.querySelector('.hrs');
const start = document.getElementById('start-button');
const stop = document.getElementById('stop-button');
const reset = document.getElementById('reset-button');

let hrs=0;
let min=0;
let sec=0;
let ms=0;
let startTimer;


start.addEventListener('click', () => {
    startStopwatch();
 });

stop.addEventListener('click', () => {
    stopStopwatch();
 });

reset.addEventListener('click', () => {
    resetStopwatch();
 });

const startStopwatch = () => {

    start.classList.add('start-active');
    stop.classList.remove('stop-active');
    reset.classList.remove('reset-active');

    startTimer = setInterval( () => {
        ms++;
        if (ms === 100) {
            sec++;
            console.log("Sec: " + sec)
            ms = 0;
        }

        if (sec === 60) {
            min++;
            console.log("Min: " + min)
            sec=0;
        }

        if (min === 60) {
            hrs++;
            min=0;
        }

        updateDOM();

    } , 10)
}

const stopStopwatch = () => {
    clearInterval(startTimer);
    stop.classList.add('stop-active');
    start.classList.remove('start-active')
}

const resetStopwatch = () => {
    reset.classList.add('reset-active');
    stop.classList.add('stop-active');
    start.classList.remove('start-active');

    ms = 0;
    sec = 0;
    min = 0;
    hrs = 0;
    clearInterval(startTimer);

    updateDOM();
}

const updateDOM = () => {

    //formatted
    let fms = ms < 10? '0'+ms : ms;
    let fsec = sec < 10? '0'+sec : sec;
    let fmin = min < 10? '0'+min : min;
    let fhrs = hrs < 10? '0'+hrs : hrs;

    milliseconds.innerHTML = fms;
    seconds.innerHTML = fsec;
    minutes.innerHTML = fmin;
    hours.innerHTML = fhrs;
}
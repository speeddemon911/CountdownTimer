const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const summer = "June 20 2024";

function countdown() {
    const summerDate = new Date(summer);
    const currentDate = new Date();

    const totalSeconds = (summerDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); //3600 = 60 mins/hr + 60 secs/min
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

// adds a zero in front of second when its under 10 seconds

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//Calling the countdown every second

countdown();

setInterval(countdown, 1000);

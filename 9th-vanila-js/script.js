// const day = document.getElementById('day');
// const hrs = document.getElementById('hrs');
// const min = document.getElementById('min');
// const sec = document.getElementById('sec');

// const currentYear = new Date().getFullYear();

// const newYear = new Date(`25 December ${currentYear} 00:00:00`)

// function countDownTimer() {
//     const todayDate = Date.now();
//     const gap = newYear - todayDate;
//     console.log(gap);

//     const d = Math.floor(gap/1000/60/60/24);
//     const h = String(Math.floor((gap/1000/60/60)%24)).padStart(2, '0');
//     const m = String(Math.floor((gap/1000/60)%60)).padStart(2, '0');
//     const s = String(Math.floor((gap/1000)%60)).padStart(2, '0');

//     day.innerText = d;
//     hrs.innerText = h;
//     min.innerText = m;
//     sec.innerText = s;

// }

// countDownTimer()
// setInterval(countDownTimer, 1000);



const dDay = document.querySelector("#d-day")

const thisYear = new Date().getFullYear(); // 올해 연도
let thisChristmas = new Date(`25 Decomber ${thisYear} 00:00:00`) // 목표 날짜

function christmasCountdown() {
    const today = Date.now();
    const gap = thisChristmas - today;

    const day = Math.floor(gap / 1000 / 60 / 60 / 24);
    const hour = String(Math.floor((gap / 1000 / 60 / 60) % 24)).padStart(2, '0');
    const min = String(Math.floor((gap / 1000 / 60) % 60)).padStart(2, '0');
    const sec = String(Math.floor((gap / 1000) % 60)).padStart(2, '0');

    dDay.innerText = `${day}d ${hour}h ${min}m ${sec}s`;

}

christmasCountdown();
setInterval(christmasCountdown, 1000);
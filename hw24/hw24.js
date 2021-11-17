
let inputMin = document.querySelector(".min");
let inputSec = document.querySelector(".sec"); 
let button = document.getElementById("btn");
let time = document.getElementById("time");
let seconds;
button.addEventListener('click', function() {
    seconds = +(inputSec.value) + (+(inputMin.value) * 60)
})
 let timer = setInterval(function () {
    let second = seconds%60; 
    let minute = seconds/60%60; 
    
    if (seconds == 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = "the end";
    } else { 
        time.innerHTML =  `${Math.trunc(minute)}:${second}`;
    }
    seconds--;
}, 1000)
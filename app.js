var min = 0;
var sec = 0;
var ms = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msHeading = document.getElementById("ms");
var interval;

function timer(){
ms++
msHeading.innerHTML = ms;

if (ms >= 100){
    sec++
    secHeading.innerHTML = sec;
     ms = 0;
}

else if (sec >=60) {
min++
     sec = 0;
     minHeading.innerHTML = min

 }
}

 function start(){
    interval = setInterval(timer,10)
 }

function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    ms = 0;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msHeading.innerHTML = ms
    stop()
}
// console.log("Working !! ");

var time = document.querySelector(".time")
var startbtn = document.getElementById("start");
var stopbtn = document.getElementById("stop");
var resetbtn = document.getElementById("reset");

var seconds = 0;
var time_inerval = null;

startbtn.addEventListener("click",start);
stopbtn.addEventListener("click",stop);
resetbtn.addEventListener("click",reset);

function start() {
    if (time_inerval) {
      return;
    }
    time_inerval = setInterval(caltime, 1000);
  }

 function stop() {
    clearInterval(time_inerval);
    interval = null;
  }

function reset() {
    stop();
    seconds = 0;
    time.innerText = "00:00:00";
  }
 
  function caltime() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - hrs * 3600) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;
    time.innerText = `${hrs}:${mins}:${secs}`;
  }

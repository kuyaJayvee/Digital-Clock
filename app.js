const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function getTime() {
   
   const time = new Date();

   let hours = time.getHours();
   let minutes = time.getMinutes();
   let seconds = time.getSeconds();
   
   displayTime(hours, minutes, seconds);
}

function displayTime(hours, minutes, seconds) {
   
   let ampm = "";
   hoursEl.textContent = hours > 12 ? '0' + (hours-12) : hours;
   minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
   secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;

   if(hours > 12) {
   	 ampm = "pm"
   }

   document.getElementById("ampm").textContent = ampm;
}

setInterval(getTime, 1000);
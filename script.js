function computeTime() {
  const amTime = (convertTime(fromAM.value) - convertTime(toAM.value)).toFixed(2);
  const pmTime = (convertTime(fromPM.value) - convertTime(toPM.value)).toFixed(2);
  if (isNaN(pmTime)) {
    timeDisplay.innerText = displayTime(parseFloat(amTime));
  } else {
    timeDisplay.innerText = displayTime((parseFloat(amTime) + parseFloat(pmTime)));
  }
  
}

const timeInput = document.querySelectorAll("[data-time]");
const timeDisplay = document.querySelector("[ data-time-display]");
const toAM = document.getElementById("to-am");
const fromAM = document.getElementById("from-am");
const toPM = document.getElementById("to-pm");
const fromPM = document.getElementById("from-pm");

timeInput.forEach((time) => {
  time.addEventListener("change", computeTime);
});

function convertTime(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}

function displayTime(time) {
  if (isNaN(time)) return "0 Hrs";
  if (time <= 1) return `${time} Hr`;
  return `${time} Hrs`;
}

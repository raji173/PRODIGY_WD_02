let timer;
let startTime;
let elapsedTime = 0;
let laps = [];
let lapsContainer = document.querySelector('.laps');
let display = document.querySelector('.display');

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime / 1000);
  }, 100);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  elapsedTime = 0;
  display.textContent = '00:00:00';
  laps = [];
  lapsContainer.innerHTML = '';
}

function lap() {
  let lapTime = formatTime(elapsedTime / 1000);
  laps.push(lapTime);
  let lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${laps.length}: ${lapTime}`;
  lapsContainer.appendChild(lapItem);
}

document.querySelector('.start').addEventListener('click', start);
document.querySelector('.pause').addEventListener('click', pause);
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.lap').addEventListener('click', lap);

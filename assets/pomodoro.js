const mn1 = document.getElementById('mn1');
const mn2 = document.getElementById('mn2');
const sc1 = document.getElementById('sc1');
const sc2 = document.getElementById('sc2');

let minutes = 25;
let seconds = 0;

function fixTime(time) {
  return time < 10 ? '0' + time : time.toString();
}

function updateDisplay() {
  const mnStr = fixTime(minutes);
  const scStr = fixTime(seconds);

  mn1.textContent = mnStr[0];
  mn2.textContent = mnStr[1];
  sc1.textContent = scStr[0];
  sc2.textContent = scStr[1];
}

function startTimer() {
  const countdown = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(countdown);
        alert("Pomodoro completed!");
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

updateDisplay();
startTimer();

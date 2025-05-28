let time = 25 * 60;
let timer;
let isRunning = false;
let defaultTime = 25 * 60;

function updateDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function setTime() {
  const inputMinutes = Number(document.getElementById('minutes').value);
  if (inputMinutes >= 1 && inputMinutes <= 180) {
    defaultTime = inputMinutes * 60;
    time = defaultTime;
    updateDisplay();
    pauseTimer();
  } else {
    alert("1~180분 사이로 입력해주세요.");
  }
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("⏰ 타이머 종료!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  time = defaultTime;
  updateDisplay();
  isRunning = false;
}

updateDisplay(); // 초기 설정값 반영

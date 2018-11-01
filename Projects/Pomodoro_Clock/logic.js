let playActive = 0;
let sessionLength = 0;
let sessionSeconds = 0;
let breakActive = 0;
let breakLength = 0;
let breakSeconds = 0;

let breakLengthFromUser = 5;
let sessionLengthFromUser = 25;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function initializer() {
  sessionLength = sessionLengthFromUser;

  $sessionLengthSetter = document.querySelector('#session-length-display');
  $sessionLengthSetter.textContent = `${sessionLengthFromUser}:${addZeroToSingleDigit(0)}`;

  $breakLengthSetter = document.querySelector('#break-length-display');
  $breakLengthSetter.textContent = `${breakLengthFromUser}:${addZeroToSingleDigit(0)}`;

  $sessionPlusButton = document.querySelector('#session-plus-button');
  $sessionPlusButton.addEventListener('click', (e) => {
    if(!playActive) {
      sessionLengthFromUser++;
      sessionLength = sessionLengthFromUser;
      updateTimer(sessionLength, sessionSeconds, 'sessionDisplay');

      $sessionLengthSetter.classList.add('plus-button-clicked');
      sleep(175).then(() => {
        $sessionLengthSetter.classList.remove('plus-button-clicked');
      });
    }
  });

  $sessionMinusButton = document.querySelector('#session-minus-button');
  $sessionMinusButton.addEventListener('click', (e) => {
    if(!playActive) {
      if(sessionLengthFromUser == 0) sessionLengthFromUser = 0;
      else sessionLengthFromUser--;
      sessionLength = sessionLengthFromUser;
      updateTimer(sessionLength, sessionSeconds, 'sessionDisplay');

      $sessionLengthSetter.classList.add('minus-button-clicked');
      sleep(175).then(() => {
        $sessionLengthSetter.classList.remove('minus-button-clicked');
      });
    }
  });

  $breakPlusButton = document.querySelector('#break-plus-button');
  $breakPlusButton.addEventListener('click', (e) => {
    if(!playActive) {
      breakLengthFromUser++;
      breakLength = breakLengthFromUser;
      updateTimer(breakLength, breakSeconds, '');

      $breakLengthSetter.classList.add('plus-button-clicked');
      sleep(175).then(() => {
        $breakLengthSetter.classList.remove('plus-button-clicked');
      });
    }
  });

  $breakMinusButton = document.querySelector('#break-minus-button');
  $breakMinusButton.addEventListener('click', (e) => {
    if(!playActive) {
      if(breakLengthFromUser == 0) breakLengthFromUser = 0;
      else breakLengthFromUser--;
      breakLength = breakLengthFromUser;
      updateTimer(breakLength, breakSeconds, '');

      $breakLengthSetter.classList.add('minus-button-clicked');
      sleep(175).then(() => {
        $breakLengthSetter.classList.remove('minus-button-clicked');
      });
    }
  });

  $countdownClock = document.querySelector('#countdown-clock');
  updateTimer(sessionLengthFromUser, 0, 'clock');

  $playButton = document.querySelector('#play-button');
  $playButton.addEventListener('click', (e) => {
    if(sessionLength == 0) playActive = 0;
    else playActive = 1;
  });

  $pauseButton = document.querySelector('#pause-button');
  $pauseButton.addEventListener('click', (e) => {
    playActive = 0;
  });

  $resetButton = document.querySelector('#reset-button');
  $resetButton.addEventListener('click', (e) => {
    sessionLength = sessionLengthFromUser;
    sessionSeconds = 0;
  });

  $stopButton = document.querySelector('#stop-button');
  $stopButton.addEventListener('click', (e) => {
    sessionLength = sessionLengthFromUser;
    sessionSeconds = 0;
    playActive = 0;
  });
}

function updateTimer(length, seconds, target) {
  if(target == 'clock')
    $countdownClock.textContent = `${length}:${addZeroToSingleDigit(seconds)}`;
  else if(target == 'sessionDisplay')
    $sessionLengthSetter.textContent = `${length}:${addZeroToSingleDigit(seconds)}`;
  else
    $breakLengthSetter.textContent = `${length}:${addZeroToSingleDigit(seconds)}`;
}

function addZeroToSingleDigit(number) {
  return (number < 10 ? '0' : '') + number
}

initializer();

setInterval(function() {
  if(playActive) {
    if(sessionSeconds == 0) {
      sessionSeconds = 59;
      sessionLength -= 1;
    } 
    else if(sessionLength == 0) {
      playActive = 0;
      sessionSeconds = 0;
      breakActive = 1;
      breakLength = breakLengthFromUser;
    }
    else sessionSeconds -= 1;
  }

  if(breakActive) {
    if(breakSeconds == 0) {
      breakSeconds = 59;
      breakLength -= 1;
    }
    else if(breakLength == 0) {
      playActive = 1;
      breakSeconds = 0;
      breakActive = 0;
      sessionLength = sessionLengthFromUser;
    }
    else breakSeconds -= 1;
  }

  if(breakActive)
    updateTimer(breakLength, breakSeconds, 'clock');
  else
    updateTimer(sessionLength, sessionSeconds, 'clock');
 }, 1);
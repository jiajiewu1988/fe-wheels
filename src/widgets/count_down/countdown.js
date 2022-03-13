(() => {
  const state = {
    NOT_STARTED: 'NOT_STARTED',
    RUNNING: 'RUNNING',
    PAUSE: 'PAUSE'
  };
  
  let start = 0;
  let now = start;
  let offset = 0; // for pause
  let timer = null;
  let timerState = state.NOT_STARTED;
  
  console.log(`start=${start}, now=${now}`);

  const timeFld = document.getElementById('time');
  const startBtn = document.getElementById('start-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const resetBtn = document.getElementById('reset-btn');

  startBtn.addEventListener('click', () => {
    if (timerState === state.RUNNING) {
      throw new Error('timer already started');
      return;
    }

    timerState = state.RUNNING;
    timer = setInterval(() => {
      now += 1;
      updateTime(getTimespan());
    }, 10);
  });

  pauseBtn.addEventListener('click', () => {
    if (timerState !== state.RUNNING) {
      throw new Error('timer is not running, cannot pause');
      return;
    }

    timerState = state.PAUSE;
    clearInterval(timer);
    timer = null;
    offset = offset + now - start;
    now = 0;
    start = 0;
  });

  resetBtn.addEventListener('click', () => {
    if (timerState === state.NOT_STARTED) {
      console.log('timer not started, no need to reset');
      return;
    }

    timerState = state.NOT_STARTED;
    if (timer) clearInterval(timer);
    now = 0;
    start = 0;
    offset = 0;
    updateTime(getTimespan());
  });

  function getTimespan() {
    return now - start + offset;
  }

  function updateTime(timespan) {
    timeFld.innerText = genTimeStr(timespan);
  }

  function genTimeStr(timespan) {
    if (timespan <= 0) {
      return '00:00:00';
    }

    // [mm, ss, milisec]
    const time = Array(3).fill(0);
    let tmp = timespan;
    
    for (let i = 2; i >= 0; i--) {
      if (i > 0) {
        time[i] = tmp % 60;
        tmp = Math.floor(tmp / 60);
      } else {
        time[i] = tmp;
      }
    }

    const strParts = [];
    for (let part of time) {
      if (part < 10) {
        strParts.push('0' + part);
      } else {
        strParts.push('' + part);
      }
    }
    return strParts.join(':');
  }
})();
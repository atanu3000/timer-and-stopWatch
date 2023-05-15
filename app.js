const timerBtn = document.querySelector('#timerBtn');
const stopwatchBtn = document.querySelector('#stopwatchBtn');
const timer = document.querySelector('.timer');
const stopwatch = document.querySelector('.stopwatch');

stopwatchBtn.addEventListener('click', () => {
    stopwatch.style.display = 'flex';
    timer.style.display = 'none';
    stopwatchBtn.style.background = '#fff';
    timerBtn.style.background = 'rgba(0,0,0,0)';
});

timerBtn.addEventListener('click', () => {
    timer.style.display = 'flex';
    stopwatch.style.display = 'none';
    stopwatchBtn.style.background = 'rgba(0,0,0,0)';
    timerBtn.style.background = '#fff';
});
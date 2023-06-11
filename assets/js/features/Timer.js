const timerHandler = () => {
    const targetDate = new Date(2023, 7, 24);
    const currentDate = new Date();
    const gap = targetDate - currentDate;
  
    const days = Math.floor(gap / 1000 / 60 / 60 / 24);
    const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    const min = Math.floor(gap / 1000 / 60) % 60;
    const sec = Math.floor(gap / 1000) % 60;
  
    if (gap < 0) {
      days = days + 7;
      hours = hours + 24;
      min = min + 60;
      sec = sec + 60;
    }
  
    const daysSpan = document.getElementById("days");
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");
  
    daysSpan.textContent = days < 10 ? "0" + days : days;
    hoursSpan.textContent = hours < 10 ? "0" + hours : hours;
    minutesSpan.textContent = min < 10 ? "0" + min : min;
    secondsSpan.textContent = sec < 10 ? "0" + sec : sec;
  };
  
  const Timer = {
    start() {
      timerHandler();
      setInterval(timerHandler, 1000);
    },
  };
  
  export default Timer;
  
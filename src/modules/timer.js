const timer = (deadline) => {
  const hours = document.getElementById("timer-hours");
  const minutes = document.getElementById("timer-minutes");
  const seconds = document.getElementById("timer-seconds");
  const addZero = (num) => String(num).padStart(2, "0");

  const getTimeRemaining = () => {
    let stopDate = new Date(deadline).getTime();
    let currentDate = new Date().getTime();
    let timeRemaining = (stopDate - currentDate) / 1000;

    return {
      timeRemaining,
      screenHours: Math.floor(timeRemaining / 3600),
      screenMinutes: Math.floor((timeRemaining / 60) % 60),
      screenSeconds: Math.floor(timeRemaining % 60),
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    hours.textContent = addZero(getTime.screenHours);
    minutes.textContent = addZero(getTime.screenMinutes);
    seconds.textContent = addZero(getTime.screenSeconds);

    if (getTime.timeRemaining <= 0) {
      clearInterval(intevralId);
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      return;
    }
  };
  const intervalId = setInterval(updateClock, 1000);
  updateClock();
};

export default timer;

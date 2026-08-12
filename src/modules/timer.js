const timer = (deadline) => {
  console.log(deadline);

  const hours = document.getElementById("timer-hours");
  const minutes = document.getElementById("timer-minutes");
  const seconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let stopDate = new Date(deadline).getTime();
    let currentDate = new Date().getTime();
    let timeRemaining = (stopDate - currentDate) / 1000;
    let screenHours = Math.floor(timeRemaining / 60 / 60);
    let screenMinutes = Math.floor((timeRemaining / 60) % 60);
    let screenSeconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      screenHours,
      screenMinutes,
      screenSeconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    hours.textContent = getTime.screenHours;
    minutes.textContent = getTime.screenMinutes;
    seconds.textContent = getTime.screenSeconds;
    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  };
  updateClock();
};

export default timer;

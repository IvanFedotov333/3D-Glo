const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDays = document.querySelector(".calc-day");
  const calcTotal = document.getElementById("total");
  let animationId = null;

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDays.value && calcDays.value < 5) {
      calcDayValue = 2;
    } else if (calcDays.value && calcDays.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
    animateTotal(totalValue);
  };
  const animateTotal = (target) => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    const startValue = 0;
    const targetValue = Math.round(target);
    const duration = 500;
    let startTime = null;

    function step(timestep) {
      if (startTime === null) {
        startTime = timestep;
      }
      const elapsed = timestep - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = startValue + (targetValue - startValue) * progress;

      calcTotal.textContent = Math.round(current);
      if (progress < 1) {
        animationId = requestAnimationFrame(step);
      } else {
        calcTotal.textContent = targetValue;
        animationId = null;
      }
    }
    animationId = requestAnimationFrame(step);
  };
  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDays
    )
      countCalc();
  });
};
export default calc;

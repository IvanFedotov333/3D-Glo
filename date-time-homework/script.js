const app = document.getElementById("app");

const daysOfWeek = (date) => {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return days[date.getDay()];
};
const timeFormate = (date) => {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${meridiem}`;
};
const daysToNY = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const firstDayOfNY = new Date(currentYear + 1, 0, 1);
  const diff = firstDayOfNY - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
const render = () => {
  const now = new Date();
  const hour = now.getHours();
  let greetings;
  if (hour >= 5 && hour < 12) {
    greetings = "Доброе утро";
  } else if (hour >= 12 && hour < 18) {
    greetings = "Добрый день";
  } else if (hour >= 18 && hour < 23) {
    greetings = "Добрый вечер";
  } else {
    greetings = "Доброй ночи";
  }
  const dayOfWeek = daysOfWeek(now);
  const currentTime = timeFormate(now);
  app.innerHTML = `
  <p>${greetings}</p>
  <p>Сегодня: ${dayOfWeek}</p>
  <p>Текущее время: ${currentTime}</p>
  <p>До нового года осталось ${daysToNY()} дней</p>
`;
};

render();

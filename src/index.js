import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import smoothScroll from "./modules/scroll";
import inputValidation from "./modules/validation";

timer("21 december 2026");
menu();
modal();
inputValidation();

const scrollButton = document.querySelector('a[href="#service-block"]');
scrollButton.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.getElementById("service-block");
  if (target) smoothScroll(target);
});

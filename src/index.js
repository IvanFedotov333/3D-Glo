import timer from "./modules/timer";
import toggleMenu from "./modules/menu";
import modal from "./modules/modal";
import smoothScroll from "./modules/scroll";
import inputValidation from "./modules/validation";
import tabs from "./modules/tabs";

timer("21 december 2026");
toggleMenu();
modal();
inputValidation();
tabs();

const scrollButton = document.querySelector('a[href="#service-block"]');
scrollButton.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.getElementById("service-block");
  if (target) smoothScroll(target);
});

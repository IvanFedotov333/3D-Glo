import smoothScroll from "./scroll";

const menu = () => {
  const btnMenu = document.querySelector(".menu");
  const listMenu = document.querySelector("menu");
  const btnClose = listMenu.querySelector(".close-btn");
  const itemsMenu = listMenu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    listMenu.classList.toggle("active-menu");
  };

  btnMenu.addEventListener("click", handleMenu);
  btnClose.addEventListener("click", handleMenu);

  itemsMenu.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = item.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        smoothScroll(target);
        listMenu.classList.remove("active-menu");
      }
    });
  });
};
export default menu;

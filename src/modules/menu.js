import smoothScroll from "./scroll";

const menu = () => {
  const btnMenu = document.querySelector(".menu");
  const listMenu = document.querySelector("menu");

  btnMenu.addEventListener("click", () => {
    listMenu.classList.toggle("active-menu");
  });

  listMenu.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn")) {
      listMenu.classList.remove("active-menu");
      return;
    }
    const menuLink = e.target.closest("ul>li>a");
    if (menuLink) {
      e.preventDefault();
      const targetId = menuLink.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        smoothScroll(target);
        listMenu.classList.remove("active-menu");
      }
    }
  });
};
export default menu;

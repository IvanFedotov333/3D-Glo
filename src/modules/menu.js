import smoothScroll from "./scroll";

const toggleMenu = () => {
  document.addEventListener("click", (e) => {
    const btnMenu = document.querySelector(".menu");
    const listMenu = document.querySelector("menu");

    if (e.target.closest(".menu")) {
      listMenu.classList.toggle("active-menu");
      return;
    }
    if (e.target.closest("menu")) {
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
      return;
    }
    listMenu.classList.remove("active-menu");
  });
};
export default toggleMenu;

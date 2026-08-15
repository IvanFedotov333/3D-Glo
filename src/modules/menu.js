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
  itemsMenu.forEach((item) => item.addEventListener("click", handleMenu));
};
export default menu;

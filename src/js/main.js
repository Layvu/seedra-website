import "./components/banner-slider";

const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".header__menu-toggle");
const main = document.querySelector(".main");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !event.target.closest(".header__menu-toggle")) {
    menu.classList.remove("menu_active");
  }
});

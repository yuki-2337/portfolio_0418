let menuCloseNav = document.querySelector(".menu-btn");
let menuOpenNav = document.querySelector(".menu-open-btn");
let menuBar = document.querySelector(".menu-bar");

menuCloseNav.onclick = () => {
  menuBar.classList.toggle("active");
  menuCloseNav.classList.toggle("active");
  menuOpenNav.classList.toggle("active");
};

menuOpenNav.onclick = () => {
  menuBar.classList.toggle("active");
  menuCloseNav.classList.toggle("active");
  menuOpenNav.classList.toggle("active");
};

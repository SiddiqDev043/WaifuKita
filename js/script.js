alert('Welcome Wibu Stress. Klik dimanapun untuk play music ^_^');

window.addEventListener('click', () => {
  document.getElementById("song1").
  play();
});


// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//klik hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk hilangin nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
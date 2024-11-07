// hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Nabar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backButon= document.querySelector("#back_button");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fixed");
    backButon.classList.remove("hidden");
    backButon.classList.add("flex");
  } else {
    header.classList.remove("nav-fixed");
    backButon.classList.remove("flex");
    backButon.classList.add("hidden");
  }
};

// Click out area navbar
// window.addEventListener('click', function (e) {
//   if(e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove("hamburger-active");
//     navMenu.classList.add("hidden");
//   }
// });

// Darkmode function
const darkButton = document.querySelector("#dark_togle");
const html = document.querySelector("html");

darkButton.addEventListener("click", function() {
  if (darkButton.checked){
    html.classList.add("dark");
    localStorage.theme = "dark";
  }
  else{
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia(
  "(prefers-color-scheme = dark)").matches)) {
    darkButton.checked = true;
  }
  else{
    darkButton.checked = false;
  }

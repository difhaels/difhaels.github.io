// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const navFixed = header.offsetTop;

//   if (window.pageYOffset > navFixed) {
//     header.classList.add("fixed");
//     header.classList.add("z-[99]");
//     header.classList.add("bg-red-500");
//   } else {
//     header.classList.remove("fixed");
//     header.classList.remove("z-[99]");
//     header.classList.remove("bg-red-500");
//   }
// };

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
hamburger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});

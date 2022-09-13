// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// submit
const submit = document.querySelector("#kirim");
submit.addEventListener("click", () => alert("Terkirim 👌"));

// contact
const scriptURL = "https://script.google.com/macros/s/AKfycbwu-pCt-LMyAQwi4bkBpGKW6nsk_JdVoA87Izsvq9Ltuq6_hHB6Jf0AL2tctAYjZBCz/exec";
const form = document.forms["difhaels-contact"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

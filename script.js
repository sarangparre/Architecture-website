let hamburger = document.querySelector(".hamburger-menu");
let container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  container.classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

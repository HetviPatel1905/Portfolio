const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && event.target !== navLinks) {
    navLinks.classList.remove("active");
  }
});

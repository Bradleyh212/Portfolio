window.addEventListener("scroll", function () {
  const top_navbar = document.getElementById("top_navbar");
  const side_navbar = document.getElementById("side_navbar");

  if (window.scrollY > 100) {
    top_navbar.style.display = "none";
    side_navbar.style.display = "flex";
  } else {
    top_navbar.style.display = "flex";
    side_navbar.style.display = "none";
  }
});
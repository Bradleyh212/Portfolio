window.addEventListener("scroll", function () {
  const topNavbar = document.getElementById("top_navbar");
  const sidebarNav = document.getElementById("side_navbar");

  if (window.scrollY > 100) {
    topNavbar.style.display = "none";
    sidebarNav.style.display = "flex";
  } else {
    topNavbar.style.display = "flex";
    sidebarNav.style.display = "none";
  }
});
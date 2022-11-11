var menuOpen = false;
const menu = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");
const openIcon = document.getElementById("openIcon");

function openNav() {
  console.log("heyyyy");
  openIcon.style.display = "none";
  menu.style.display = "block";
  //   overlay.style.display = "block";
  menuOpen = true;
}

function closeNav() {
  menu.style.display = "none";
  //   overlay.style.display = "none";
  openIcon.style.display = "block";
  menuOpen = false;
}

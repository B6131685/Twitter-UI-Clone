const moblie__User__Icon = document.getElementById("moblie__User__Icon");
const aside_mobile = document.querySelector(".aside-mobile");
const sidenav = document.querySelector(".sidenav");
const close_aside_btn = document.querySelector(".close-sidenav-mobile");
const close_aside_clickoutside = document.querySelector(".aside-mobile-blur");
const specia_menu_array = document.getElementsByClassName("special-menu");
moblie__User__Icon.addEventListener("click", () => {
  aside_mobile.style.display = "grid";
  sidenav.style.width = "min(280px,100%)";
});

close_aside_btn.addEventListener("click", () => {
  aside_mobile.style.display = "none";
  sidenav.style.width = "0px";
});

close_aside_clickoutside.addEventListener("click", () => {
  aside_mobile.style.display = "none";
  sidenav.style.width = "0px";
});

for (let index = 0; index < specia_menu_array.length; index++) {
  const element = specia_menu_array[index];
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
}

function reportWindowSize() {
  if (window.innerWidth > 450) {
    aside_mobile.style.display = "none";
  }
}

window.onresize = reportWindowSize;

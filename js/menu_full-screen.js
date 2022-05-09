const gamburger = document.querySelector('.gamburger');
const menu_fullscreen = document.querySelector('.menu-nav');
const cross = document.querySelector('.menu-nav__cross');

gamburger.addEventListener("click", on)
 
function on() {
  return menu_fullscreen.style.display = "block"
}

cross.addEventListener("click", off)

function off() {
  return menu_fullscreen.style.display = "none"
}
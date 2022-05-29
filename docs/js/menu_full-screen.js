(function () {
  const gamburger = document.querySelector(".gamburger");
  const menuFullscreen = document.querySelector(".menu-nav");
  const menuLinks = menuFullscreen.querySelectorAll("a");
  const body = document.body;

  gamburger.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("locked");
    menuFullscreen.classList.toggle("menu-nav--active");
  });

  for (let i = 0; i < menuLinks.length; i++) {
    const link = menuLinks[i];
    link.addEventListener("click", (e) => {
      e.preventDefault();

      menuFullscreen.classList.toggle("menu-nav--active");
      body.classList.toggle("locked");
    });
  }
})();

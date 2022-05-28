;(function () {
  const menu = document.querySelector("#colorMenu");
  const items = document.querySelectorAll(".color-menu__item");

  const getItemWidth = (item) => {
    let resultWidth = 524;

    const windowWidth = window.innerWidth;
    const itemWidth = item.offsetWidth;

    const isTablet = window.matchMedia("(max-width: 768px)").matches;
    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if (isTablet) {
      resultWidth = windowWidth - itemWidth * items.length;
    }
    if (isMobile) {
      resultWidth = windowWidth - itemWidth;
    }
    return resultWidth;
  };

  const setItemWidth = (item, width) => {
    const itemContent = item.nextElementSibling;
    const itemText = itemContent.firstElementChild;
    itemContent.style.width = `${width}px`;
    itemText.style.width = `${width}px`;
  };

  const openMenuColor = (item) => {
    const itemParent = item.parentElement;
    itemParent.classList.add("color-menu__item--active");
    item.classList.add("color-menu__link--active");
    const width = getItemWidth(item);
    setItemWidth(item, width);
  };

  const closeMenuColor = (item) => {
    const itemParent = item.parentElement;
    itemParent.classList.remove("color-menu__item--active");
    item.classList.remove("color-menu__link--active");
    setItemWidth(item, 0);
  };

  menu.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    const activeElement = document.querySelector(".color-menu__link--active");
    const isActive = target.classList.contains("color-menu__link--active");

    if (target.classList.contains("color-menu__link") && isActive) {
      if (activeElement) {
        closeMenuColor(activeElement);
      }
    }
    if (target.classList.contains("color-menu__link") && !isActive) {
      if (activeElement) {
        closeMenuColor(activeElement);
      }
      openMenuColor(target);
    }
  });

  window.addEventListener("resize", () => {
    const activeButton = document.querySelector(".color-menu__link--active");
    if (activeButton) {
      closeMenuColor(activeButton);
    }
  });
})()

(function () {
  const sections = $("section");
  const display = $(".main");

  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  const isMobile = mobileDetect.mobile();

  let inScroll = false;

  sections.first().addClass("active");

  const performTransition = (sectionEq) => {
    if (inScroll === false) {
      if (document.body.classList.contains("locked")) {
        return;
      }
      inScroll = true;
      const position = sectionEq * -100;

      const currentSection = sections.eq(sectionEq);
      const menuTheme = currentSection.attr("data-sidemenu-theme");
      const sideMenu = $(".nav-menu");
      if (menuTheme === "green") {
        sideMenu.addClass("nav-menu--color");
      } else {
        sideMenu.removeClass("nav-menu--color");
      }

      display.css({
        transform: `translateY(${position}%)`,
      });

      sections
        .eq(sectionEq)
        .addClass("active")
        .siblings()
        .removeClass("active");

      setTimeout(() => {
        inScroll = false;
        sideMenu
          .find(".nav-menu__item")
          .eq(sectionEq)
          .addClass("nav-menu__item--activ")
          .siblings()
          .removeClass("nav-menu__item--activ");
      }, 1300);
    }
  };

  const scrollViewport = (direction) => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
      performTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
      performTransition(prevSection.index());
    }

    if (sections.last()) {
      performTransition(sections.index(0));
    }
  };

  $(window).on("wheel", (e) => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
      scrollViewport("next");
    }

    if (deltaY < 0) {
      scrollViewport("prev");
    }

    console.log(deltaY);
  });

  $(window).on("keydown", (e) => {
    const tagName = e.target.tagName.toLowerCase();

    if (tagName !== "input" && tagName !== "textarea") {
      switch (e.keyCode) {
        case 38:
          scrollViewport("prev");
          break;

        case 40:
          scrollViewport("next");
          break;
      }
    }
  });

  $(".wrapper").on("touchmove", (e) => e.preventDefault());

  $("[data-scroll-to]").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
  });

  if (isMobile) {
    //https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

    $("body").swipe({
      swipe: function (event, direction) {
        if (direction === "up") scrollViewport("next");
        if (direction === "down") scrollViewport("prev");
      },
    });
  }
})();

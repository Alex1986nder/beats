const slider = $('.slider__list').bxSlider({
  controls: false,
  pager: false
});

$('.slider__switch--left').click(e => {
  e.preventDefault();

   slider.goToPrevSlide();
})

$('.slider__switch--right').click(e => {
  e.preventDefault();

  slider.goToNextSlide();
})

   
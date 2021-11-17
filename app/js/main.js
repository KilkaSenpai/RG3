
var swiper = new Swiper('.tariffs__container', {
  slidesPerView: 1,
  centeredSlides: true,
  paginationClickable: true,
  spaceBetween: 30,
  slideToClickedSlide: true
});

var menu = ['Этап 1', 'Этап 2', 'Этап 3', 'Этап 4', 'Этап 5', 'Этап 6']
var mySwiper = new Swiper('.promotion-slider__container', {
  loop: true,
  slidesPerView: 1,
  mousewheel: true,
  spaceBetween: 40,
  pagination: {
    el: '.promotion-slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '<span class="promotion-slider__num">' + (menu[index]) + '</span>' + '</span>';
    },
  },
  breakpoints: {
    768: {
      direction: 'vertical',
    },
  },
});


$(".header__burger").on("click", function () {
  $(".header__nav-wrap").toggleClass("js-open");
  $(".header__burger").toggleClass("header__burger--close");
});
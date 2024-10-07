import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

const sliderReviews = document.querySelector('[data-swiper="reviews"]');
const buttonPrev = document.querySelector('[data-reviews="reviews-button-prev"]');
const buttonNext = document.querySelector('[data-reviews="reviews-button-next"]');
const scrollbar = document.querySelector('[data-swiper="reviews-scrollbar"]');

const setSliderReviews = () => {
  new Swiper(sliderReviews, {
    modules: [Scrollbar, Navigation],
    keyboard: true,
    spaceBetween: 20,
    scrollbar: {
      el: scrollbar,
      draggable: true,
      dragSize: 392,
      hide: false,
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    speed: 300,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
          enabled: false,
        },
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
};

const initSliderReviews = () => {
  if (document.body.contains(sliderReviews)) {
    setSliderReviews();
  }
};

export { initSliderReviews };

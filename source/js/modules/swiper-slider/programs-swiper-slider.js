import Swiper from 'swiper/bundle';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const sliderPrograms = document.querySelector('[data-programs="swiper"]');
const swiperScrollbar = document.querySelector('[data-programs="swiper-scrollbar"]');
const buttonPrev = document.querySelector('[data-programs="program-button-prev"]');
const buttonNext = document.querySelector('[data-programs="program-button-next"]');


const swiperPrograms = () => {
  new Swiper(sliderPrograms, {
    observer: true,

    modules: [Navigation, Scrollbar],

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    scrollbar: {
      el: swiperScrollbar,
      draggable: true,
      dragSize: 392,
    },
    speed: 300,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: 'auto',
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',
        scrollbar: {
          dragSize: 324,
        },
      },
      1440: {
        spaceBetween: 32,
        slidesPerView: 3,
        allowTouchMove: false,
      },
    },
  });
};


const initSwiperPrograms = () => {
  if (document.body.contains(sliderPrograms)) {
    swiperPrograms();
  }
};
export { initSwiperPrograms };

// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { initSwiperHero } from './modules/swiper-slider/hero-swiper-slider';
import { initBurgerMenu } from './modules/init-burger-menu';
import { initAccordions } from './modules/init-accordion';
import {NavigationSticky} from './vendor/navigation-sticky';
import { initSwiperPrograms } from './modules/swiper-slider/programs-swiper-slider';
import {initSliderNews} from './modules/swiper-slider/news-swiper-slider';


window.addEventListener('DOMContentLoaded', () => {
  const navigationSticky = new NavigationSticky();
  navigationSticky.init();
  initSwiperHero();
  initSwiperPrograms();

  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordions();
    initSliderNews();
  });
});

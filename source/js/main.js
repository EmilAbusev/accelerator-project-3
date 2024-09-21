// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { initSwiperHero } from './modules/swiper-slider/hero-swiper-slider';
import { initBurgerMenu } from './modules/init-burger-menu';
import { initAccordions } from './modules/init-accordion';
import {NavigationSticky} from './vendor/navigation-sticky';

window.addEventListener('DOMContentLoaded', () => {
  const navigationSticky = new NavigationSticky();
  navigationSticky.init();
  initSwiperHero();

  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordions();
  });
});

// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { initSwiperHero } from './modules/swiper-slider/hero-swiper-slider';
import { initBurgerMenu } from './modules/init-burger-menu';
import { initAccordions } from './modules/init-accordion';
import { NavigationSticky } from './vendor/navigation-sticky';
import { initSwiperPrograms } from './modules/swiper-slider/programs-swiper-slider';
import { initSliderNews } from './modules/swiper-slider/news-swiper-slider';
import { initSliderReviews } from './modules/swiper-slider/reviews-swiper-slider';
import { initModals } from './modules/init-modals';
import { Form } from './vendor/form-validate/form';
import {CustomSelect} from './vendor/custom-select/custom-select';
import {initAutoResizeTextarea} from './vendor/auto-resize-textarea';


window.addEventListener('DOMContentLoaded', () => {
  const navigationSticky = new NavigationSticky();
  navigationSticky.init();
  initSwiperHero();
  initSwiperPrograms();
  initSliderNews();
  initSliderReviews();

  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordions();
    initModals();

    const select = new CustomSelect();
    select.init();
    initAutoResizeTextarea();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

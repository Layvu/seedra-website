import vars from "../_vars";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const bannerSlider = new Swiper(vars.$bannerSlider, {
  modules: [Navigation, Pagination],

  loop: false,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: true,

  speed: 500,
  spaceBetween: 30,
  initialSlide: 1,

  pagination: {
    el: ".banner-slider__pagination",
    type: "bullets",
    clickable: true,
  },
});

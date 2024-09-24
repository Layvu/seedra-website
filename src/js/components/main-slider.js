import Swiper from "swiper";
import vars from "../_vars";

const bannerSlider = new Swiper(vars.$bannerSlider, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".banner__slider-button--next",
    prevEl: ".banner__slider-button--prev",
  },
});

import React, { useEffect } from "react";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import ReviewCard from "./ReviewCard";

const Reviews: React.FC = () => {
  useEffect(() => {
    const bannerSlider = new Swiper(".banner-slider", {
      modules: [Navigation, Pagination],
      loop: false,
      centeredSlides: true,
      slideToClickedSlide: true,
      speed: 500,
      spaceBetween: 30,
      initialSlide: 1,
      pagination: {
        el: ".banner-slider__pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
      slidesPerView: 1,
    });

    return () => {
      // Уничтожаем Swiper при размонтировании компонента
      bannerSlider.destroy();
    };
  }, []);

  return (
    <section className="reviews">
      <div className="container reviews__container">
        <h2 className="reviews__title">What our clients say.</h2>

        {/* Swiper */}
        <div className="banner-slider reviews__slider">
          <div className="banner-slider__container swiper-wrapper">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="banner-slider__slide swiper-slide">
                <ReviewCard />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="banner-slider__pagination swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

//import s from "./Reviews.module.scss";
import "./Reviews.scss";

import React from "react";

import { ReviewsUIProps } from "./type";
import { ReviewCard } from "@components/HomePage/Reviews";

export const ReviewsUI: React.FC<ReviewsUIProps> = ({ reviews }) => {
  return (
    <section className="reviews reviews_home-page">
      <div className="container reviews__container">
        <h2 className="reviews__title">What our clients say.</h2>

        {/* Swiper */}
        <div className="banner-slider reviews__slider">
          <div className="banner-slider__container swiper-wrapper">
            {reviews.map((review) => (
              <div key={review.id} className="banner-slider__slide swiper-slide">
                <ReviewCard review={review} />
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

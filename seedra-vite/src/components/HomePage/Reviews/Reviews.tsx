import React, { useEffect } from "react";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import { Review } from "@components/ui/HomePage/Reviews/type";
import { ReviewsUI } from "@components/ui/HomePage/Reviews";

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Carla Samantoes-Diego",
    date: "25.09.2024",
    rating: 5,
    description:
      "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George. Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
    avatar: "img/avatar1.png",
  },
  {
    id: 2,
    name: "Michael Jordan",
    date: "15.09.2024",
    rating: 4,
    description:
      "Great seeds, but shipping took longer than expected. However, the instructions were clear, and my plants are thriving.",
    avatar: "img/avatar2.png",
  },
  {
    id: 3,
    name: "Jane Doe",
    date: "01.09.2024",
    rating: 3,
    description:
      "The seeds are fine, but I had trouble getting them to germinate. Customer support was helpful, though.",
    avatar: "img/avatar3.png",
  },
];

export const Reviews: React.FC = () => {
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
      bannerSlider.destroy();
    };
  }, []);

  return <ReviewsUI reviews={reviewsData} />;
};

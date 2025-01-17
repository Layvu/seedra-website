//import s from "./ReviewCard.module.scss";
import "./Reviews.scss";

import React from "react";
import { ReviewCardProps } from "./type";

import { Stars } from "@components/Shared/Stars";

export const ReviewCardUI: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-card__container">
        <div className="review-card__author">
          <img src="img/avatar.png" alt={`${review.name} avatar`} className="review-card__avatar" />
          <div className="review-card__author-info">
            <h3 className="review-card__name">{review.name}</h3>
            <span className="review-card__date">{review.date}</span>
          </div>
        </div>

        <Stars rating={review.rating} className="review-card" />

        <p className="review-card__descr">{review.description}</p>
      </div>
    </div>
  );
};

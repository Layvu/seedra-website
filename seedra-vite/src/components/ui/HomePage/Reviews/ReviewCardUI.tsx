//import s from "./ReviewCard.module.scss";
import "./Reviews.scss";

import React from "react";
import { ReviewCardProps } from "./type";
import { SvgIcon } from "@components/Shared/SvgIcon";

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

        {/* Компонент Stars c props rating */}
        <ul className="stars review-card__stars">
          {[...Array(5)].map((_, index) => (
            <li key={index} className={`stars__star ${index < review.rating ? "filled" : ""}`}>
              <SvgIcon id="star" title="Star icon" />
            </li>
          ))}
        </ul>

        <p className="review-card__descr">{review.description}</p>
      </div>
    </div>
  );
};

import React from "react";

const ReviewCard: React.FC = () => {
  return (
    <div className="review-card">
      <div className="container review-card__container">
        <div className="review-card__author">
          <img src="img/avatar.png" alt="Reviewer photo" className="review-card__avatar" />
          <div className="review-card__author-info">
            <h3 className="review-card__name">Carla Samantoes-Diego</h3>
            <span className="review-card__date">25.09.2024</span>
          </div>
        </div>

        <ul className="stars review-card__stars">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="stars__star">
              <svg>
                <use xlinkHref="img/sprite.svg#star"></use>
              </svg>
            </li>
          ))}
        </ul>

        <p className="review-card__descr">
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by
          PhD Helga George. Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination ratings.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

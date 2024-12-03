import React from "react";

const Products: React.FC = () => {
  return (
    <section className="products">
      <h2 className="visually-hidden">Our products on Main Page</h2>
      <div className="container products__container">
        {/* Header */}
        <div className="products__header section-header">
          <h2 className="section-header__title">Our products.</h2>
          <button className="section-header__btn default-btn btn-reset" data-filter="all">
            View all (12)
          </button>
        </div>

        {/* Categories */}
        <ul className="products__categories">
          {[
            { name: "all", icon: "all-leave" },
            { name: "bundles", icon: "bundles" },
            { name: "herbs", icon: "herbs" },
            { name: "vegetables", icon: "vegetables" },
            { name: "fruits", icon: "fruits" },
            { name: "supplies", icon: "gardening-tool" },
            { name: "flowers", icon: "flower" },
          ].map((category) => (
            <li key={category.name} className="products__category products-category">
              <button className="products-category__btn btn-reset" data-filter={category.name}>
                <svg className="products-category__icon">
                  <use xlinkHref={`img/sprite.svg#${category.icon}`} />
                </svg>
                <p className="products-category__name products-category_upper">{category.name}</p>
              </button>
            </li>
          ))}
        </ul>

        {/* Product Cards */}
        <ul className="products__list">
          {[
            {
              img: "img/prod-1.png",
              alt: "Product 1",
              title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
              price: "$12.56",
              reviewsCount: 123,
            },
            {
              img: "img/prod-2.png",
              alt: "Product 2",
              title: "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
              price: "$12.56",
              reviewsCount: 123,
            },
            {
              img: "img/prod-3.png",
              alt: "Product 3",
              title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
              price: "$12.56",
              reviewsCount: 123,
            },
          ].map((product, index) => (
            <li key={index} className="products__item">
              <article className="product-card">
                {/* Favorite */}
                <button className="product-card__favorite-btn btn-reset">
                  <div className="favorite-icon">
                    <svg className="favorite-icon__ellipse">
                      <use xlinkHref="img/sprite.svg#ellipse" />
                    </svg>
                    <svg className="favorite-icon__heart">
                      <use xlinkHref="img/sprite.svg#heart" />
                    </svg>
                  </div>
                </button>

                {/* Image */}
                <div className="product-card__image">
                  <img src={product.img} alt={product.alt} />
                </div>

                {/* Reviews */}
                <div className="product-card__reviews">
                  <ul className="product-card__stars stars">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <li key={i} className="product-card__star stars__star">
                          <svg>
                            <use xlinkHref="img/sprite.svg#star" />
                          </svg>
                        </li>
                      ))}
                  </ul>
                  <p className="product-card__reviews-count">({product.reviewsCount})</p>
                </div>

                {/* Title */}
                <h3 className="product-card__title">
                  <a href="#" className="product-card__link">
                    {product.title}
                  </a>
                </h3>

                {/* Price */}
                <span className="product-card__price">{product.price}</span>

                {/* Cart Button */}
                <button className="product-card__cart-btn cart-button">
                  <svg className="cart-button__icon">
                    <use xlinkHref="img/sprite.svg#cart" />
                  </svg>
                </button>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;

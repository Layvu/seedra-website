import React from "react";

const Blog: React.FC = () => {
  return (
    <section className="blog">
      <div className="container blog__container">
        {/* Header */}
        <div className="blog__header section-header">
          <h2 className="section-header__title">Our blog.</h2>
          <button className="section-header__btn default-btn btn-reset" data-filter="to-blog">
            Go to our blog
          </button>
        </div>

        {/* Blog Grid */}
        <div className="blog__grid">
          {/* Post 1 */}
          <div className="blog__post-1 post-info">
            <div className="post-info__image">
              <img src="img/spinach.png" alt="Blog image" />
            </div>
            <span className="post-info__date">03.10.2024</span>
            <h3 className="post-info__title">How to plant spinach correctly in winter</h3>
            <p className="post-info__descr">
              In most areas, successive sowing can be done from early spring until early winter, but more
              often during hotter months...
            </p>
            <button className="post-info__btn default-btn btn-reset">Read</button>
          </div>

          {/* Post 2 */}
          <div className="blog__post-2 post-info">
            <div className="post-info__image post-info__image_wide">
              <img src="img/gardener.png" alt="Blog image" />
            </div>
            <span className="post-info__date">03.10.2024</span>
            <h3 className="post-info__title">How to plant spinach correctly in winter</h3>
            <p className="post-info__descr">
              In most areas, successive sowing can be done from early spring until early winter, but more
              often during hotter months...
            </p>
            <button className="post-info__btn default-btn btn-reset">Read</button>
          </div>

          {/* Post 3 */}
          <div className="blog__post-3 post-info">
            <div className="post-info__image">
              <img src="img/strawberries.png" alt="Blog image" />
            </div>
            <span className="post-info__date">03.10.2024</span>
            <h3 className="post-info__title">How to plant spinach correctly in winter</h3>
            <p className="post-info__descr"></p>
            <button className="post-info__btn default-btn btn-reset">Read</button>
          </div>

          {/* Post 4 */}
          <div className="blog__post-4 post-info">
            <div className="post-info__image">
              <img src="img/strawberries.png" alt="Blog image" />
            </div>
            <span className="post-info__date">03.10.2024</span>
            <h3 className="post-info__title">How to plant spinach correctly in winter</h3>
            <p className="post-info__descr"></p>
            <button className="default-btn btn-reset">Read</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

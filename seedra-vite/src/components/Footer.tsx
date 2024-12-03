import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          {/* nav */}
          <nav className="nav footer__nav">
            <ul className="nav__list footer__nav-list">
              <li className="nav__item footer__nav-item">
                <a href="#" className="nav__link nav__link_upper">
                  all products
                </a>
              </li>
              <li className="nav__item footer__nav-item">
                <a href="#" className="nav__link nav__link_upper">
                  about seedra
                </a>
              </li>
              <li className="nav__item footer__nav-item">
                <a href="#" className="nav__link nav__link_upper">
                  our blog
                </a>
              </li>
            </ul>
          </nav>

          {/* logo */}
          <a href="#" className="logo footer__logo" aria-label="logo">
            <svg>
              <use xlinkHref="img/sprite.svg#logo" />
            </svg>
          </a>

          {/* nav */}
          <nav className="nav footer__nav">
            <ul className="nav__list footer__nav-list">
              <li className="nav__item footer__nav-item">
                <a href="#" className="nav__link">
                  Terms&Conditions
                </a>
              </li>
              <li className="nav__item footer__nav-item">
                <a href="#" className="nav__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          {/* social */}
          <ul className="social footer__social">
            <li className="social__item footer__social-item">
              <a href="#" className="social__link">
                <svg>
                  <use xlinkHref="img/sprite.svg#inst" />
                </svg>
              </a>
            </li>
            <li className="social__item footer__social-item">
              <a href="#" className="social__link">
                <svg>
                  <use xlinkHref="img/sprite.svg#facebook" />
                </svg>
              </a>
            </li>
          </ul>

          {/* copyright */}
          <p className="footer__copyright">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

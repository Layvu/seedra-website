//import s from "./Footer.module.scss";
import "./Footer.scss";

import React from "react";
import { Link } from "react-router-dom";

export const FooterUI: React.FC = () => {
  return (
    <footer className="footer footer_home-page">
      <div className="container footer__container">
        <div className="footer__top">
          {/* nav */}
          <nav className="nav footer__nav">
            <ul className="nav__list footer__nav-list">
              <li className="nav__item footer__nav-item">
                <Link to="/all-products" className="nav__link nav__link_upper">
                  all products
                </Link>
              </li>
              <li className="nav__item footer__nav-item">
                <Link to="about-seedra" className="nav__link nav__link_upper">
                  about seedra
                </Link>
              </li>
              <li className="nav__item footer__nav-item">
                <Link to="/our-blog" className="nav__link nav__link_upper">
                  our blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* logo */}
          <Link to="/" className="logo footer__logo" aria-label="logo">
            <svg>
              <use xlinkHref="img/sprite.svg#logo" />
            </svg>
          </Link>

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

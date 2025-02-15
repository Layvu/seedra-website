//import s from "./Footer.module.scss";
import "./Footer.scss";

import React from "react";
import { Link } from "react-router-dom";

import { StaticNavigation } from "@components/Shared/StaticNavigation";
import { staticNavItems } from "constants/navigation";
import { SvgIcon } from "@components/Shared/SvgIcon";
import { Social } from "@components/Shared/Social";

export const FooterUI: React.FC = () => {
  return (
    <footer className="footer footer_home-page">
      <div className="container footer__container">
        <div className="footer__top">
          <StaticNavigation items={staticNavItems.slice(0, 3)} className="footer" />

          <Link to="/" className="logo footer__logo" aria-label="logo">
            <SvgIcon id="logo" title="Seedra logo" />
          </Link>

          <StaticNavigation items={staticNavItems.slice(4, 6)} className="footer" isUppercase={false} />
        </div>

        <div className="footer__bottom">
          <Social className="footer__social" />

          {/* copyright */}
          <p className="footer__copyright">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

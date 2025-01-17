//import s from "./Mission.module.scss";
import "./Mission.scss";

import React from "react";

export const MissionUI: React.FC = () => {
  return (
    <section className="mission mission_home-page">
      <div className="container mission__container">
        <div className="mission__content">
          <div className="mission__leaves-left">
            <img src="img/leaves-left.png" alt="Leaves image" />
          </div>

          <h2 className="mission__title">We sell seeds</h2>
          <p className="mission__descr">that always sprout and gardening supplies which never break</p>

          <div className="mission__leaves-right">
            <img src="img/leaves-right.png" alt="Leaves image" />
          </div>
        </div>
      </div>
    </section>
  );
};

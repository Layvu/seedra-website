//import s from "./CompanyInfo.module.scss";
import "./CompanyInfo.scss";

import React from "react";

const companyInfoTexts = {
  title: "Seedra helps to grow fast and efficient",
  paragraphs: [
    "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George.",
    "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee.",
    "Spinach common culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more. Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product.",
  ],
};

export const CompanyInfoUI: React.FC = () => {
  return (
    <section className="company-info">
      <div className="container company-info__container">
        <div className="company-info__content">
          <h2 className="company-info__title">{companyInfoTexts.title}</h2>
          {companyInfoTexts.paragraphs.map((text, index) => {
            return (
              <p key={index} className="company-info__paragraph">
                {text}
              </p>
            );
          })}
        </div>

        <div className="company-info__image">
          <img src="../img/woman-leaves.png" alt="Woman image" />
        </div>
      </div>
    </section>
  );
};

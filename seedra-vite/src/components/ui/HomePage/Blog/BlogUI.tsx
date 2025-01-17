//import s from "./Blog.module.scss";
import "./Blog.scss";

import React from "react";
import { BlogUIProps } from "./type";

import { SectionHeader } from "@components/HomePage/SectionHeader";

export const BlogUI: React.FC<BlogUIProps> = ({ posts }) => {
  return (
    <section className="blog blog_home-page">
      <div className="container blog__container">
        <SectionHeader
          className="blog__header"
          title="Our blog."
          buttonText="Go to our blog"
          buttonLink="/our-blog"
        />

        {/* Blog Grid */}
        <div className="blog__grid">
          {posts.map((post, counter) => (
            <div key={counter + 1} className={`blog__post-${counter + 1} post-info`}>
              <div className="post-info__image">
                <img src={post.img} alt="Blog image" />
              </div>
              <span className="post-info__date">{post.date}</span>
              <h3 className="post-info__title">{post.title}</h3>
              <p className="post-info__descr">{post.description}</p>
              <button className="post-info__btn default-btn btn-reset">Read</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

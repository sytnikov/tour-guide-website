import React from "react";

import ArticlesCarousel from "../ArticlesCarousel";
import { articleData } from "@/lib/data";
import Article from "../Article";

export default function ArticlesSection() {
  return (
    <React.Fragment>
      <section className="hidden md:block w-full">
        <div className="px-3 mx-auto mb-16 max-w-[80rem]">
          <h2 className="text-center mb-[3rem]">
            А это будет интересно
          </h2>
          <div className="grid grid-cols-3 items-start">
            {articleData.map((article, index) => (
              <React.Fragment key={index}>
                <Article
                  image={article.image}
                  name={article.name}
                  source={article.source}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="articles-mobile" className="md:hidden w-full">
        <div className="px-3 mx-auto mb-16 max-w-[80rem]">
          <h2 className="text-center mb-[2rem]">
            А это будет интересно
          </h2>
          <ArticlesCarousel />
        </div>
      </section>
    </React.Fragment>
  );
}

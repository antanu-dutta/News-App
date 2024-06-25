import React, { useEffect, useState } from "react";
import { BlogCard } from "./Card";
import axios from "axios";
import { DefaultSpinner } from "./Spiner";
import { SimplePagination } from "./Pagination";

function News({ category }) {
  const [newsDetails, setNewsDetails] = useState({
    isLoading: true,
    totalNews: "",
    articles: [],
    page: 1,
    errorMessage: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=f33d81ce668f4f83bdad253daba27f1a&page=${newsDetails.page}&pageSize=12`;
        const newsData = await axios(url);
        setNewsDetails({
          ...newsDetails,
          articles: newsData.data.articles,
          isLoading: false,
          totalNews: newsData.data.totalResults,
        });
      } catch (err) {
        if (err.response.status === 429) {
          setNewsDetails({
            ...newsDetails,
            isLoading: false,
            errorMessage: "You have requested too many times",
          });
        }
      }
    };
    fetchData();
  }, [newsDetails.page, category]);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-3">
        <div className="flex justify-center items-center my-5">
          {newsDetails.isLoading && <DefaultSpinner />}
        </div>
        {newsDetails.errorMessage && (
          <div className="text-center text-red-600 text-4xl">
            {`404 : ${newsDetails.errorMessage}`}
          </div>
        )}
        {newsDetails.articles.length != 0 && (
          <div className="text-white text-3xl">{category.toUpperCase()}</div>
        )}
        {newsDetails.articles.length != 0 && (
          <div className="py-10 flex justify-center">
            <SimplePagination newsData={{ newsDetails, setNewsDetails }} />
          </div>
        )}

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8">
          {newsDetails.articles.map((news, index) => {
            return (
              <BlogCard
                key={index}
                image={news.urlToImage ? news.urlToImage : ""}
                title={
                  news.title ? news.title.slice(0, 61) + "..." : news.title
                }
                description={
                  news.description
                    ? news.description.slice(0, 100) + "..."
                    : news.description
                }
                author={news.author}
                date={news.publishedAt}
                url={news.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default News;

import React, { useEffect, useState } from "react";
import { BlogCard } from "./Card";
import axios from "axios";
import { DefaultSpinner } from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@material-tailwind/react";

function News({ category, mainCategory }) {
  const [newsDetails, setNewsDetails] = useState({
    isLoading: true,
    totalNews: 0,
    articles: [],
    page: 1,
    errorMessage: "",
  });

  const fetchMoreData = async () => {
    try {
      const url = `https://newsapi.org/v2/${mainCategory}?country=in&category=${category}&apiKey=8936d237be2e4a8fb24a5e85fff941fa&pageSize=12`;
      const newsData = await axios(url);
      setNewsDetails((prevState) => ({
        ...prevState,
        articles: [...newsData.data.articles, ...prevState.articles],
        // articles: newsData.data.articles,
        totalNews: newsData.data.totalResults,
        isLoading: false,
        page: prevState.page + 1,
      }));
    } catch (err) {
      if (err.response && err.response.status === 429) {
        setNewsDetails((prevState) => ({
          ...prevState,
          isLoading: false,
          errorMessage: "You have requested too many times",
        }));
      }
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, [category]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-3 py-[100px]">
        {newsDetails.isLoading && (
          <div className="flex justify-center items-center my-5">
            <DefaultSpinner />
          </div>
        )}

        {newsDetails.errorMessage && (
          <div className="text-center text-red-600 text-4xl">
            {`404 : ${newsDetails.errorMessage}`}
          </div>
        )}

        {newsDetails.articles.length > 0 && (
          <h1 className="text-center my-10 text-4xl text-white">Latest News</h1>
        )}

        {newsDetails.articles.length !== 0 && (
          <div className="text-white text-3xl my-7">
            {category.toUpperCase()}
          </div>
        )}

        <InfiniteScroll
          dataLength={newsDetails.articles.length}
          next={fetchMoreData}
          hasMore={newsDetails.articles.length < newsDetails.totalNews}
          loader={
            <div className="flex justify-center items-center my-5">
              <DefaultSpinner />
            </div>
          }
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {newsDetails.articles.map((news, index) => (
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
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default News;

News.defaultProps = {
  mainCategory: "top-headlines",
};

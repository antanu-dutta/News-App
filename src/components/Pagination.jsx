import React, { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function SimplePagination(props) {
  const { newsDetails, setNewsDetails } = props.newsData;

  const next = () => {
    setNewsDetails({ ...newsDetails, page: ++newsDetails.page });
    console.log(newsDetails.page);
  };

  const prev = () => {
    setNewsDetails({ ...newsDetails, page: --newsDetails.page });
    console.log(newsDetails.page);
  };
  const pageNumber = Math.floor(
    newsDetails.totalNews / newsDetails.articles.length
  );
  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={newsDetails.page === 1}
        color="white"
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="white" className="font-normal">
        Page <strong className="text-[#FF7F50]">{newsDetails.page}</strong> of{" "}
        <strong className="text-[#FFD700]">{pageNumber}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={newsDetails.page === pageNumber}
        color="white"
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}

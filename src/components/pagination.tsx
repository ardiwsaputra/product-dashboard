import React from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  total: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, total }) => {
  const router =  useRouter();
  const totalPages = Math.ceil(total / 10);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const handlePrevClick = () => {
    if (!isFirstPage) {
      router.push(`?page=${page - 1}`);
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      router.push(`?page=${page + 1}`);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`);
  };

  return (
    <div className="flex items-center justify-center space-x-4 bg-white rounded-lg p-4 sm:space-x-2">
      <button
        className={classNames("page-link text-primary", {
          "first:rounded-l-lg text-gray-500": isFirstPage,
        })}
        onClick={handlePrevClick}
        disabled={isFirstPage}
      >
        Previous
      </button>

      <span className="page-link text-primary sm:hidden block font-bold">
        {page}
      </span>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
        <button
          key={number}
          className={classNames("page-link text-primary sm:block hidden", {
            "font-bold": page === number,
            "not:first-child:-ml-px": number !== 1,
          })}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </button>
      ))}

      <button
        className={classNames("page-link text-primary", {
          "last:rounded-r-lg text-gray-500": isLastPage,
        })}
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

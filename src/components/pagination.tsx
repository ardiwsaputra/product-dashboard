"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

type Props = {
  page: number;
  total: number;
};

const Pagination = ({ page, total }: Props) => {
  const router = useRouter();

  return (
    <ReactPaginate
      pageRangeDisplayed={1}
      onClick={(e) => {
        const { isActive, selected, nextSelectedPage } = e;
        const currentPage = (isActive ? selected : nextSelectedPage ?? page) + 1;
        router.push("?page=" + currentPage);
      }}
      initialPage={page}
      pageCount={Math.ceil((total ?? 0) / 10)}
      activeClassName="font-bold text-primary"
      disabledClassName="pointer-events-none text-gray-400"
      containerClassName="p-2 bg-white rounded-md flex flex-row space-x-4 text-primary relative overflow-x-auto shadow"
    />
  );
};

export default Pagination;
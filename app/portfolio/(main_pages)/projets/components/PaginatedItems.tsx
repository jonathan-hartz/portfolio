"use client";

import projects from "@/app/portfolio/(main_pages)/projets/data/projects.json";
import GridItems from "./GridItems";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export default function PaginatedItems({
  itemsPerPage,
}: {
  itemsPerPage: number;
}) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(projects.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % projects.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center gap-4 py-4 sm:grid-cols-2 sm:justify-items-start md:grid-cols-3">
        <GridItems projects={currentItems} />
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          className="flex w-auto justify-center"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          pageClassName="mx-2 w-8 h-8 border-solid border-2 rounded-full flex justify-center items-center border-indigo-500 bg-indigo-600 "
          activeClassName="bg-indigo-200 font-bold scale-150 transition-transform"
          previousClassName="flex justify-center items-center mr-2"
          nextClassName="flex justify-center items-center ml-2"
        />
      )}
    </>
  );
}

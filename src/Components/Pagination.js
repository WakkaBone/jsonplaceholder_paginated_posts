import React from "react";
import { PaginationButton } from "../Styled-Components";

const Pagination = ({
  paginationMethods = {},
  firstPostIndex = 0,
  postsPerPage = 0,
}) => {
  return (
    <div>
      <PaginationButton onClick={paginationMethods.setNextPage}>
        Next page
      </PaginationButton>
      <PaginationButton
        disabled={postsPerPage + 1 >= firstPostIndex + postsPerPage}
        onClick={paginationMethods.setPrevPage}
      >
        Previous page
      </PaginationButton>
    </div>
  );
};

export default Pagination;

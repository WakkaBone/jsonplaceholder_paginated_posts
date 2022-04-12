import React from "react";
import { PaginationButton, PaginationContainer } from "../Styled-Components";

const Pagination = ({
  paginationMethods = {},
  firstPostIndex = 0,
  postsPerPage = 0,
}) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={paginationMethods.setNextPage}>
        Next page
      </PaginationButton>
      <PaginationButton
        disabled={postsPerPage + 1 >= firstPostIndex + postsPerPage}
        onClick={paginationMethods.setPrevPage}
      >
        Previous page
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;

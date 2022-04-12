import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div``;

export const CreatePostContainer = styled.div``;
export const CreatePostForm = styled.form``;
export const CreatePostInput = styled.input``;
export const CreatePostAddButton = styled.button``;

export const PostsListContainer = styled.main``;
export const PostContainer = styled.article``;
export const PostHeaderImage = styled.div``;
export const PostHeading = styled.div``;
export const PostContent = styled.div``;

export const PaginationButton = styled.button``;

const rotate = keyframes`
from {transform: rotate(0deg)}
to {transform: rotate(360deg)}
`;
export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px dashed black;
  animation: ${rotate} 2s linear infinite;
`;

import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CreatePostForm = styled.form`
  max-height: ${(props) => (props.createFormVisible ? "500px" : "0px")};
  overflow: hidden;
  width: 100%;
  transition: max-height 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CreatePostInput = styled.input`
  width: 80%;
`;
export const CreatePostTextarea = styled.textarea`
  width: 80%;
  resize: none;
`;
export const CreatePostAddButton = styled.button`
  width: 80%;
`;

export const PostsListContainer = styled.main`
  padding: 1% 4%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const PostContainer = styled.article`
  border-radius: 10%;
  border: 1px solid gainsboro;
  background-color: white;
  padding: 2%;
  margin: 1% 2%;
  max-width: 25vw;
  min-width: 25vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  @media (max-width: 900px) {
    max-width: 40vw;
    min-width: 40vw;
  }
  @media (max-width: 500px) {
    max-width: 90vw;
    min-width: 90vw;
    border-radius: 5%;
  }
`;
export const PostHeaderImage = styled.div`
  height: 20vh;
  width: 100%;
  background-image: url("https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 1px solid gainsboro;
  margin-bottom: 10px;
`;
export const PostHeading = styled.div``;
export const PostContent = styled.div``;

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: center;
`;
export const PaginationButton = styled.button`
  min-width: 10vw;
`;

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

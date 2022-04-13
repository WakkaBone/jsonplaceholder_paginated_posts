import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatePostContainer = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CreatePostHeaderButton = styled.button`
  align-items: center;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  transition: all 250ms;
  -webkit-user-select: none;
  vertical-align: baseline;
  width: auto;
}
:hover,
:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}
:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
}
`;
export const CreatePostForm = styled.form`
  max-height: ${(props) => (props.createFormVisible ? "500px" : "0px")};
  overflow: hidden;
  width: 80%;
  transition: max-height 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gainsboro;
`;
export const CreatePostInput = styled.input`
  width: 100%;
`;
export const CreatePostTextarea = styled.textarea`
  width: 100%;
  resize: none;
`;
export const CreatePostAddButton = styled(CreatePostHeaderButton)`
  width: 100%;
  min-height: 2rem;
  padding: 0.5%;
  :disabled {
    background-color: grey;
    cursor: inherit;
  }
`;
export const CreatePostErrors = styled.div`
  color: red;
  font-weight: bold;
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

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
display: block;
width: 50%;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 2rem;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  transition: all 250ms;
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
@media (max-width: 650px){
  width: 60%;
}
@media (max-width: 520px){
  min-height: 2rem;
  font-size: 1.5rem;
  width: 70%;
}
@media (max-width: 350px){
  width: 90%;
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
  border: ${(props) => (!props.createFormVisible ? "0" : "1px")} solid gainsboro;
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
  font-size: 1rem;
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
  align-items: flex-start;
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
export const PostHeading = styled.div`
  margin-bottom: 10px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
`;
export const PostContent = styled.div``;
export const TogglePostDescription = styled.button`
  display: inline-block;
  margin-left: 5px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.3rem 0.4rem;
  border-radius: 0.25rem;
  :hover {
    cursor: pointer;
  }
`;
export const PostFooter = styled.div`
  margin-top: 5%;
  padding-top: 3%;
  border-top: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
`;
export const PostManipulationContainer = styled.div`
  display: flex;
  font-size: 1.3rem;
`;

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: center;
`;
export const PaginationButton = styled(CreatePostAddButton)`
  width: inherit;
  min-width: 10vw;
  margin: 1%;
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

export const HoverPointer = styled.div`
  :hover {
    cursor: pointer;
  }
`;

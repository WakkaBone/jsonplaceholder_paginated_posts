import React from "react";
import {
  PostContainer,
  PostHeaderImage,
  PostHeading,
  PostContent,
} from "../Styled-Components";

const OnePost = ({ id = "", title = "", body = "" }) => {
  return (
    <PostContainer>
      <PostHeaderImage />
      <PostHeading>
        <h1>
          {id} {title}
        </h1>
      </PostHeading>
      <PostContent>
        <p>{body}</p>
      </PostContent>
    </PostContainer>
  );
};

export default OnePost;

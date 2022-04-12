import React from "react";
import {
  PostContainer,
  PostHeaderImage,
  PostHeading,
  PostContent,
} from "../Styled-Components";

const OnePost = ({ title = "", body = "" }) => {
  const shortenTitle = (title) =>
    title.length > 10 ? title.slice(0, 10).concat("...") : title;

  const shortenContent = (content) =>
    content.length > 50 ? content.slice(0, 50).concat("...") : content;

  return (
    <PostContainer>
      <PostHeaderImage />
      <PostHeading>
        <h1>{shortenTitle(title)}</h1>
      </PostHeading>
      <PostContent>
        <p>{shortenContent(body)}</p>
      </PostContent>
    </PostContainer>
  );
};

export default OnePost;

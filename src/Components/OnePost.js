import React, { useState } from "react";
import {
  PostContainer,
  PostHeaderImage,
  PostHeading,
  PostContent,
  PostFooter,
  PostManipulationContainer,
  HoverPointer,
  TogglePostDescription,
} from "../Styled-Components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const OnePost = ({ title = "", body = "", userId = 0 }) => {
  const [fullDescription, setFullDescription] = useState(false);
  const shortenTitle = (title) =>
    title.length > 15 ? title.slice(0, 15).concat("...") : title;

  const shortenContent = (content) =>
    content.length > 50 ? content.slice(0, 50).concat("...") : content;

  return (
    <PostContainer>
      <PostHeaderImage />
      <PostHeading>
        <h1>{shortenTitle(title)}</h1>
      </PostHeading>
      <PostContent>
        <p>
          {fullDescription ? (
            <>
              {body}{" "}
              <TogglePostDescription onClick={() => setFullDescription(false)}>
                Hide full description
              </TogglePostDescription>
            </>
          ) : (
            <>
              {shortenContent(body)}
              <TogglePostDescription onClick={() => setFullDescription(true)}>
                View full description
              </TogglePostDescription>
            </>
          )}
        </p>
        <p style={{ textAlign: "right" }}>Author: {userId}</p>
      </PostContent>
      <PostFooter>
        <div>
          <a target="_blank" href="#">
            Open in a new tab
          </a>
        </div>
        <PostManipulationContainer>
          <HoverPointer title="Delete">
            <AiFillDelete />
          </HoverPointer>
          {`  `}
          <HoverPointer title="Edit">
            <AiFillEdit />
          </HoverPointer>
        </PostManipulationContainer>
      </PostFooter>
    </PostContainer>
  );
};

export default OnePost;

import React from "react";
import OnePost from "./OnePost";
import { LoadingSpinner, PostsListContainer } from "../Styled-Components";

const PostsList = ({ posts = [], loadingPosts = false }) => {
  if (loadingPosts) {
    return (
      <PostsListContainer>
        <LoadingSpinner />
      </PostsListContainer>
    );
  }
  return (
    <PostsListContainer>
      {posts.map((post, index) => (
        <OnePost key={index} {...post} />
      ))}
    </PostsListContainer>
  );
};

export default PostsList;

import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostsAction } from "./redux/actions";
import { useSelector } from "react-redux";
import CreatePost from "./Components/CreatePost";
import PostsList from "./Components/PostsList";
import Pagination from "./Components/Pagination";
import { MainContainer } from "./Styled-Components";

function App() {
  const postsPerPage = 9;
  const [firstPostIndex, setFirstPostIndex] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const paginationMethods = {
    setNextPage: () => {
      setFirstPostIndex(firstPostIndex + postsPerPage);
    },
    setPrevPage: () => {
      setFirstPostIndex(firstPostIndex - postsPerPage);
    },
  };

  const getPosts = async () => {
    const fillArray = (array) => {
      for (let i = 0; i < array.length; i++) {
        array[i] = `https://jsonplaceholder.typicode.com/posts/${
          firstPostIndex + i
        }`;
      }
      return array;
    };
    let fetchArray = new Array(postsPerPage).fill(null);
    fetchArray = fillArray(fetchArray);
    setLoadingPosts(true);
    Promise.all(fetchArray.map((url) => fetch(url).then((res) => res.json())))
      .then((data) => {
        dispatch(getPostsAction(data));
        setLoadingPosts(false);
      })
      .catch((e) => {
        console.error(e);
        setLoadingPosts(false);
      });
  };

  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);

  useEffect(() => {
    getPosts();
  }, [firstPostIndex]);

  return (
    <MainContainer>
      <CreatePost />
      <PostsList posts={postsState} loadingPosts={loadingPosts} />
      <Pagination
        paginationMethods={paginationMethods}
        firstPostIndex={firstPostIndex}
        postsPerPage={postsPerPage}
      />
    </MainContainer>
  );
}

export default App;

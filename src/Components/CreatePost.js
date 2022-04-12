import React from "react";
import { useFormik } from "formik";
import {
  CreatePostAddButton,
  CreatePostContainer,
  CreatePostForm,
  CreatePostInput,
} from "../Styled-Components";

const CreatePost = () => {
  const createPost = (title, content) => {
    fetch("http://qlarium.com/test/testAddPost");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Please enter the title";
    }
    if (!values.content) {
      errors.content = "Please enter the content";
    }
    return errors;
  };
  const initialValues = { title: "", content: "" };
  const onSubmit = (values) => {
    console.log(values);
  };
  const createPostForm = useFormik({ validate, initialValues, onSubmit });
  return (
    <CreatePostContainer>
      <CreatePostForm onSubmit={createPostForm.handleSubmit}>
        <CreatePostInput
          type="text"
          placeholder="Post title"
          {...createPostForm.getFieldProps("title")}
        />
        <CreatePostInput
          type="text"
          placeholder="Post content"
          {...createPostForm.getFieldProps("content")}
        />
        <CreatePostAddButton type="submit">Add</CreatePostAddButton>
      </CreatePostForm>
      {createPostForm.touched.title && createPostForm.errors.title
        ? createPostForm.errors.title
        : null}
      {createPostForm.touched.content && createPostForm.errors.content
        ? createPostForm.errors.content
        : null}
    </CreatePostContainer>
  );
};

export default CreatePost;

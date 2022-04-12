import React, { useState } from "react";
import { useFormik } from "formik";
import {
  CreatePostAddButton,
  CreatePostContainer,
  CreatePostForm,
  CreatePostInput,
  CreatePostTextarea,
} from "../Styled-Components";

const CreatePost = () => {
  const createPostMethod = (title, content) => {
    fetch("http://qlarium.com/test/testAddPost", {
      method: "POST",
      body: { title, content },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
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
    createPostMethod(values.title, values.content);
  };

  const createPostForm = useFormik({ validate, initialValues, onSubmit });
  const [createFormVisible, setCreateFormVisible] = useState(false);
  return (
    <CreatePostContainer>
      <h1>
        <button onClick={(e) => setCreateFormVisible(!createFormVisible)}>
          {!createFormVisible ? "Create a new post" : "Hide the form"}
        </button>
      </h1>
      <CreatePostForm
        createFormVisible={createFormVisible}
        onSubmit={createPostForm.handleSubmit}
      >
        <CreatePostInput
          type="text"
          placeholder="Post title"
          {...createPostForm.getFieldProps("title")}
        />
        <CreatePostTextarea
          type="text"
          rows="4"
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

import React, { useState } from "react";
import { useFormik } from "formik";
import {
  CreatePostAddButton,
  CreatePostHeaderButton,
  CreatePostContainer,
  CreatePostForm,
  CreatePostInput,
  CreatePostTextarea,
  CreatePostErrors,
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
      <CreatePostHeaderButton
        onClick={(e) => setCreateFormVisible(!createFormVisible)}
      >
        {!createFormVisible ? "Create a new post" : "Hide the form"}
      </CreatePostHeaderButton>
      <CreatePostForm
        createFormVisible={createFormVisible}
        onSubmit={(e) => {
          e.preventDefault();
          createPostForm.handleSubmit();
          createPostForm.handleReset();
        }}
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
        <CreatePostAddButton
          disabled={
            !createPostForm.values.title ||
            !createPostForm.values.content ||
            JSON.stringify(createPostForm.errors) !== JSON.stringify({})
          }
          type="submit"
        >
          Add
        </CreatePostAddButton>
      </CreatePostForm>
      <CreatePostErrors>
        {createFormVisible &&
        createPostForm.touched.title &&
        createPostForm.errors.title ? (
          <p style={{ margin: 0 }}>{createPostForm.errors.title}</p>
        ) : null}
        {createFormVisible &&
        createPostForm.touched.content &&
        createPostForm.errors.content ? (
          <p style={{ margin: 0 }}>{createPostForm.errors.content}</p>
        ) : null}
      </CreatePostErrors>
    </CreatePostContainer>
  );
};

export default CreatePost;

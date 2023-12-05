import { DialogContentText } from "@mui/material";
import React, { useState } from "react";
import Form from "../Form/Form.jsx";
import CustomModalWindow from "../../../../shared/Modal/CustomModalWindow.jsx";

const CreatingModalWindow = (props) => {
  const { open, handleClose, createPost, posts } = props;
  const id = posts.length + 1;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCreateButton = () => {
    createPost(id, title, body);
    handleClose();
  };

  return (
    <CustomModalWindow
      headerTitle="Форма создания поста"
      open={open}
      handleClose={handleClose}
      handleAction={handleCreateButton}
      buttonText="Создать"
    >
      <DialogContentText>ID поста: {id}</DialogContentText>
      <Form onChangeBody={onChangeBody} onChangeTitle={onChangeTitle} titleValue={title} bodyValue={body}/>
    </CustomModalWindow>
  );
};

export default CreatingModalWindow;

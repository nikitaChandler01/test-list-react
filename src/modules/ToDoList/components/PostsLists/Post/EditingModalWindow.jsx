import { DialogContentText } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomModalWindow from "../../../../../shared/Modal/CustomModalWindow";
import Form from "../../Form/Form";

const EditingModalWindow = (props) => {
  const { open, handleClose, editPost, post } = props;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  useEffect(() => {
    return () => {
      setTitle(post.title)
      setBody(post.body)
    }
  }, [handleClose])
  
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveButton = (e) => {
    editPost({
      id: post.id,
      title,
      body,
      userId: post.userId,
    });
    handleClose();
  };

  return (
    <CustomModalWindow
      headerTitle="Форма изменения поста"
      open={open}
      handleClose={handleClose}
      handleAction={handleSaveButton}
      buttonText="Сохранить"
    >
      <DialogContentText>ID поста: {post.id}</DialogContentText>
      <Form
        onChangeBody={onChangeBody}
        onChangeTitle={onChangeTitle}
        titleValue={title}
        bodyValue={body}
      />
    </CustomModalWindow>
  );
};

export default EditingModalWindow;

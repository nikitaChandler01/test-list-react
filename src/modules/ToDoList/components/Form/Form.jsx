import { Grid, TextField } from "@mui/material";
import React from "react";

const Form = ({ onChangeBody, onChangeTitle, titleValue, bodyValue }) => {
  return (
    <Grid container gap={3}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Введите заголовок поста"
        autoFocus
        onChange={onChangeTitle}
        value={titleValue}
      />
      <TextField
        variant="outlined"
        multiline
        fullWidth
        placeholder="Введите содержимое поста"
        onChange={onChangeBody}
        value={bodyValue}
      />
    </Grid>
  );
};

export default Form;

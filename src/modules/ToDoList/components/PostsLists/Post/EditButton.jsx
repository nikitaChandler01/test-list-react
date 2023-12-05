import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import EditingModalWindow from "./EditingModalWindow";

const EditButton = (props) => {
  const { editPost, post } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid>
      <Button variant="outlined" onClick={handleClickOpen}>
        Изменить
      </Button>
      <EditingModalWindow
        editPost={editPost}
        post={post}
        open={open}
        handleClose={handleClose}
      />
    </Grid>
  );
};

export default EditButton;

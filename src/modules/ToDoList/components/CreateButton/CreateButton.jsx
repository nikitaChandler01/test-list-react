import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import CreatingModalWindow from "./CreatingModalWindow";
const CreateButton = ({ createPost, posts }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid justifyContent="center" container>
      <Button style={{
        margin: 20
      }}variant="outlined" onClick={handleClickOpen}>
        Создать
      </Button>
      <CreatingModalWindow
        createPost={createPost}
        posts={posts}
        open={open}
        handleClose={handleClose}
      />
    </Grid>
  );
};

export default CreateButton;

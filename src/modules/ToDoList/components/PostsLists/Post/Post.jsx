import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import EditButton from "./EditButton";

const Post = (props) => {
  const { post, deletePost, editPost } = props;
  const { id, title, body, userId } = post;

  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(id);
  };

  return (
    <Grid
      style={{
        background: "#4B4B4B",
        padding: "30px 40px",
        borderRadius: 10,
        color: "white",
      }}
      container
      gap={3}
    >
      <Typography variant="h5" textAlign="left">
        {title}
      </Typography>
      <Grid container>
        <Typography variant="body1" textAlign="left">
          {body}
        </Typography>
      </Grid>
      <Grid container justifyContent="flex-end" alignItems="center" gap={2}>
        <Typography variant="caption" color="#A0A0A0">
          userId: {userId}
        </Typography>
        <Typography variant="caption" color="#A0A0A0">
          postId: {id}
        </Typography>
        <EditButton editPost={editPost} post={post} />
        <Button onClick={handleDelete} color="error" variant="outlined">
          Удалить
        </Button>
      </Grid>
    </Grid>
  );
};

export default Post;

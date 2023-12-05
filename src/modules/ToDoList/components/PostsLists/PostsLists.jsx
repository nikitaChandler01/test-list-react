import { Grid } from "@mui/material";
import React from "react";
import Post from "./Post/Post";

const PostsLists = ({ data, deletePost, editPost }) => {
  return (
    <Grid container style={{ maxWidth: 750, margin: "0 auto" }} gap={5}>
      {data.map((post) => {
        return (
          <Post
            editPost={editPost}
            deletePost={deletePost}
            post={post}
            key={post.id}
          />
        );
      })}
    </Grid>
  );
};

export default PostsLists;

import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SkeletonCard from "../../../components/SkeletonCard";
import { useHttp } from "../../../hooks/http.get.hooks";
import AddButton from "./CreateButton/CreateButton";
import PostsLists from "./PostsLists/PostsLists";

const MainToDoList = () => {
  const { data, loading, error } = useHttp(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
  );
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (data && !loading) {
      setPosts(data);
    }
  }, [data, loading]);


  const createPost = (index, title, body) => {
    const newPost = {
      id: index,
      title: title,
      body: body,
      userId: 1,
    };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    newPosts.forEach((post, index) => {
      post.id = index + 1;
    });
    setPosts([...newPosts]);
  };

  const editPost = (newPost) => {
    const newPosts = posts.map((post) => {
      if (post.id === newPost.id) {
        return newPost;
      }
      return post;
    });
    setPosts([...newPosts]);
  };

  return (
    <Grid>
      {posts && !loading ? (
        <React.Fragment>
          <AddButton createPost={createPost} posts={posts} />
          <Grid container style={{ maxWidth: 750, margin: "0 auto" }} gap={5}>
            <PostsLists
              data={posts}
              deletePost={deletePost}
              editPost={editPost}
            />
          </Grid>
        </React.Fragment>
      ) : (
        <SkeletonCard />
      )}
    </Grid>
  );
};

export default MainToDoList;

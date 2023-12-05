import { useEffect, useState } from "react";

export const useCrudPost = (data) => {
  const [posts, setPosts] = useState(data);
  console.log(posts)
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

  const updatePosts = (newPosts) => {
    setPosts([...newPosts]);
  };
  useEffect(() => {
    setPosts([...posts]);
  }, [posts]);
  return {
    posts,
    createPost,
    editPost,
    deletePost,
    updatePosts,
  };
};

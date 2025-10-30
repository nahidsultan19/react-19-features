import { useState } from "react";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts((prevPost) => [...prevPost, newPost]);
  };

  return (
    <div>
      <PostForm handleAddPost={handleAddPost} />
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;

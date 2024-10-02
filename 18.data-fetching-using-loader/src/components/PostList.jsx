import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postList = useLoaderData();
  // const { postList } = useContext(PostListData);

  return (
    <div className="post-class">
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;

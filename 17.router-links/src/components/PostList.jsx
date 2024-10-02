import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div className="post-class">
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;

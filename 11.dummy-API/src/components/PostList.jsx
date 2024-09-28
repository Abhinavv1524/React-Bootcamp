import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
const PostList = () => {
  const { postList, addAllPosts } = useContext(PostListData);
  const onGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addAllPosts(data.posts));
  };
  return (
    <div className="post-class">
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={onGetPostClick}></WelcomeMessage>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

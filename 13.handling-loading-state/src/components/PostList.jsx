import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addAllPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addAllPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
      console.log("cleaning up");
    };
  }, []);

  return (
    <div className="post-class">
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;

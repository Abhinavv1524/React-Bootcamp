import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_VALUE
  );

  const addPost = (userId, postTitle, postBody, postReaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_VALUE = [
  {
    id: "1",
    title: "Going to college",
    body: "college jaake bura haal hogya hai",
    reactions: "2",
    userId: "user-1",
    tags: ["finally", "over"],
  },
  {
    id: "2",
    title: "Going canada",
    body: "canada jaake or bhi zada bura haal hogya hai",
    reactions: "10",
    userId: "user-2",
    tags: ["woof", "done"],
  },
];

export default PostListProvider;

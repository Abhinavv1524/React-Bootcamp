import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElemet = useRef();
  const postTitleElemet = useRef();
  const postBodyElemet = useRef();
  const postReactionElemet = useRef();
  const tagsElemet = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElemet.current.value;
    const postTitle = postTitleElemet.current.value;
    const postBody = postBodyElemet.current.value;
    const postReaction = postReactionElemet.current.value;
    const tags = tagsElemet.current.value.split(" ");

    userIdElemet.current.value = "";
    postTitleElemet.current.value = "";
    postBodyElemet.current.value = "";
    postReactionElemet.current.value = "";
    tagsElemet.current.value = "";
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: {
          likes: postReaction,
        },
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((posts) => {
        console.log("response aagya");
        addPost(posts);
      });
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User id
        </label>
        <input
          type="text"
          ref={userIdElemet}
          className="form-control"
          id="userId"
          placeholder="Enter the user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElemet}
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Body
        </label>
        <textarea
          type="text"
          ref={postBodyElemet}
          className="form-control"
          id="body"
          placeholder="Tell us more about it "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Reaction
        </label>
        <input
          type="text"
          ref={postReactionElemet}
          className="form-control"
          id="body"
          placeholder="How many people Reacted"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Enter your hastags
        </label>
        <input
          type="text"
          ref={tagsElemet}
          className="form-control"
          id="body"
          placeholder="Enter hashtag by adding space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

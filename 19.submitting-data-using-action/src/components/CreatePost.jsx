import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostList);

  //const handleSubmit = (event) => {};
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User id
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          id="body"
          placeholder="Enter hashtag by adding space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  //console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((posts) => {
      return posts;
    });

  return redirect("/");
}

export default CreatePost;

export const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <>
      <center>
        <h1 className="my-5">There are no post here</h1>
        <button className="btn btn-primary" onClick={onGetPostClick}>
          Click to fetch the post from server
        </button>
      </center>
    </>
  );
};

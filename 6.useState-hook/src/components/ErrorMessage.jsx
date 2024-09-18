const ErrorMessage = (props) => {
  let emptyMeassage =
    props.foodItems.length === 0 ? <h2>No food and i'm Bukh lgi hai</h2> : null;
  return <>{emptyMeassage}</>;
};

export default ErrorMessage;

function TodoItem2() {
  let todoName = "Goto college";
  let todoDate = "4/10/2023";
  return (
    <div className="container">
      <div className="row new-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger new-button">delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;

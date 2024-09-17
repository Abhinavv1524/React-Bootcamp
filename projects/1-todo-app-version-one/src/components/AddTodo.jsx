export function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row new-row">
        <div className="col-4">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button className="btn btn-success new-button">ADD</button>
        </div>
      </div>
    </div>
  );
}

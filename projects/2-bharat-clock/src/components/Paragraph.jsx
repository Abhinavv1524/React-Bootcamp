export default function Paragraph() {
  let newDate = new Date();
  return (
    <div>
      <p>
        This is the current time {newDate.toLocaleDateString()} -{" "}
        {newDate.toLocaleTimeString()}
      </p>
    </div>
  );
}

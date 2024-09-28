import { useEffect, useState } from "react";

export default function Paragraph() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <p>
        This is the current time {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

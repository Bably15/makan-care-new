import { useState, useEffect } from "react";
import "./CounterApp.css";

export default function CounterApp({ maxCount = 2023 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < maxCount) {
      const timer = setTimeout(() => setCount(count + 1), 0.5);
      return () => clearTimeout(timer);
    }
  }, [count, maxCount]);

  return (
    <div className="counter-container">

      <p className="counter-value">{count}</p>
      <h1 className="counter-title">Launched</h1>
    </div>
  );
}

import { useState, useEffect } from "react";
import "./CounterApp2.css";

export default function CounterApp2({ maxCount = 2.2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < maxCount) {
      const timer = setTimeout(() => setCount((prev) => Math.min(prev + 0.1, maxCount)), 100);
      return () => clearTimeout(timer);
    }
  }, [count, maxCount]);

  return (
    <div className="counter-container">
      <p className="counter-value">${count.toFixed(1)} M</p>
      <h1 className="counter-title">Pre-Seed Round</h1>
    </div>
  );
}

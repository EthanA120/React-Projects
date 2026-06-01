import { useState } from "react";

function useCounter(initialValue = 0, initialStep = 1) {
  const [count, setCount] = useState(initialValue);

  const [step, setStep] = useState(initialStep);

  const increment = () => {
    setCount((prev) => prev + step);
  };

  const decrement = () => {
    setCount((prev) => prev - step);
  };

  return { count, step, increment, decrement, setStep };
}

export default useCounter;

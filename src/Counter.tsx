import { useMemo, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => (prevCount += 1));
  const handleDecrement = () => setCount((prevCount) => (prevCount -= 1));
  const resetCount = () => setCount(0);

  const counterClassName = useMemo(() => {
    if (count > 0) {
      return "success";
    }
    if (count < 0) {
      return "failure";
    }
  }, [count]);

  return (
    <div id="app">
      <div className="content">
        <button onClick={handleDecrement}>-</button>
        <div className={counterClassName} id="counter">
          {count}
        </div>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;

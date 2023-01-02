import { useMemo, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => (prevCount += 1));
  const handleDecrement = () => setCount((prevCount) => (prevCount -= 1));
  const resetCount = () => setCount(0);

  const counterClassName = useMemo(() => {
    if (count > 0) {
      return "counter success";
    }
    if (count < 0) {
      return "counter failure";
    }
    return "counter";
  }, [count]);

  return (
    <div className="app">
      <div className="content">
        <button className="button" onClick={handleDecrement}>
          -
        </button>
        <div className={counterClassName} id="counter">
          {count}
        </div>
        <button className="button" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="button" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

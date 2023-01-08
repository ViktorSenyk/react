import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span className="counter__value">{count}</span>
      <button className="counter__button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

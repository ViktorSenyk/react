import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter start={5} interval={1000} />
      <Counter start={12} interval={1000} />
      <Counter start={-21} interval={1000} />
    </>
  );
}

export default App;

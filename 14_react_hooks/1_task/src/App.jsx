import React from 'react';
import { useState } from 'react';
import Clock from './Clock';

export default function App() {
  const [interval, setInterval] = useState(true);
  return (
    <>
      <button onClick={() => setInterval(!interval)}>Stop / Start</button>
      {!interval ? null : (
        <>
          <Clock location="New York" offset={-5} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="London" offset={0} />
        </>
      )}
    </>
  );
}

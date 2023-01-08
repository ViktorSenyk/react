import React, { useEffect, useState } from 'react';

export default function Dimensions() {
  const [size, setSize] = useState({ width: null, height: null });

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = (e) =>
      setSize({ width: e.target.innerWidth, height: e.target.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dimensions">
      `${size.width}px - ${size.height}px`
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function Clock({ location, offset }) {
  const [time, setTime] = useState(
    moment().utcOffset(offset).format('h:mm:ss A')
  );
  useEffect(() => {
    const intervalId = setInterval(
      () => setTime(moment().utcOffset(offset).format('h:mm:ss A')),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [location, offset]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
}

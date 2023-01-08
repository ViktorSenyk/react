import React, { useEffect, useState } from 'react';

export default function ConnectionStatus() {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const offlineToggle = () => setOnline(false);
    const onlineToggle = () => setOnline(true);
    window.addEventListener('online', onlineToggle);
    window.addEventListener('offline', offlineToggle);
    return () => {
      window.removeEventListener('online', onlineToggle);
      window.removeEventListener('offline', offlineToggle);
    };
  }, []);
  return (
    <div className={`status ${!online && 'status_offline'}`}>
      {online ? 'online' : 'offline'}
    </div>
  );
}

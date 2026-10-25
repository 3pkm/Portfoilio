import React, { useEffect, useState } from 'react';

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      id="offline-banner"
      className="fixed top-0 inset-x-0 z-[100] bg-error text-on-error py-1.5 px-4 text-center font-label-md text-label-md shadow-md"
      role="status"
      aria-live="polite"
    >
      <span>⚠️ You are currently offline. Changes will sync once your connection is restored.</span>
    </div>
  );
}

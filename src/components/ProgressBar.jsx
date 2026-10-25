import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial load progress animation
    setVisible(true);
    setProgress(30);
    const t1 = setTimeout(() => setProgress(75), 150);
    const t2 = setTimeout(() => setProgress(100), 350);
    const t3 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      id="nprogress-bar"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}

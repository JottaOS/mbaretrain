import { useEffect, useState } from 'react';

/**
 * Updates elapsed time every second
 */
export const useElapsedTime = ({ startedAt }: { startedAt: Date }) => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const updateElapsedTime = () => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - startedAt.getTime()) / 1000);
    setElapsedTime(diff);
  };

  useEffect(() => {
    const interval = setInterval(updateElapsedTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { elapsedTime };
};

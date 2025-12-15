import { getWorkout } from '@/services/workouts';
import { Workout } from '@/types/workout';
import { useEffect, useState } from 'react';
import { useErrorHandler } from './use-error-handler';

interface UseWorkoutProps {
  id: number;
}

export const useWorkout = ({ id }: UseWorkoutProps) => {
  const [data, setData] = useState<Workout>();
  const [isLoading, setIsLoading] = useState(true);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getWorkout(id);
      if (!response.success) {
        handleError(response);
        setIsLoading(false);
        return;
      }

      setData(response.data);
      setIsLoading(false);
    })();
  }, [id]);

  return { data, isLoading };
};

import { getWorkouts } from '@/services/workouts';
import { Workout } from '@/types/workout';
import { useEffect, useState } from 'react';
import { useErrorHandler } from './use-error-handler';

interface UseWorkoutsProps {
  templatesOnly?: boolean;
}

export const useWorkouts = ({ templatesOnly = false }: UseWorkoutsProps) => {
  const [data, setData] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await getWorkouts({ templatesOnly });
      if (!response.success) {
        handleError(response);
        setIsLoading(false);
        return;
      }

      setData(response.data.content);
      setIsLoading(false);
    })();
  }, [templatesOnly]);

  return { data, isLoading };
};

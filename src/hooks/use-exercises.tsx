import { getExercises } from '@/services/exercises';
import { Exercise } from '@/types/exercise';
import { useEffect, useState } from 'react';
import { useErrorHandler } from './use-error-handler';

export const useExercises = () => {
  const [data, setData] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getExercises();
      if (!response.success) {
        handleError(response);
        setIsLoading(false);
        return;
      }

      setData(response.data.content);
      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading };
};

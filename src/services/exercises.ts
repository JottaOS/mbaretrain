import { api, handleError } from '@/libs/api';
import { ApiResponse } from '@/types/api';
import { Exercise, ExerciseList } from '@/types/exercise';

export const getExercises = async (): ApiResponse<ExerciseList> => {
  try {
    const response = await api.get(`/exercises`);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getExercise = async (id: number): ApiResponse<Exercise> => {
  try {
    const response = await api.get(`/exercises/${id}`);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
};

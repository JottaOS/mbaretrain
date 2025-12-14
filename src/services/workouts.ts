import { api, handleError } from '@/libs/api';
import { ApiResponse } from '@/types/api';
import { Workout, WorkoutList } from '@/types/workout';

export const getWorkout = async (id: number): ApiResponse<Workout> => {
  try {
    const response = await api.get(`/workouts/${id}`);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getWorkouts = async (): ApiResponse<WorkoutList> => {
  try {
    const response = await api.get(`/workouts`);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
};

export const createWorkout = async (workout: Workout): ApiResponse<Workout> => {
  try {
    const response = await api.post(`/workouts`, workout);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
};

export const updateWorkout = async (workout: Workout): ApiResponse<Workout> => {
  try {
    const response = await api.put(`/workouts/${workout.id}`, workout);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteWorkout = async (id: number): ApiResponse<void> => {
  try {
    const response = await api.delete(`/workouts/${id}`);
    return {
      success: true,
      status: response.status,
      data: undefined
    };
  } catch (error) {
    return handleError(error);
  }
};

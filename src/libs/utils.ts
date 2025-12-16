import { ExerciseType } from '@/types/exercise';
import * as SecureStore from 'expo-secure-store';
import { WorkoutFormValues } from './schemas';

export const saveToStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getFromStore = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export const isPositive = (value: number | undefined): boolean => {
  return value !== undefined && value > 0;
};

export const getExerciseSetFields = (exerciseField: WorkoutFormValues['exercises'][number]) => {
  const { exercise } = exerciseField;

  const hasTime = exercise.type === ExerciseType.CARDIO || exercise.type === ExerciseType.CARDIO_WITH_DISTANCE;
  const hasDistance = exercise.type === ExerciseType.CARDIO_WITH_DISTANCE;
  const hasReps = exercise.type === ExerciseType.WEIGHT || exercise.type === ExerciseType.BODYWEIGHT;
  const hasWeight = exercise.type === ExerciseType.WEIGHT;

  return {
    hasTime,
    hasDistance,
    hasReps,
    hasWeight
  };
};

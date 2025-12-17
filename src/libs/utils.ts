import { ExerciseType } from '@/types/exercise';
import { Workout, WorkoutRequest } from '@/types/workout';
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

export const formatTime = (seconds?: number) => {
  if (seconds === undefined || seconds === null) return '';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const getStatsFormWorkout = (workout: Workout) => {
  const { exercises } = workout;

  const sets = exercises.reduce((acc, exercise) => acc + exercise.details.length, 0);
  const reps = exercises.reduce(
    (acc, exercise) => acc + exercise.details.reduce((acc, detail) => acc + detail.reps, 0),
    0
  );

  const time = exercises.reduce(
    (acc, exercise) => acc + exercise.details.reduce((acc, detail) => acc + detail.durationSeconds, 0),
    0
  );

  const volume = exercises.reduce(
    (acc, exercise) =>
      acc + exercise.details.reduce((acc, detail) => acc + (detail.weight || 1) * (detail.reps || 0), 0),
    0
  );

  return {
    sets,
    reps,
    time,
    volume
  };
};

export const formatWorkoutRequest = (workout: WorkoutFormValues): WorkoutRequest => {
  const stats = getStatsFormWorkout(workout as any);

  return {
    title: workout.title,
    sets: stats.sets,
    volume: stats.volume,
    startedAt: workout.startedAt.toISOString(),
    finishedAt: new Date().toISOString(),
    isTemplate: workout.isTemplate ?? false,
    exercises: workout.exercises.map(exercise => ({
      exerciseId: exercise.exercise.id,
      restSeconds: exercise.restSeconds,
      notes: exercise.notes,
      details: exercise.details.map(detail => ({
        type: detail.type,
        reps: detail.reps,
        weight: detail.weight,
        distanceMeters: detail.distanceMeters,
        durationSeconds: detail.durationSeconds
      }))
    }))
  };
};
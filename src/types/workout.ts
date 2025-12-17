import { ListResponse } from './api';

export type Workout = {
  id: number;
  title: string;
  volume: number;
  sets: number;
  startedAt: string;
  finishedAt: string;
  isTemplate: boolean;
  exercises: WorkoutExercise[];
};

export type WorkoutExercise = {
  exerciseId: number;
  restSeconds: number;
  notes: string;
  details: WorkoutExerciseDetail[];
};

export type WorkoutExerciseDetail = {
  type: SetType;
  reps: number;
  weight: number;
  distanceMeters: number;
  durationSeconds: number;
};

export enum SetType {
  WARMUP = 'WARMUP',
  NORMAL = 'NORMAL',
  FAILURE = 'FAILURE',
  DROP = 'DROP'
}

export type WorkoutList = ListResponse<Workout>;

export type WorkoutRequest = {
  title: string;
  sets: number;
  volume: number;
  startedAt?: string;
  finishedAt?: string;
  isTemplate: boolean;
  exercises: WorkoutExerciseRequest[];
};

export type WorkoutExerciseRequest = {
  exerciseId: number;
  restSeconds?: number;
  notes?: string;
  details: WorkoutExerciseDetailRequest[];
};

export type WorkoutExerciseDetailRequest = {
  type: SetType;
  reps?: number;
  weight?: number;
  distanceMeters?: number;
  durationSeconds?: number;
};

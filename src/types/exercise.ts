import { ListResponse } from './api';

export type Exercise = {
  id: number;
  name: string;
  type: ExerciseType;
  imageUrl: string;
  muscle: Muscle;
};

export enum ExerciseType {
  BODYWEIGHT = 'BODYWEIGHT',
  WEIGHT = 'WEIGHT',
  CARDIO = 'CARDIO',
  CARDIO_WITH_DISTANCE = 'CARDIO_WITH_DISTANCE'
}

export type Muscle = {
  id: number;
  name: string;
};

export type ExerciseList = ListResponse<Exercise>;

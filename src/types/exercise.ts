import { ListResponse } from './api';

export type Exercise = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  muscle: Muscle;
};

export type Muscle = {
  id: number;
  name: string;
};

export type ExerciseList = ListResponse<Exercise>;

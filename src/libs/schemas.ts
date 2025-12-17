import { ExerciseType } from '@/types/exercise';
import { SetType } from '@/types/workout';
import { z } from 'zod';
import { isPositive } from './utils';

const exerciseSchema = z.object({
  id: z.number().int().min(1),
  name: z.string().min(1, 'name cannot be blank').max(255, 'name cannot exceed 255 characters'),
  description: z.string().optional(),
  type: z.enum(ExerciseType)
});

const workoutExerciseDetailSchema = z.object({
  type: z.enum(SetType),
  reps: z.number().int().min(1).optional(),
  weight: z.number().int().min(1).optional(),
  distanceMeters: z.number().min(1).optional(),
  durationSeconds: z.number().int().min(1).optional(),
  isCompleted: z.boolean().default(false)
});

const workoutExerciseSchema = z
  .object({
    exercise: exerciseSchema,
    restSeconds: z.number().int().optional(),
    notes: z.string().optional(),
    details: z.array(workoutExerciseDetailSchema).min(1)
  })
  .superRefine((data, ctx) => {
    // Validate each detail based on exercise type
    data.details.forEach((detail, index) => {
      switch (data.exercise.type) {
        case ExerciseType.BODYWEIGHT:
          if (!isPositive(detail.reps)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Bodyweight exercises require positive reps',
              path: ['details', index, 'reps']
            });
          }
          break;

        case ExerciseType.WEIGHT:
          if (!isPositive(detail.reps)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Weight exercises require positive reps',
              path: ['details', index, 'reps']
            });
          }
          if (!isPositive(detail.weight)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Weight exercises require positive weight',
              path: ['details', index, 'weight']
            });
          }
          break;

        case ExerciseType.CARDIO:
          if (!isPositive(detail.durationSeconds)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Cardio exercises require positive duration',
              path: ['details', index, 'durationSeconds']
            });
          }
          break;

        case ExerciseType.CARDIO_WITH_DISTANCE:
          if (!isPositive(detail.durationSeconds)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Cardio with distance exercises require positive duration',
              path: ['details', index, 'durationSeconds']
            });
          }
          if (!isPositive(detail.distanceMeters)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Cardio with distance exercises require positive distance',
              path: ['details', index, 'distanceMeters']
            });
          }
          break;
      }
    });
  });

export const workoutSchema = z.object({
  isTemplate: z.boolean().default(false),
  exercises: z.array(workoutExerciseSchema)
});

export type WorkoutFormValues = z.infer<typeof workoutSchema>;

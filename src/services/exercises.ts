import { api, handleError } from '@/libs/api';
import { ApiResponse } from '@/types/api';
import { Exercise, ExerciseList, ExerciseType } from '@/types/exercise';

export const getExercises = async (): ApiResponse<ExerciseList> => {
  try {
    // const response = await api.get(`/exercises`);
    const exercises: ExerciseList = {
      content: [
        {
          id: 1,
          name: 'Sentadillas',
          type: ExerciseType.BODYWEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 1,
            name: 'Piernas'
          }
        },
        {
          id: 2,
          name: 'Sentadillas con mancuernas',
          type: ExerciseType.WEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 1,
            name: 'Piernas'
          }
        },
        {
          id: 3,
          name: 'Correr',
          type: ExerciseType.CARDIO_WITH_DISTANCE,
          imageUrl:
            'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 2,
            name: 'Cardio'
          }
        },
        {
          id: 4,
          name: 'Press de banca',
          type: ExerciseType.WEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 3,
            name: 'Pecho'
          }
        },
        {
          id: 5,
          name: 'Flexiones',
          type: ExerciseType.BODYWEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 3,
            name: 'Pecho'
          }
        },
        {
          id: 6,
          name: 'Dominadas',
          type: ExerciseType.BODYWEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 4,
            name: 'Espalda'
          }
        },
        {
          id: 7,
          name: 'Remo con barra',
          type: ExerciseType.WEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 4,
            name: 'Espalda'
          }
        },
        {
          id: 8,
          name: 'Curl de bíceps',
          type: ExerciseType.WEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 5,
            name: 'Brazos'
          }
        },
        {
          id: 9,
          name: 'Fondos en paralelas',
          type: ExerciseType.BODYWEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 5,
            name: 'Brazos'
          }
        },
        {
          id: 10,
          name: 'Plancha',
          type: ExerciseType.BODYWEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 6,
            name: 'Core'
          }
        },
        {
          id: 11,
          name: 'Bicicleta estática',
          type: ExerciseType.CARDIO,
          imageUrl:
            'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 2,
            name: 'Cardio'
          }
        },
        {
          id: 12,
          name: 'Zancadas',
          type: ExerciseType.BODYWEIGHT,
          imageUrl:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 1,
            name: 'Piernas'
          }
        },
        {
          id: 13,
          name: 'Natación',
          type: ExerciseType.CARDIO_WITH_DISTANCE,
          imageUrl:
            'https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          muscle: {
            id: 2,
            name: 'Cardio'
          }
        }
      ]
    };
    return {
      success: true,
      status: 200,
      data: exercises
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

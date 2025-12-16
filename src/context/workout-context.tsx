import { Exercise } from '@/types/exercise';
import { createContext, useContext, useState } from 'react';

type WorkoutContextType = {
  selectedExercises: Exercise[];
  setSelectedExercises: (exercises: Exercise[]) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  return (
    <WorkoutContext.Provider value={{ selectedExercises, setSelectedExercises }}>{children}</WorkoutContext.Provider>
  );
};

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkoutContext debe usarse dentro de WorkoutContextProvider');
  }
  return context;
};

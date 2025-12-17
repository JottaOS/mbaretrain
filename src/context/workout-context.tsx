import { WorkoutFormValues } from '@/libs/schemas';
import { createContext, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

type WorkoutContextType = {
  form: UseFormReturn<WorkoutFormValues>;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const form = useForm<WorkoutFormValues>({
    defaultValues: { startedAt: new Date() },
    mode: 'onSubmit'
  });

  return <WorkoutContext.Provider value={{ form }}>{children}</WorkoutContext.Provider>;
};

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkoutContext debe usarse dentro de WorkoutContextProvider');
  }
  return context;
};

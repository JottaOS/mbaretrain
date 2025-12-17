import { ExerciseCard } from '@/components/exercise-card';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';
import { useWorkoutContext } from '@/context/workout-context';
import { useExercises } from '@/hooks/use-exercises';
import { WorkoutFormValues } from '@/libs/schemas';
import { Exercise } from '@/types/exercise';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExercisesScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<string>('');
  const { data: exercises, isLoading } = useExercises();
  const { form } = useWorkoutContext();
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>(
    // @ts-ignore
    form.getValues('exercises')?.map(ex => ex.exercise) || []
  );

  const handleExercisePress = (exercise: Exercise) => {
    const exercisesCopy = [...selectedExercises];
    const index = exercisesCopy.findIndex(ex => ex.id === exercise.id);
    if (index > -1) {
      exercisesCopy.splice(index, 1);
    } else {
      exercisesCopy.push(exercise);
    }
    setSelectedExercises(exercisesCopy);
  };

  const handleAddExercises = () => {
    const currentlySelectedExercises = form.getValues('exercises') || [];
    const currentIds = currentlySelectedExercises.map(ex => ex.exercise.id);

    const newExercises: WorkoutFormValues['exercises'] = selectedExercises
      .filter(exercise => !currentIds.includes(exercise.id))
      .map(exercise => ({
        exercise,
        restSeconds: undefined,
        notes: undefined,
        details: []
      }));

    const finalExercises = [...currentlySelectedExercises, ...newExercises];
    console.log('[FINAL EXERCISES]', JSON.stringify(finalExercises, null, 2));
    form.setValue('exercises', finalExercises);
    router.push('/(training)');
  };

  const filteredExercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput onChangeText={setFilter} value={filter} placeholder='Buscar ejercicio' />
      <View style={styles.content}>
        <Text style={styles.title}>Ejercicios</Text>
        {isLoading ? (
          <Text>Cargando...</Text>
        ) : (
          <FlatList
            data={filteredExercises}
            renderItem={({ item }) => {
              const isSelected = selectedExercises.findIndex(ex => ex.id === item.id) > -1;

              return <ExerciseCard exercise={item} isSelected={isSelected} onPress={handleExercisePress} />;
            }}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.cardListContainer}
          />
        )}
        {selectedExercises.length > 0 && (
          <Button onPress={() => handleAddExercises()} style={styles.buttonContainer} variant='solid'>
            <Text>Agregar {selectedExercises.length} ejercicios</Text>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 48
  },
  content: {
    position: 'relative'
  },
  title: {
    fontSize: 16,
    marginVertical: 16
  },
  cardListContainer: {
    gap: 8,
    paddingBottom: 156
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 124,
    left: 0,
    right: 0,
    padding: 32,
    boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.1)'
  }
});

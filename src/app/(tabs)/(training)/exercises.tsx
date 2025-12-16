import { ExerciseCard } from '@/components/exercise-card';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';
import { useExercises } from '@/hooks/use-exercises';
import { Exercise } from '@/types/exercise';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExercisesScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<string>('');
  const { data: exercises, isLoading } = useExercises();
  const [selectedExercises, setSelectedExercises] = useState<Set<number>>(new Set());

  const handleExercisePress = (exercise: Exercise) => {
    const newExerciseSet = new Set(selectedExercises);

    if(newExerciseSet.has(exercise.id)) {
      newExerciseSet.delete(exercise.id);
    } else {
      newExerciseSet.add(exercise.id);
    }

    setSelectedExercises(newExerciseSet);
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
              const isSelected = selectedExercises.has(item.id);

              return (
                <ExerciseCard
                  exercise={item}
                  isSelected={isSelected}
                  onPress={handleExercisePress}
                />
              )
            }}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.cardListContainer}
          />
        )}
        {selectedExercises.size > 0 && (
          <Button onPress={() => {}} style={styles.buttonContainer} variant='solid'><Text>Agregar {selectedExercises.size} ejercicios</Text></Button>
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
    bottom: 64,
    left: 0,
    right: 0,
    padding: 32
  }
});

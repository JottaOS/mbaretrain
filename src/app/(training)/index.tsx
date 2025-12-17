import { WorkoutExerciseForm } from '@/components/form/workout-exercise-form';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { WorkoutStats } from '@/components/workout-stats';
import { colors } from '@/constants/colors';
import { useWorkoutContext } from '@/context/workout-context';
import { WorkoutFormValues } from '@/libs/schemas';
import { useRouter } from 'expo-router';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrainingScreen() {
  const router = useRouter();
  const { form } = useWorkoutContext();

  const onSubmit = (data: WorkoutFormValues) => {
    console.log('[onSubmit]', JSON.stringify(data, null, 2));
  };

  const handleCancelWorkout = () => {
    form.reset();
    router.replace('/(tabs)');
  };

  const watchedExercises = form.watch('exercises', []);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <WorkoutStats />
        {!watchedExercises.length ? (
          <View style={styles.emptyStateContainer}>
            <Icon name='triangle-right' size={64} color={colors.inputPlaceholder} />
            <Text style={styles.emptyStateTitle}>Empezar</Text>
            <Text style={styles.emptyStateSubtitle}>Agrega un ejercicio para empezar tu entrenamiento</Text>
          </View>
        ) : (
          <FlatList
            data={watchedExercises}
            renderItem={({ item, index }) => <WorkoutExerciseForm item={item} index={index} />}
            contentContainerStyle={styles.exercisesContainer}
            keyboardDismissMode='on-drag'
            automaticallyAdjustKeyboardInsets
          />
        )}
        <View style={styles.footer}>
          <Button style={styles.button} onPress={() => router.push('/(training)/exercises')}>
            <Text> + Agregar ejercicio</Text>
          </Button>
        </View>
        {watchedExercises.length > 0 && (
          <View style={styles.footerButtonsContainer}>
            <Button style={styles.button} variant='ghost' onPress={handleCancelWorkout}>
              <Text>Descartar</Text>
            </Button>
            <Button
              style={styles.button}
              variant='gradient'
              onPress={form.handleSubmit(onSubmit, e => console.log(JSON.stringify(e, null, 2)))}
            >
              <Text>Finalizar</Text>
            </Button>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24
  },
  exercisesContainer: {
    gap: 16,
    paddingBottom: 6
  },
  emptyStateContainer: {
    marginVertical: 64,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyStateTitle: {
    fontSize: 18,
    marginTop: 16
  },
  emptyStateSubtitle: {
    fontSize: 18,
    color: colors.inputPlaceholder,
    marginTop: 8,
    textAlign: 'center'
  },

  footer: {
    marginVertical: 24
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20
  }
});

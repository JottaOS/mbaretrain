import { WorkoutExerciseForm } from '@/components/form/workout-exercise-form';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useWorkoutContext } from '@/context/workout-context';
import { useElapsedTime } from '@/hooks/use-elapsed-time';
import { WorkoutFormValues } from '@/libs/schemas';
import { useRouter } from 'expo-router';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const startedAt = new Date();

export default function TrainingScreen() {
  const router = useRouter();
  const { elapsedTime } = useElapsedTime({ startedAt });
  const { form } = useWorkoutContext();

  const onSubmit = (data: WorkoutFormValues) => {
    console.log(data);
  };

  const watchedExercises = form.watch('exercises', []);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <Button onPress={() => form.reset()}>
          <Text>Reset form</Text>
        </Button>

        <View style={styles.header}>
          <View>
            <Text style={styles.headerItemLabel}>Duración</Text>
            <Text style={styles.headerItemValue}>{elapsedTime}s</Text>
          </View>
          <View>
            <Text style={styles.headerItemLabel}>Volumen</Text>
            <Text style={styles.headerItemValue}>0 kg</Text>
          </View>
          <View>
            <Text style={styles.headerItemLabel}>Series</Text>
            <Text style={styles.headerItemValue}>0</Text>
          </View>
        </View>

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
            keyExtractor={item => item.exercise.id.toString()}
            contentContainerStyle={styles.exercisesContainer}
            keyboardDismissMode='on-drag'
            automaticallyAdjustKeyboardInsets
          />
        )}
        <View style={styles.footer}>
          <Button style={styles.button} variant='gradient' onPress={() => router.push('/(training)/exercises')}>
            <Text> + Agregar ejercicio</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24
  },
  header: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  headerItemLabel: {
    fontSize: 12,
    color: colors.inputPlaceholder
  },
  headerItemValue: {
    fontSize: 16,
    lineHeight: 24
  },
  footer: {
    marginVertical: 24
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20
  }
});

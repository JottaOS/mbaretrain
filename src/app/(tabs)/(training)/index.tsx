import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useWorkoutContext } from '@/context/workout-context';
import { useElapsedTime } from '@/hooks/use-elapsed-time';
import { WorkoutFormValues } from '@/libs/schemas';
import { useRouter } from 'expo-router';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const startedAt = new Date();

export default function TrainingScreen() {
  const router = useRouter();
  const { elapsedTime } = useElapsedTime({ startedAt });

  const { selectedExercises } = useWorkoutContext();

  const form = useForm<WorkoutFormValues>({
    mode: 'onSubmit'
  });

  const { append: appendExercise, remove: removeExercise } = useFieldArray({
    control: form.control,
    name: 'exercises'
  });

  const onSubmit = (data: WorkoutFormValues) => {
    console.log(data);
  };

  const watchedExercises = form.watch('exercises');
  return (
    <SafeAreaView style={styles.container}>
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

      <FormProvider {...form}>
        <FlatList data={selectedExercises} renderItem={({ item }) => <Text>{item.name}</Text>} />
      </FormProvider>
      <View style={styles.footer}>
        <Button style={styles.button} variant='gradient' onPress={() => router.push('/(tabs)/(training)/exercises')}>
          <Text style={styles.buttonText}>+ Agregar ejercicio</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24
  },
  header: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    marginTop: 24,
    gap: 16
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 18
  }
});

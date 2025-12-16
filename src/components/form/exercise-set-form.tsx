import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useWorkoutContext } from '@/context/workout-context';
import { WorkoutFormValues } from '@/libs/schemas';
import { getExerciseSetFields } from '@/libs/utils';
import { StyleSheet, View } from 'react-native';

interface ExerciseSetFormProps {
  item: WorkoutFormValues['exercises'][number]['details'][number];
  exerciseIndex: number;
  setIndex: number;
}

export const ExerciseSetForm = ({ item, exerciseIndex, setIndex }: ExerciseSetFormProps) => {
  const { form } = useWorkoutContext();

  const exercise = form.getValues(`exercises.${exerciseIndex}`);

  const { hasTime, hasDistance, hasReps, hasWeight } = getExerciseSetFields(exercise);

  return (
    <View>
        <View style={styles.row}>
            <Text style={styles.setNumber}>{setIndex + 1}</Text>
            {hasTime && (
               <Text>{item.durationSeconds}s</Text>
            )}
            {hasDistance && (
                <Text>{item.distanceMeters ? item.distanceMeters / 1000 : 0}</Text>
            )}
            {hasReps && (
                <Text>{item.reps}</Text>
            )}
            {hasWeight && (
                <Text>{item.weight}</Text>
            )}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8
  },
  setNumber: {
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 56,
    marginBottom: 8
  }
});

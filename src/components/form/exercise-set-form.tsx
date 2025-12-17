import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useWorkoutContext } from '@/context/workout-context';
import { WorkoutFormValues } from '@/libs/schemas';
import { getExerciseSetFields } from '@/libs/utils';
import { Checkbox } from 'expo-checkbox';
import { Controller } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { Input } from '../ui/input';
import { TimeInput } from '../ui/time-input';

interface ExerciseSetFormProps {
  item: WorkoutFormValues['exercises'][number]['details'][number];
  exerciseIndex: number;
  setIndex: number;
}

export const ExerciseSetForm = ({ item, exerciseIndex, setIndex }: ExerciseSetFormProps) => {
  const { form } = useWorkoutContext();

  const exercise = form.getValues(`exercises.${exerciseIndex}`);

  const { hasTime, hasDistance, hasReps, hasWeight } = getExerciseSetFields(exercise);

  const isOddIndex = setIndex % 2 === 0;
  return (
    <View style={[styles.row, { backgroundColor: isOddIndex ? colors.backgroundSecondary : colors.background }]}>
      <View style={styles.colSet}>
        <Text style={styles.setNumber}>{setIndex + 1}</Text>
      </View>
      {hasTime && (
        <View style={styles.colValue}>
          <Controller
            name={`exercises.${exerciseIndex}.details.${setIndex}.durationSeconds`}
            control={form.control}
            render={({ field }) => <TimeInput value={field.value} onChange={field.onChange} style={styles.input} />}
          />
        </View>
      )}
      {hasDistance && (
        <View style={styles.colValue}>
          <Controller
            name={`exercises.${exerciseIndex}.details.${setIndex}.distanceMeters`}
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                value={field.value?.toString()}
                onChangeText={field.onChange}
                keyboardType='decimal-pad'
                style={styles.input}
              />
            )}
          />
        </View>
      )}
      {hasReps && (
        <View style={styles.colValue}>
          <Controller
            name={`exercises.${exerciseIndex}.details.${setIndex}.reps`}
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                value={field.value?.toString()}
                onChangeText={field.onChange}
                keyboardType='decimal-pad'
                style={styles.input}
              />
            )}
          />
        </View>
      )}
      {hasWeight && (
        <View style={styles.colValue}>
          <Controller
            name={`exercises.${exerciseIndex}.details.${setIndex}.weight`}
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                value={field.value?.toString()}
                onChangeText={field.onChange}
                keyboardType='decimal-pad'
                style={styles.input}
              />
            )}
          />
        </View>
      )}
      <View style={styles.colSet}>
        <Controller
          name={`exercises.${exerciseIndex}.details.${setIndex}.isCompleted`}
          control={form.control}
          render={({ field }) => <Checkbox {...field} onValueChange={field.onChange} style={styles.checkbox} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setNumber: {
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: colors.stepperInactive,
    paddingVertical: 4,
    paddingHorizontal: 4,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8
  },
  colSet: {
    width: 40,
    alignItems: 'center'
  },
  colValue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4
  },
  checkbox: {
    borderWidth: 1,
    borderColor: colors.stepperInactive,
    borderRadius: 4,
    height: 24,
    width: 24
  }
});

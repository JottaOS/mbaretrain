import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useWorkoutContext } from '@/context/workout-context';
import { WorkoutFormValues } from '@/libs/schemas';
import { getExerciseSetFields } from '@/libs/utils';
import { SetType } from '@/types/workout';
import { useFieldArray } from 'react-hook-form';
import { FlatList, StyleSheet, View } from 'react-native';
import { Input } from '../ui/input';
import { ExerciseSetForm } from './exercise-set-form';

interface WorkoutExerciseFormProps {
  item: WorkoutFormValues['exercises'][number];
  index: number;
}

export const WorkoutExerciseForm = ({ item, index }: WorkoutExerciseFormProps) => {
  const { exercise } = item;
  const { form } = useWorkoutContext();
  const { remove } = useFieldArray({
    control: form.control,
    name: 'exercises'
  });

  const { append: appendDetail } = useFieldArray({
    control: form.control,
    name: `exercises.${index}.details`
  });

  const watchedItems = form.watch(`exercises.${index}.details`, []);

  const { hasTime, hasDistance, hasReps, hasWeight } = getExerciseSetFields(item);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Button variant='ghost' onPress={() => remove(index)}>
          <Icon name='trash' size={18} color={colors.danger} />
        </Button>
      </View>
      <Input
        placeholder='Agrega notas aquí...'
        onChangeText={value => form.setValue(`exercises.${index}.notes`, value)}
        value={item.notes}
        style={styles.notesInput}
      />
      <View>
        <View style={styles.tableHeaders}>
          <View style={styles.colSet}>
            <Text>Serie</Text>
          </View>
          {hasTime && (
            <View style={styles.colValue}>
              <Text>TIEMPO</Text>
            </View>
          )}
          {hasDistance && (
            <View style={styles.colValue}>
              <Text>KM</Text>
            </View>
          )}
          {hasWeight && (
            <View style={styles.colValue}>
              <Text>KG</Text>
            </View>
          )}
          {hasReps && (
            <View style={styles.colValue}>
              <Text>REPS</Text>
            </View>
          )}
          <View style={styles.colSet}>
            <Icon name='check' size={18} color={colors.text} />
          </View>
        </View>
        <FlatList
          data={watchedItems}
          renderItem={({ item, index: setIndex }) => (
            <ExerciseSetForm item={item} exerciseIndex={index} setIndex={setIndex} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <Button
        variant='gradient'
        onPress={() =>
          appendDetail({
            type: SetType.NORMAL,
            isCompleted: false
          })
        }
        style={styles.appendDetailButton}
      >
        <Text>+ Agregar serie</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8
  },

  tableHeaders: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  colSet: {
    width: 40,
    alignItems: 'center'
  },
  colValue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  appendDetailButton: {
    marginTop: 24
  },
  notesInput: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: -8,
    marginBottom: 24
  }
});

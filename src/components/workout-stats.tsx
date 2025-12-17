import { colors } from '@/constants/colors';
import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { useWorkoutContext } from '../context/workout-context';
import { useElapsedTime } from '../hooks/use-elapsed-time';
import { Text } from './ui/text';

export const WorkoutStats = () => {
  const { form } = useWorkoutContext();
  const { elapsedTime } = useElapsedTime({ startedAt: form.getValues('startedAt') });

  const exercises = useWatch({ control: form.control, name: 'exercises' }) || [];

  const volume = useMemo(() => {
    let totalVolume = 0;
    exercises?.forEach(exercise => {
      exercise.details?.forEach(detail => {
        const weight = Number(detail.weight) || 1; 
        const reps = Number(detail.reps) || 0;
        totalVolume += weight * reps;
      });
    });
    return totalVolume;
  }, [exercises]);

  const series = useMemo(() => {
    let totalSeries = 0;
    exercises?.forEach(exercise => {
      totalSeries += exercise.details?.length || 0;
    });
    return totalSeries;
  }, [exercises]);

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerItemLabel}>Duración</Text>
        <Text style={styles.headerItemValue}>{elapsedTime}s</Text>
      </View>
      <View>
        <Text style={styles.headerItemLabel}>Volumen</Text>
        <Text style={styles.headerItemValue}>{volume} kg</Text>
      </View>
      <View>
        <Text style={styles.headerItemLabel}>Series</Text>
        <Text style={styles.headerItemValue}>{series}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

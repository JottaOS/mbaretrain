import { colors } from '@/constants/colors';
import { getStatsFormWorkout } from '@/libs/utils';
import { Workout } from '@/types/workout';
import { StyleSheet, View } from 'react-native';
import { Button } from './ui/button';
import { Icon } from './ui/icon';
import { Text } from './ui/text';

interface RoutineCardProps {
  routine: Workout;
}

export const RoutineCard = ({ routine }: RoutineCardProps) => {
  const stats = getStatsFormWorkout(routine);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{routine.title}</Text>
        <View style={styles.routineStat}>
          <Text style={styles.statText}>{stats.sets} sets</Text>
          <Text style={styles.statText}>{stats.reps} reps</Text>
          <Text style={styles.statText}>{stats.time} minutos</Text>
        </View>
      </View>
      <Button variant='ghost' onPress={() => {}}>
        <Icon name='play' size={28} color={colors.inputPlaceholder} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flex: 1
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: colors.backgroundSecondary
  },
  statText: {
    fontSize: 12,
    color: colors.disabled
  },
  cardTitle: {
    fontSize: 14
  },
  routineStat: {
    marginTop: 4,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center'
  }
});

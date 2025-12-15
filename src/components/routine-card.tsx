import { colors } from '@/constants/colors';
import { Workout } from '@/types/workout';
import { StyleSheet, View } from 'react-native';
import { Button } from './ui/button';
import { Icon } from './ui/icon';
import { Text } from './ui/text';

interface RoutineCardProps {
  routine: Workout | any;
}

export const RoutineCard = ({ routine }: RoutineCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Rutina Tricep sin mancuernas</Text>
        <View style={styles.routineStat}>
          <Text style={styles.statText}>3 sets</Text>
          <Text style={styles.statText}>12 reps</Text>
          <Text style={styles.statText}>15 minutos</Text>
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

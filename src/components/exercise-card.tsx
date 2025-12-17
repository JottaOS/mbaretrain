import { colors } from '@/constants/colors';
import { exerciseType } from '@/constants/translations';
import { Exercise } from '@/types/exercise';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from './ui/text';

interface ExerciseCardProps {
  exercise: Exercise;
  isSelected: boolean;
  onPress: (exercise: Exercise) => void;
}

export const ExerciseCard = ({ exercise, isSelected, onPress }: ExerciseCardProps) => {
  return (
    <Pressable style={[styles.container, isSelected && styles.active]} onPress={() => onPress(exercise)}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.type}>{exerciseType[exercise.type]}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.backgroundSecondary
  },
  active: {
    borderLeftColor: colors.stepperActive,
    borderLeftWidth: 1,
    marginLeft: 16
  },
  title: {
    color: colors.text,
    fontSize: 16
  },
  type: {
    marginTop: 4,
    color: colors.inputPlaceholder,
    fontSize: 14
  }
});

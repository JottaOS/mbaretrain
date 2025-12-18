import { Text } from '@/components/ui/text';
import { WorkoutCard } from '@/components/workout-card';
import { colors } from '@/constants/colors';
import { useWorkouts } from '@/hooks/use-workouts';
import { Workout } from '@/types/workout';
import { useMemo } from 'react';
import { ActivityIndicator, SectionList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WorkoutsScreen() {
  const { data: workouts, isLoading } = useWorkouts({ templatesOnly: false });

  const sections = useMemo(() => {
    if (!workouts) return [];

    const sortedWorkouts = [...workouts].sort(
      (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime()
    );

    const groups: { title: string; data: Workout[] }[] = [];

    sortedWorkouts.forEach(workout => {
      const date = new Date(workout.startedAt);
      const title = date.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      });

      const lastGroup = groups[groups.length - 1];
      if (lastGroup && lastGroup.title === title) {
        lastGroup.data.push(workout);
      } else {
        groups.push({ title, data: [workout] });
      }
    });

    return groups;
  }, [workouts]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        {isLoading ? (
          <ActivityIndicator />
        ) : sections.length > 0 ? (
          <SectionList
            sections={sections}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <WorkoutCard workout={item} displayIcon={false} />}
            renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.emptyStateTitle}>No hay entrenamientos :c</Text>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16
  },
  listContent: {
    paddingBottom: 20
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold', // Assuming this font is available used elsewhere or I can use weighted style
    color: colors.inputPlaceholder,
    marginBottom: 12,
    marginTop: 24,
    textTransform: 'capitalize'
  },
  emptyStateTitle: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center'
  }
});

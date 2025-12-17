import { colors } from '@/constants/colors';
import { useWorkouts } from '@/hooks/use-workouts';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { Button } from './ui/button';
import { Icon } from './ui/icon';
import { SearchInput } from './ui/search-input';
import { Text } from './ui/text';
import { WorkoutCard } from './workout-card';

export const RoutineView = () => {
  const router = useRouter();
  const { data: routines, isLoading } = useWorkouts({ templatesOnly: true });
  const [filter, setFilter] = useState<string>('');

  const filteredRoutines = routines?.filter(routine => routine.title.toLowerCase().includes(filter.toLowerCase()));
  const isEmpty = routines?.length === 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis rutinas</Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : isEmpty ? (
        <View style={styles.emptyStateContainer}>
          <Icon name='apps' size={52} color={colors.tabBarInactive} />
          <Text style={styles.emptyStateText}>¡Aún no tienes rutinas creadas!</Text>
          <Button style={styles.emptyStateButton} variant='outline' onPress={() => router.push('/(training)')}>
            <Icon name='plus' size={16} color={colors.text} />
            <Text style={styles.emptyStateButtonText}>Crear rutina</Text>
          </Button>
        </View>
      ) : (
        <>
          <SearchInput onChangeText={setFilter} value={filter} placeholder='Buscar rutina' />
          <FlatList
            data={filteredRoutines}
            renderItem={({ item }) => <WorkoutCard workout={item} />}
            keyExtractor={(_: any, index: number) => index.toString()}
            contentContainerStyle={styles.cardListContainer}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1
  },
  cardListContainer: {
    gap: 16
  },
  title: {
    fontSize: 20,
    marginBottom: 16
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.backgroundSecondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 16
  },
  input: {
    height: '100%',
    width: '100%',
    borderWidth: 0
  },
  emptyStateContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.tabBarInactive,
    marginTop: 8
  },
  emptyStateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 16,
    marginTop: 24
  },
  emptyStateButtonText: {
    fontSize: 14
  }
});

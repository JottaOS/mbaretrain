import { colors } from '@/constants/colors';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { RoutineCard } from './routine-card';
import { Button } from './ui/button';
import { Icon } from './ui/icon';
import { Text } from './ui/text';

const routines: any[] = Array.from({ length: 5 }, () => ({}));

export const RoutineView = () => {
  const [filter, setFilter] = useState<string>('');

  return (
    <>
      <Text style={styles.title}>Mis rutinas</Text>

      {routines.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Icon name='apps' size={52} color={colors.tabBarInactive} />
          <Text style={styles.emptyStateText}>¡Aún no tienes rutinas creadas!</Text>
          <Button style={styles.emptyStateButton} variant='gradient'>
            <Icon name='plus' size={16} color={colors.text} />
            <Text style={styles.emptyStateButtonText}>Crear rutina</Text>
          </Button>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <Icon name='search' size={20} color={colors.inputPlaceholder} />
            <TextInput
              style={styles.input}
              onChangeText={newText => setFilter(newText)}
              defaultValue={filter}
              placeholder='Buscar rutina'
            />
          </View>
          <FlatList
            data={routines}
            renderItem={({ item }) => <RoutineCard routine={item} />}
            keyExtractor={(_: any, index: number) => index.toString()}
            contentContainerStyle={styles.cardListContainer}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
    width: '100%',
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

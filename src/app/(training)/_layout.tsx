import { Icon } from '@/components/ui/icon';
import { colors } from '@/constants/colors';
import { WorkoutContextProvider } from '@/context/workout-context';
import { router, Stack } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function TrainingLayout() {
  return (
    <WorkoutContextProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.backgroundSecondary
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontSize: 18
          },
          headerTitleAlign: 'center',
          headerBackButtonDisplayMode: 'minimal'
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            headerShown: true,
            title: 'Entrenamiento',
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Icon name='chevron-left' size={24} color={colors.text} />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name='exercises'
          options={{
            headerShown: true,
            title: 'Agregar Ejercicio'
          }}
        />
        <Stack.Screen
          name='save'
          options={{
            headerShown: true,
            title: 'Guardar',
            headerBackVisible: false
          }}
        />
      </Stack>
    </WorkoutContextProvider>
  );
}

const styles = StyleSheet.create({
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  cancelText: {
    color: colors.text,
    fontSize: 16
  }
});

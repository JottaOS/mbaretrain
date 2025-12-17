import { colors } from '@/constants/colors';
import { WorkoutContextProvider } from '@/context/workout-context';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

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
            headerBackVisible: true
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

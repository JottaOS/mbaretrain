import { colors } from '@/constants/colors';
import { WorkoutContextProvider } from '@/context/workout-context';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TrainingLayout() {
  const router = useRouter();

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
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            headerShown: true,
            title: 'Entrenamiento',
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name='exercises'
          options={{
            headerShown: true,
            title: 'Agregar Ejercicio',
            headerBackButtonDisplayMode: 'minimal'
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

import { colors } from '@/constants/colors';
import { Stack, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function TrainingLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable onPress={() => router.back()} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: true,
          title: 'Entrenamiento'
        }} 
      />
      <Stack.Screen 
        name="exercises" 
        options={{ 
          headerShown: true,
          title: 'Agregar Ejercicio'
        }} 
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cancelText: {
    color: colors.text,
    fontSize: 16,
  },
});

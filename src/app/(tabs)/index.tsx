import { RoutineView } from '@/components/routine-view';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.greet}>
        {'¡Hola\n'}
        <Text style={styles.username}>Juan!</Text>
      </Text>
      <Button style={styles.buttonContainer} variant='gradient' onPress={() => router.push('/(training)')}>
        <Text style={styles.buttonText}>Empezar entrenamiento</Text>
      </Button>
      <RoutineView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 48,
    gap: 16
  },
  greet: {
    fontSize: 30,
    color: colors.disabled
  },
  username: {
    fontSize: 48,
    opacity: 1,
    color: colors.text
  },
  buttonContainer: {
    marginVertical: 24,
    paddingVertical: 32,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 20
  }
});

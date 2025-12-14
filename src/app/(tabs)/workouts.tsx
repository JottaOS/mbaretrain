import { NoiseOverlay } from '@/components/noise-overlay';
import { Text } from '@/components/ui/text';
import { View } from '@/components/view';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <NoiseOverlay />
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Entrenamientos</Text>
        <Text style={styles.subtitle}>Tus rutinas personalizadas</Text>
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
    paddingHorizontal: 32,
    paddingVertical: 48,
    gap: 16
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8
  }
});

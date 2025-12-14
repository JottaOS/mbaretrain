import { GradientOverlay } from '@/components/overlay/gradient-overlay';
import { Text } from '@/components/ui/text';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <GradientOverlay />
        <Text style={styles.title}>Inicio</Text>
        <Text style={styles.subtitle}>Bienvenido a mbaretrain</Text>
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

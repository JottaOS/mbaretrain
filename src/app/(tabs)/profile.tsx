import { Text } from '@/components/ui/text';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.subtitle}>Tu información personal</Text>
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

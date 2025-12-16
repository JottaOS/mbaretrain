import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useElapsedTime } from '@/hooks/use-elapsed-time';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const startedAt = new Date();

export default function TrainingScreen() {
  const router = useRouter();
  const { elapsedTime } = useElapsedTime({ startedAt });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerItemLabel}>Duración</Text>
          <Text style={styles.headerItemValue}>{elapsedTime}s</Text>
        </View>
        <View>
          <Text style={styles.headerItemLabel}>Volumen</Text>
          <Text style={styles.headerItemValue}>0 kg</Text>
        </View>
        <View>
          <Text style={styles.headerItemLabel}>Series</Text>
          <Text style={styles.headerItemValue}>0</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button style={styles.button} variant='gradient' onPress={() => router.push('/(tabs)/(training)/exercises')}>
          <Text style={styles.buttonText}>+ Agregar ejercicio</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24
  },
  header: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerItemLabel: {
    fontSize: 12,
    color: colors.inputPlaceholder
  },
  headerItemValue: {
    fontSize: 16,
    lineHeight: 24
  },
  footer: {
    marginTop: 24,
    gap: 16
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 18
  }
});

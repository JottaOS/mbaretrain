import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrainingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrenamiento</Text>
        <Text style={styles.subtitle}>¡Vamos a entrenar!</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.infoText}>
          Selecciona una opción para comenzar
        </Text>
      </View>

      <View style={styles.footer}>
        <Button 
          style={styles.button} 
          variant='gradient'
          onPress={() => router.push('/(tabs)/(training)/exercises')}
        >
          <Text style={styles.buttonText}>Ver Ejercicios</Text>
        </Button>
        
        <Button 
          style={[styles.button, styles.secondaryButton]} 
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: colors.disabled,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
  footer: {
    marginTop: 24,
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
  },
});

import { HeaderWithStepper } from '@/components/header-with-stepper';
import { NoiseOverlay } from '@/components/overlay/noise-overlay';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingThree() {
  const router = useRouter();

  const handleFinish = () => {
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <NoiseOverlay />
      <SafeAreaView style={styles.content}>
        <HeaderWithStepper steps={4} activeStep={4} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Comienza tu transformación</Text>
          <Text style={styles.subtitle}>
            Rastrea tu progreso, mantente motivado y alcanza tus objetivos con nuestra comunidad de apoyo
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={handleFinish}>
            <Text>Comenzar</Text>
          </Button>
          <Button style={styles.secondaryButton} onPress={() => router.back()} variant='ghost'>
            <Text>Atrás</Text>
          </Button>
        </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 48
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 16
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8
  },
  buttonContainer: {
    gap: 12
  },
  button: {
    width: '100%'
  },
  secondaryButton: {
    width: '100%',
    opacity: 0.7
  }
});

import { HeaderWithStepper } from '@/components/header-with-stepper';
import { GradientOverlay } from '@/components/overlay/gradient-overlay';
import { NoiseOverlay } from '@/components/overlay/noise-overlay';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('@/assets/images/login-bg.webp');

export default function LoginScreen() {
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const handleLogin = async (provider: 'GOOGLE' | 'FACEBOOK') => {
    console.log(provider);
    setIsLoggingIn(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoggingIn(false);
    router.push('/(onboarding)/step-1');
  };

  return (
    <View style={styles.wrapper}>
      <Image source={backgroundImage} style={styles.backgroundImage} contentFit='cover' />
      <GradientOverlay />
      <NoiseOverlay />
      <SafeAreaView style={styles.container}>
        <HeaderWithStepper steps={4} activeStep={1} />
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>¡Bienvenido a mbaretrain!</Text>
          <Text style={styles.subtitleText}>Inicia sesión o registrate para comenzar.</Text>
          <Button style={styles.button} onPress={() => handleLogin('GOOGLE')} loading={isLoggingIn}>
            <Ionicons name='logo-google' size={24} color='white' />
            <Text>Continuar con Google</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 48
  },
  backgroundImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6
  },

  contentContainer: {
    justifyContent: 'center',
    marginBottom: 48
  },

  welcomeText: {
    fontSize: 36
  },
  subtitleText: {
    fontSize: 16
  },
  button: {
    marginTop: 24,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 12
  }
});

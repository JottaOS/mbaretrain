import { HeaderWithStepper } from '@/components/header-with-stepper';
import { NoiseOverlay } from '@/components/noise-overlay';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('@/assets/images/login-bg.webp');

export default function LoginScreen() {
  const router = useRouter();
  const bgColor = useThemeColor({}, 'background');

  const handleLogin = (provider: 'GOOGLE' | 'FACEBOOK') => {
    console.log(provider);
    router.push('/(onboarding)/step-1');
  };

  return (
    <View style={styles.wrapper}>
      <Image source={backgroundImage} style={styles.backgroundImage} contentFit='cover' />
      <LinearGradient colors={['#37373700', bgColor]} locations={[0, 1]} style={styles.gradientOverlay} />
      <NoiseOverlay />
      <SafeAreaView style={styles.container}>
        <HeaderWithStepper steps={4} activeStep={1} />
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>¡Bienvenido a mbaretrain!</Text>
          <Text style={styles.subtitleText}>Inicia sesión o registrate para comenzar.</Text>
          <Button style={styles.button} onPress={() => handleLogin('GOOGLE')}>
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
    paddingHorizontal: 32,
    paddingVertical: 48
  },
  backgroundImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6
  },
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%'
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

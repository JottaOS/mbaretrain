import { Stepper } from '@/components/stepper';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = require('@/assets/images/login-bg.webp');

export default function LoginScreen() {
  const bgColor = useThemeColor({}, 'background');

  const handleLogin = (provider: 'GOOGLE' | 'FACEBOOK') => {
    console.log(provider);
  };

  return (
    <View style={styles.wrapper}>
      <Image source={backgroundImage} style={styles.backgroundImage} resizeMode='cover' />
      <LinearGradient
        colors={['transparent', 'transparent', bgColor]}
        locations={[0, 0.2, 1]}
        style={styles.gradientOverlay}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>mbaretrain</Text>
          <Stepper steps={4} activeStep={1} containerStyle={styles.stepperContainer} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>¡Bienvenido a mbaretrain!</Text>
          <Text style={styles.subtitleText}>Inicia sesión o registrate para comenzar.</Text>
          <Button style={styles.button} onPress={() => handleLogin('GOOGLE')}>
            <Icon name='logo-google' size={24} />
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%'
  },
  headerText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
    lineHeight: 14
  },
  contentContainer: {
    justifyContent: 'center',
    marginBottom: 48
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'space-between',
    gap: 6,
    width: 136
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

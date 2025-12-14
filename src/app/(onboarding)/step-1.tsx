import { HeaderWithStepper } from '@/components/header-with-stepper';
import { NoiseOverlay } from '@/components/noise-overlay';
import { RadioButton } from '@/components/radio-button';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/view';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingOne() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleRadioPress = (value: string) => {
    setSelected(value);
  };

  return (
    <View style={styles.container}>
      <NoiseOverlay />
      <SafeAreaView style={styles.content}>
        <HeaderWithStepper steps={4} activeStep={2} />
        <View style={styles.mainContainer}>
          <Text style={styles.titleText}>{'¿Cuál es \n tu género?'}</Text>

          <View style={styles.radioGroup}>
            <RadioButton
              isSelected={selected === 'male'}
              onPress={() => handleRadioPress('male')}
              label='Masculino'
              value='male'
            />
            <RadioButton
              isSelected={selected === 'female'}
              onPress={() => handleRadioPress('female')}
              label='Femenino'
              value='female'
            />
            <RadioButton
              isSelected={selected === 'other'}
              onPress={() => handleRadioPress('other')}
              label='Otro'
              value='other'
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => router.push('/(onboarding)/step-2')} disabled={!selected}>
              <Text>Continuar</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 48
  },
  radioGroup: {
    gap: 16
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 48
  },
  titleText: {
    fontSize: 38
  },
  buttonContainer: {
    gap: 12
  },
  button: {
    width: '100%'
  }
});

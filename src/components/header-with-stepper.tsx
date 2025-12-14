import { StyleSheet } from 'react-native';
import { Stepper } from './stepper';
import { Text } from './ui/text';
import { View } from './view';

interface HeaderWithStepperProps {
  steps: number;
  activeStep: number;
}

export const HeaderWithStepper = ({ steps, activeStep }: HeaderWithStepperProps) => {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerText}>mbaretrain</Text>
      <Stepper steps={steps} activeStep={activeStep} containerStyle={styles.stepperContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxWidth: '80%'
  },
  headerText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
    lineHeight: 14
  },
  stepperContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'space-between',
    gap: 6
  }
});

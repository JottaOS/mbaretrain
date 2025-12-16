import { StyleSheet, View } from 'react-native';
import { Stepper } from './stepper';
import { Text } from './ui/text';

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
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 12
  },
  stepperContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'space-between',
    gap: 6,
    marginBottom: 6
  }
});

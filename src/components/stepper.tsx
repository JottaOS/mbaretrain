import { View } from '@/components/view';
import colors from '@/constants/colors';
import { StyleProp, StyleSheet, useColorScheme, ViewStyle } from 'react-native';

interface StepperProps {
  steps: number;
  activeStep: number;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Stepper = ({ steps, activeStep, containerStyle }: StepperProps) => {
  const theme = useColorScheme();

  if (activeStep > steps || activeStep < 0) {
    throw new Error('Active step is out of bounds');
  }

  const themeColors = theme === 'dark' ? colors.dark : colors.light;
  return (
    <View style={[styles.stepperContainer, containerStyle]}>
      {Array.from({ length: steps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.stepperSegment,
            { backgroundColor: index === activeStep - 1 ? themeColors.stepperActive : themeColors.stepperInactive }
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepperSegment: {
    flex: 1,
    height: 3
  },
  stepperContainer: {
    flexDirection: 'row',
    gap: 6
  }
});

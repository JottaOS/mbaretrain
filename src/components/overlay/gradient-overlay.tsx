import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export const GradientOverlay = ({ opacity = 1 }: { opacity?: number }) => {
  return (
    <LinearGradient
      colors={['#37373700', '#101010']}
      //   colors={['white', colors.background]}
      style={[styles.gradientOverlay, { opacity }]}
    />
  );
};

const styles = StyleSheet.create({
  gradientOverlay: {
    inset: 0,
    position: 'absolute'
  }
});

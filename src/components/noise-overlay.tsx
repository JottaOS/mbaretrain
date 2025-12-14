import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

const noiseTexture = require('@/assets/images/noise.webp');

export const NoiseOverlay = ({ opacity = 0.7 }: { opacity?: number }) => {
  return (
    <View style={styles.noiseContainer}>
      <Image source={noiseTexture} style={[styles.noiseTexture, { opacity }]} contentFit='cover' />
    </View>
  );
};

const styles = StyleSheet.create({
  noiseContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  noiseTexture: {
    width: '100%',
    height: '100%'
  }
});

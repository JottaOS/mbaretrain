import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { ComponentProps, useRef } from 'react';
import { ActivityIndicator, Animated, Pressable, StyleSheet } from 'react-native';

export type ButtonProps = ComponentProps<typeof Pressable> & {
  children: React.ReactNode;
  variant?: 'outline' | 'ghost' | 'gradient' | 'solid';
  loading?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, style, variant = 'outline', loading, ...rest } = props;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true
    }).start();
  };

  return (
    <Pressable {...rest} onPressIn={handlePressIn} onPressOut={handlePressOut} disabled={loading}>
      {({ pressed }) => (
        <Animated.View
          style={[
            styles.container,
            styles[variant],
            { transform: [{ scale: scaleAnim }] },
            pressed && { opacity: 0.85 },
            // @ts-ignore
            typeof style === 'function' ? style({ pressed }) : style
          ]}
        >
          {variant === 'gradient' && (
            <LinearGradient
              colors={['#373737', '#1d1d1dff', '#4C4C4C00']}
              style={styles.linearGradient}
              start={{ x: 1, y: 0.5 }}
              end={{ x: 0, y: 0.5 }}
            />
          )}
          {loading ? <ActivityIndicator /> : children}
        </Animated.View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 46,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
    borderColor: colors.text
  },
  outline: { backgroundColor: 'transparent' },
  ghost: { borderWidth: 0 },
  gradient: { backgroundColor: 'transparent' },
  solid: {
    backgroundColor: colors.backgroundTertiary,
    borderWidth: 0
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

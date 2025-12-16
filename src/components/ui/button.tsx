import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { ComponentProps } from 'react';
import { Pressable, StyleSheet } from 'react-native';

export type ButtonProps = ThemeProps &
  ComponentProps<typeof Pressable> & {
    children: React.ReactNode;
    variant?: 'outline' | 'ghost' | 'gradient' | 'solid';
  };

export const Button = (props: ButtonProps) => {
  const { children, style, variant = 'outline', ...rest } = props;

  return (
    <Pressable
      {...rest}
      style={state => [
        styles.container,
        { borderColor: colors.text },
        styles[variant],
        typeof style === 'function' ? style(state) : style
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
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 46,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden'
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  ghost: {
    borderWidth: 0,
    color: 'white'
  },
  gradient: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  solid: {
    backgroundColor: colors.backgroundTertiary,
    borderWidth: 0,
    color: 'white'
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    top: 0,
    right: 0,
    bottom: 0
  }
});

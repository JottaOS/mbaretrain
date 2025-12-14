import { colors } from '@/constants/colors';
import { ComponentProps } from 'react';
import { Pressable, StyleSheet } from 'react-native';

export type ButtonProps = ThemeProps &
  ComponentProps<typeof Pressable> & {
    children: React.ReactNode;
    variant?: 'outline' | 'ghost';
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
    borderWidth: 1
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  ghost: {
    borderWidth: 0,
    color: 'white'
  }
});

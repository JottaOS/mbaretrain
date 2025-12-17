import { colors } from '@/constants/colors';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {}

export const Input = ({ style, ...props }: InputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={colors.inputPlaceholder}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: colors.text,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 14,
    minWidth: 60,
  }
});

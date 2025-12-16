import { Icon } from '@/components/ui/icon';
import { colors } from '@/constants/colors';
import { TextInput as BaseTextInput, StyleSheet, View } from 'react-native';

interface SearchInputProps {
    onChangeText: (value: string) => void;
    value: string;
    placeholder?: string
}

export const SearchInput = ({ onChangeText, value, placeholder }: SearchInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name='search' size={20} color={colors.inputPlaceholder} />
      <BaseTextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.inputPlaceholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.backgroundSecondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 16
  },
  input: {
    height: '100%',
    width: '100%',
    borderWidth: 0,
    color: colors.text
  }
});

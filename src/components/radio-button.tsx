import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from './ui/button';
import { Text } from './ui/text';

interface RadioButtonProps {
  isSelected: boolean;
  onPress: (value: string) => void;
  label: string;
  value: string;
}

export const RadioButton = ({ isSelected, onPress, label, value }: RadioButtonProps) => {
  return (
    <Button onPress={() => onPress(value)} style={[styles.container, isSelected ? styles.active : styles.inactive]}>
      <Text style={styles.text}>{label}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    borderRadius: 20
  },
  text: {
    fontSize: 20
  },
  inactive: {
    opacity: 0.4
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  }
});

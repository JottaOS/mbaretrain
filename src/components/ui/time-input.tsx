import { formatTime } from '@/libs/utils';
import { useEffect, useState } from 'react';
import { Input, InputProps } from './input';

interface TimeInputProps extends Omit<InputProps, 'value' | 'onChangeText' | 'onChange'> {
  value?: number;
  onChange: (value: number | undefined) => void;
}

export const TimeInput = ({ value, onChange, onBlur, onFocus, ...props }: TimeInputProps) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      setText(formatTime(value));
    }
  }, [value, isFocused]);

  const handleChangeText = (inputText: string) => {
    const cleaned = inputText.replace(/[^0-9:]/g, '');
    setText(cleaned);

    if (!cleaned) {
      onChange(undefined);
      return;
    }

    const parts = cleaned.split(':');
    let totalSeconds: number | undefined;

    if (parts.length === 2) {
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      if (!isNaN(minutes) && !isNaN(seconds)) {
        totalSeconds = minutes * 60 + seconds;
      }
    } else if (parts.length === 1) {
      const val = parseInt(parts[0], 10);
      if (!isNaN(val)) {
        totalSeconds = val;
      }
    }

    if (totalSeconds !== undefined) {
      onChange(totalSeconds);
    }
  };

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    setText(formatTime(value));
    onBlur?.(e);
  };

  return (
    <Input
      {...props}
      value={text}
      onChangeText={handleChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      keyboardType='numbers-and-punctuation'
      placeholder='00:00'
      maxLength={5} 
    />
  );
};

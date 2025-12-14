import { colors } from '@/constants/colors';
import { Octicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

interface IconProps {
  name: ComponentProps<typeof Octicons>['name'];
  size?: number;
  color?: string;
}

export const Icon = ({ name, size, color }: IconProps) => {
  return <Octicons name={name} size={size} color={color || colors.text} />;
};

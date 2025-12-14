import { useThemeColor } from '@/hooks/use-theme-color';
import { Octicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

interface IconProps {
  name: ComponentProps<typeof Octicons>['name'];
  size?: number;
  color?: string;
}

export const Icon = ({ name, size, color }: IconProps) => {
  const textColor = useThemeColor({}, 'text');
  return <Octicons name={name} size={size} color={color || textColor} />;
};

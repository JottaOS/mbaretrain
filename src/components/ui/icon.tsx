import { useThemeColor } from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

interface IconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
}

export const Icon = ({ name, size, color }: IconProps) => {
  const textColor = useThemeColor({}, 'text');
  return <Ionicons name={name} size={size} color={color || textColor} />;
};

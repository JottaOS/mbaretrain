import { colors } from '@/constants/colors';
import { Text as DefaultText } from 'react-native';

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return <DefaultText style={[{ color: colors.text, fontFamily: 'Montserrat' }, style]} {...otherProps} />;
}

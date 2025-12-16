import { colors } from '@/constants/colors';
import { montserrat } from '@/constants/fonts';
import { Text as DefaultText } from 'react-native';

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return <DefaultText style={[{ color: colors.text, fontFamily: montserrat.regular }, style]} {...otherProps} />;
}

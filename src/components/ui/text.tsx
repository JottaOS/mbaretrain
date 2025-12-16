import { colors } from '@/constants/colors';
import { montserrat } from '@/constants/fonts';
import { Text as DefaultText, StyleSheet, TextStyle } from 'react-native';

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const flattenedStyle = StyleSheet.flatten(style) as TextStyle;
  const fontWeight = flattenedStyle?.fontWeight;

  let fontFamily = montserrat.regular;

  if (fontWeight === 'bold' || fontWeight === '700' || fontWeight === '800' || fontWeight === '900') {
    fontFamily = montserrat.bold;
  } else if (fontWeight === '100' || fontWeight === '200' || fontWeight === '300') {
    fontFamily = montserrat.thin;
  }

  const { fontWeight: _, ...styleWithoutFontWeight } = flattenedStyle || {};

  return <DefaultText style={[{ color: colors.text, fontFamily }, styleWithoutFontWeight]} {...otherProps} />;
}

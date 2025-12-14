import { View as DefaultView } from 'react-native';

export type ViewProps = ThemeProps & DefaultView['props'];

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return <DefaultView style={style} {...otherProps} />;
}

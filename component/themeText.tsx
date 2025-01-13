import { Colors } from "@/constant/colors";
import useColors from "@/hooks/usecolors";
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  subtitle1: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold'
  },
  subtitle2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold'
  },
  body1: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'regular'
  },
  body2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'regular'
  },
  body3: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: 'regular'
  },
  caption: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: 'regular'
  }
})

type Props = TextProps & {
  variant?: keyof typeof styles,
  color?: keyof typeof Colors.light
}

export default function ThemeText({ style, variant, color, ...rest }: Props) {
  const colors = useColors()

  return <Text style={[style, styles[variant ?? 'body3'], { color: colors[color ?? 'grayDark'] }]} {...rest}></Text>
}

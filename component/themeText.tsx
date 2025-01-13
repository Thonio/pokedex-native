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
  color?: string
}

export default function ThemeText({ variant, color, ...rest }: Props) {
  return <Text style={styles[variant ?? 'body3']} {...rest}></Text>
}

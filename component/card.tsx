import { Shadow } from "@/constant/shadow";
import useColors from "@/hooks/usecolors";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps

const styles = {
  borderRadius: 8,
  padding: 12,
  ...Shadow.dp2
} satisfies ViewStyle

export default function Card({ style, ...rest }: Props) {
  const color = useColors()

  return (
    <View {...rest} style={[style, styles, { backgroundColor: color.grayWhite }]} />
  )
}

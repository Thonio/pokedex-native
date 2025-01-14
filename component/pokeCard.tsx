import { Image, View, Text, ViewStyle, ViewProps, StyleSheet } from "react-native";
import Card from "./card";
import ThemeText from "./themeText";
import useColors from "@/hooks/usecolors";

type Props = ViewProps & {
  num: number,
  name: string,
  img?: string,
}

const styles = StyleSheet.create({
  card: {
    flex: 1 / 3,
    borderRadius: 8,
    alignItems: 'center',
    position: 'relative',
    zIndex: 0
  },
  text: {
    alignSelf: 'flex-end'
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 7,
    height: 50,
    zIndex: -1
  }
})


export default function PokeCard({ num, img, name, ...rest }: Props) {
  const color = useColors()

  return (
    <Card style={styles.card} {...rest}>
      <ThemeText style={styles.text} variant="caption">#{num.toString().padStart(3, '0')}</ThemeText>
      <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png` }} width={72} height={72} />
      <ThemeText variant="body3">{name}</ThemeText>
      <View style={[styles.shadow, { backgroundColor: color.grayBg }]} />
    </Card>
  )
}

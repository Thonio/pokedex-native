import { Image, View, Text, ViewStyle, ViewProps, StyleSheet, Pressable } from "react-native";
import Card from "./card";
import ThemeText from "./themeText";
import useColors from "@/hooks/usecolors";
import { Link } from "expo-router";

type Props = ViewProps & {
  num: number,
  name: string,
  img?: string,
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1 / 3,
  },
  card: {
    borderRadius: 8,
    position: 'relative',
    alignItems: 'center',
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
    <Link href="/about" asChild>
      <Pressable style={styles.pressable}>
        <Card style={styles.card} {...rest}>
          <ThemeText style={styles.text} variant="caption">#{num.toString().padStart(3, '0')}</ThemeText>
          <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png` }} width={72} height={72} />
          <ThemeText variant="body3">{name}</ThemeText>
          <View style={[styles.shadow, { backgroundColor: color.grayBg }]} />
        </Card>
      </Pressable>
    </Link>
  )
}

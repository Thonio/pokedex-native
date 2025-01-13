import { Image, View, Text, ViewStyle, ViewProps, StyleSheet } from "react-native";
import Card from "./card";
import ThemeText from "./themeText";

type Props = ViewProps & {
  num: number,
  name: string,
  img?: string,
}

const styles = StyleSheet.create({
  card: {
    flex: 1 / 3,
    borderRadius: 8,
    alignItems: 'center'
  },
  text: {
    alignSelf: 'flex-end'
  }
})


export default function PokeCard({ num, img, name, ...rest }: Props) {
  return (
    <Card style={styles.card} {...rest}>
      <ThemeText style={styles.text} variant="caption">#{num.toString().padStart(3, '0')}</ThemeText>
      <Image source={require('@/assets/images/loader.png')} width={72} height={72} />
      <ThemeText variant="body3">{name}</ThemeText>
    </Card>
  )
}

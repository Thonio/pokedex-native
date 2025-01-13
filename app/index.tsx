import Card from "@/component/card";
import PokeCard from "@/component/pokeCard";
import ThemeText from "@/component/themeText";
import useColors from "@/hooks/usecolors";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const style = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    margin: 12
  },
  card: {
    flex: 1
  },
  gridGap: {
    gap: 8
  }
})

export default function Index() {
  const colors = useColors()
  const data = Array.from({ length: 42 }, (_, i) => ({
    name: `Pokemon ${i + 1}`,
    id: i + 1
  }))

  return (
    <SafeAreaView style={[style.container, { backgroundColor: colors.primary }]}>
      <View style={style.header}>
        <Image source={require('@/assets/images/Pokeball.png')} width={24} height={24} />
        <ThemeText variant="headline" color="grayWhite">Pokedex</ThemeText>
      </View>
      <Card style={style.card}>
        <FlatList
          data={data}
          numColumns={3}
          contentContainerStyle={style.gridGap}
          columnWrapperStyle={style.gridGap}
          renderItem={({ item }) => (
            <PokeCard num={item.id} name={item.name} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </SafeAreaView>
  );
}

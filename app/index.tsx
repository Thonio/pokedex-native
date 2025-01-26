import Card from "@/component/card";
import PokeCard from "@/component/pokeCard";
import ThemeText from "@/component/themeText";
import { getIdFn } from "@/function/getIdFn";
import useColors from "@/hooks/usecolors";
import { useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { ActivityIndicator, FlatList, Image, StyleSheet, View } from "react-native";
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

  const { data, isFetching, fetchNextPage } = useInfiniteFetchQuery('/pokemon/?limit=21')
  const listPokemon = data?.pages.flatMap((page: { results: any; }) => page.results) ?? []

  return (
    <SafeAreaView style={[style.container, { backgroundColor: colors.primary }]}>
      <View style={style.header}>
        <Image source={require('@/assets/images/Pokeball.png')} width={24} height={24} />
        <ThemeText variant="headline" color="grayWhite">Pokedex</ThemeText>
      </View>
      <Card style={style.card}>
        <FlatList
          data={listPokemon}
          numColumns={3}
          contentContainerStyle={style.gridGap}
          columnWrapperStyle={style.gridGap}
          renderItem={({ item }) => (
            <PokeCard num={Number(getIdFn(item.url))} name={item.name} />
          )}
          keyExtractor={(item) => getIdFn(item.url)?.toString() || ''}
          ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
          onEndReached={() => fetchNextPage()}
        />
      </Card>
    </SafeAreaView>
  );
}

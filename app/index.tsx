import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#ff0000",
    paddingHorizontal: 25,
    flex: 1
  }
})
export default function Index() {
  return (
    <SafeAreaView style={style.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">A propos test</Link>
    </SafeAreaView>
  );
}

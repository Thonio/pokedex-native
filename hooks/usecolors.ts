import { Colors } from "@/constant/colors";
import { useColorScheme } from "react-native";

export default function useColors() {
  const theme = useColorScheme() || 'light'

  return Colors[theme]
}

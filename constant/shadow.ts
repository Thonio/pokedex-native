import { ViewStyle } from "react-native";

export const Shadow = {
  dp2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
} satisfies Record<string, ViewStyle>

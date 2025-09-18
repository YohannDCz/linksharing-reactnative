import { TextStyle } from "react-native";
import { ColorTokens } from "./base/color";
import { ShadowTokens } from "./base/shadow";

// React Native-friendly typography derived from base tokens
const fontFamily = "Instrument Sans";

export const typography: Record<string, TextStyle> = {
  headingM: { fontFamily, fontWeight: "700", fontSize: 32, lineHeight: 48 }, // 150%
  bodyM: { fontFamily, fontWeight: "400", fontSize: 16, lineHeight: 24 },
  headingS: { fontFamily, fontWeight: "600", fontSize: 16, lineHeight: 24 },
  bodyS: { fontFamily, fontWeight: "400", fontSize: 12, lineHeight: 18 },
};

export const colors = {
  ...ColorTokens,
};

export const shadow = {
  ...ShadowTokens,
};

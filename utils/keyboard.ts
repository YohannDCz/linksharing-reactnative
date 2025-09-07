import { Keyboard, Platform } from "react-native";

export function dismissKeyboard() {
  if (Platform.OS === "web") {
    const active = (globalThis.document?.activeElement ?? null) as HTMLElement | null;
    if (active && typeof active.blur === "function") {
      active.blur();
    }
    return;
  }
  Keyboard.dismiss();
}


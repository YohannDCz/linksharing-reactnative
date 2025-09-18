import TopBar from "@/components/TopBar";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function DashboardLayout() {
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <Slot />
    </View>
  );
}

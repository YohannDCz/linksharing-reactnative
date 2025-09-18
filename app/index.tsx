import { SafeAreaView, View } from "react-native";
import Links from "./dashboard/index";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Links />
      </SafeAreaView>
    </View>
  );
}

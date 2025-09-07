import { View } from "react-native";
import SignUp from "./auth/sign-up";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',

      }}
    >
      <SignUp />
    </View>
  );
}

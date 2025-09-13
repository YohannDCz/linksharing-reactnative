import IconLinksHeader from "@/assets/images/icon-links-header.svg";
import Preview from "@/assets/images/icon-preview-header.svg";
import IconProfileDetailsHeader from "@/assets/images/icon-profile-details-header.svg";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import ButtonsHeader from "@/components/ButtonsHeader";
import { router, Slot, usePathname } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function DashboardLayout() {
  const pathname = usePathname();
  const isLinks = pathname === "/dashboard" || pathname.startsWith("/dashboard/links");
  const isProfile = pathname.startsWith("/dashboard/profile");

  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <View style={styles.topBar}>
        <Logo />
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <ButtonsHeader icon={IconLinksHeader} isSelected={isLinks} onPress={() => router.replace("/dashboard/links")} />
          <ButtonsHeader icon={IconProfileDetailsHeader} isSelected={isProfile} onPress={() => router.replace("/dashboard/profile")} />
        </View>
        <View style={styles.topBarButton}>
          <Preview />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  topBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    backgroundColor: "#fff",
    paddingHorizontal: 32,
  },
  topBarButton: {
    width: 52,
    height: 42,
    backgroundColor: "#fff",
    borderColor: '#633cff',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  topBarLogo: {
    width: 40,
    height: 40,
  },
});
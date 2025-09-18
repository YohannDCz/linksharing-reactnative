import DragAndDrop from "@/assets/images/icon-drag-and-drop.svg";
import { colors, typography } from "@/theme/native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {/* <ActionButton />
          <View style={styles.emptyCard}>
            <View style={styles.illustration} />
            <Text style={styles.emptyTitle}>Let’s get you started</Text>
            <Text style={styles.emptyBody}>
              Use the “Add new link” button to get started. Once you have more than one link, you can
              reorder and edit them. We’re here to help you share your profiles with everyone!
            </Text>
          </View> */}
          <View style={[{ justifyContent: 'space-between' }]}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <DragAndDrop />
                <Text>Link #1</Text>
              </View>
              <Pressable>
                <Text>Remove</Text>
              </Pressable>
            </View>
            <View>
              <Text>Platform</Text>

              <Divider style={styles.divider} />

              <Pressable style={[styles.saveButton, styles.saveButtonDisabled]}>
                <Text style={styles.saveText}>Save</Text>
              </Pressable>

            </View>
          </View>
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorLightGrey,
  },
  wrapper: {
    backgroundColor: colors.colorLightGrey,
    gap: 16,
  },
  card: {
    backgroundColor: colors.colorWhite,
    borderRadius: 12,
    margin: 16,
  },
  emptyCard: {
    marginTop: 24,
    backgroundColor: colors.colorLightGrey,
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    marginHorizontal: 24,
  },
  illustration: {
    width: 160,
    height: 100,
    borderRadius: 12,
    backgroundColor: colors.colorLightPurple,
    marginBottom: 16,
  },
  emptyTitle: {
    ...typography.headingS,
    color: colors.colorDarkGrey,
    marginVertical: 24,
    fontSize: 24,
  },
  emptyBody: {
    ...typography.bodyM,
    color: colors.colorGrey,
    textAlign: "center",

  },
  saveButton: {
    backgroundColor: colors.colorPurple,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
  },
  saveButtonDisabled: {
    backgroundColor: colors.colorLightPurple,
    opacity: 0.5,
  },
  saveText: {
    color: colors.colorWhite,
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    marginTop: 16,
  },
});

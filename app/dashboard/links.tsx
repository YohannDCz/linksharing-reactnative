import { colors, typography } from "@/theme/native";
import React from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export default function Links() {
  return (
    <View style={{ backgroundColor: colors.colorLightGrey }}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={[styles.wrapper, { flex: 1 }]} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>

            <Text style={styles.title}>Customize your links</Text>
            <Text style={styles.subtitle}>
              Add/edit/remove links below and then share all your profiles with the world!
            </Text>

            <Pressable style={styles.addButton} onPress={() => { }}>
              <Text style={styles.addButtonText}>+ Add new link</Text>
            </Pressable>

            <View style={styles.emptyCard}>
              <View style={styles.illustration} />
              <Text style={styles.emptyTitle}>Let’s get you started</Text>
              <Text style={styles.emptyBody}>
                Use the “Add new link” button to get started. Once you have more than one link, you can
                reorder and edit them. We’re here to help you share your profiles with everyone!
              </Text>
            </View>

            <Divider style={styles.divider} />

            <Pressable style={[styles.saveButton, styles.saveButtonDisabled]}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.colorLightGrey,
    gap: 16,
  },
  card: {
    backgroundColor: colors.colorWhite,
    borderRadius: 12,
    margin: 16,
  },
  title: {
    ...typography.headingM,
    margin: 24,
    marginBottom: 4,
    color: colors.colorDarkGrey,
  },
  subtitle: {
    ...typography.bodyM,
    color: colors.colorGrey,
    marginTop: 4,
    marginHorizontal: 24,
  },
  addButton: {
    marginTop: 48,
    height: 46,
    borderWidth: 1,
    borderColor: colors.colorPurple,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
  },
  addButtonText: {
    color: colors.colorPurple,
    fontWeight: "600",
    fontSize: 16,
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
    backgroundColor: "#e9e0ff",
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

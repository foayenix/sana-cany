import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export function PatientTools({ colors, insets }) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Patient Tools
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
          }}
        >
          Quick access to patient management features
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.surface,
          marginHorizontal: 20,
          marginBottom: 16,
          borderRadius: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 2,
        }}
        onPress={() => router.push("/(tabs)/health")}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          View All Patients
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
          }}
        >
          Access complete patient management dashboard
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: colors.surface,
          marginHorizontal: 20,
          marginBottom: 16,
          borderRadius: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 2,
        }}
        onPress={() => router.push("/(tabs)/appointments")}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Today's Schedule
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
          }}
        >
          Manage appointments and patient sessions
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: colors.surface,
          marginHorizontal: 20,
          marginBottom: 16,
          borderRadius: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 2,
        }}
        onPress={() => router.push("/(tabs)/journal")}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Patient Communication
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
          }}
        >
          Messages and session notes
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

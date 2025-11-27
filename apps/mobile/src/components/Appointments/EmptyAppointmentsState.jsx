import React from "react";
import { View, Text } from "react-native";
import { Calendar as CalendarIcon } from "lucide-react-native";

export function EmptyAppointmentsState({ selectedTab, colors }) {
  return (
    <View
      style={{
        alignItems: "center",
        paddingVertical: 60,
        paddingHorizontal: 40,
      }}
    >
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: colors.surfaceVariant,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <CalendarIcon size={32} color={colors.textSecondary} />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        No {selectedTab} appointments
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          textAlign: "center",
          lineHeight: 20,
        }}
      >
        {selectedTab === "upcoming"
          ? "You don't have any upcoming appointments. Book your first appointment with a practitioner."
          : "You haven't had any appointments yet. Start your wellness journey today."}
      </Text>
    </View>
  );
}

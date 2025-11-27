import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function BreakTimeSlot({ colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceVariant,
        marginHorizontal: 20,
        marginBottom: 12,
        borderRadius: 16,
        padding: 16,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: colors.borderLight,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 16 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              marginBottom: 2,
            }}
          >
            12:00 PM
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            2h break
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Lunch Break
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            Available for emergency appointments
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary + "20",
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_500Medium",
              color: colors.primary,
            }}
          >
            Book Emergency
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

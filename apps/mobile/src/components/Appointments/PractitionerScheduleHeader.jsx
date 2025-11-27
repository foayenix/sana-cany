import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";

export function PractitionerScheduleHeader({ viewMode, colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
          }}
        >
          Schedule
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
              }}
            >
              {viewMode === "day"
                ? "Day"
                : viewMode === "week"
                  ? "Week"
                  : "Month"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Plus size={16} color="white" />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: "white",
                marginLeft: 4,
              }}
            >
              Block Time
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          marginTop: 4,
        }}
      >
        Manage your patient appointments
      </Text>
    </View>
  );
}

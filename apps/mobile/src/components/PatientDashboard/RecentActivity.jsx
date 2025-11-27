import React from "react";
import { View, Text } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function RecentActivity({ activities }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Recent Activity
      </Text>

      {activities.map((activity, index) => (
        <View
          key={activity.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            borderBottomWidth: index < activities.length - 1 ? 1 : 0,
            borderBottomColor: colors.borderLight,
          }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: colors.primary,
              marginRight: 12,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
              }}
            >
              {activity.text}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginTop: 2,
              }}
            >
              {activity.time}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

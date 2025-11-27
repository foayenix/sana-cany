import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function TopLevers({ levers }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 16,
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
        Top 3 Improvement Levers
      </Text>

      {levers.map((lever) => (
        <TouchableOpacity
          key={lever.id}
          style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 16,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: `${lever.color}20`,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <lever.icon size={24} color={lever.color} />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter_600SemiBold",
                  color: colors.textPrimary,
                  marginBottom: 4,
                }}
              >
                {lever.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                }}
              >
                {lever.description}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: colors.success,
                borderRadius: 8,
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_600SemiBold",
                  color: "white",
                }}
              >
                {lever.improvement}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

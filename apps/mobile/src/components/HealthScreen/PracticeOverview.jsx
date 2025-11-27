import React from "react";
import { View, Text } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function PracticeOverview({ stats }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 20,
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
          fontSize: 22,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 20,
        }}
      >
        Practice Overview
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "center", width: "48%", marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_600SemiBold",
              color: colors.primary,
            }}
          >
            {stats.totalPatients}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              textAlign: "center",
            }}
          >
            Total Patients
          </Text>
        </View>

        <View style={{ alignItems: "center", width: "48%", marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_600SemiBold",
              color: colors.success,
            }}
          >
            {stats.averageScore}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              textAlign: "center",
            }}
          >
            Avg Health Score
          </Text>
        </View>

        <View style={{ alignItems: "center", width: "48%" }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_600SemiBold",
              color: colors.accent,
            }}
          >
            {stats.improvingPatients}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              textAlign: "center",
            }}
          >
            Improving
          </Text>
        </View>

        <View style={{ alignItems: "center", width: "48%" }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_600SemiBold",
              color: colors.error,
            }}
          >
            {stats.needsAttention}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              textAlign: "center",
            }}
          >
            Needs Attention
          </Text>
        </View>
      </View>
    </View>
  );
}

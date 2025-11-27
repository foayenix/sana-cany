import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TrendingUp } from "lucide-react-native";
import { router } from "expo-router";
import { useAppTheme } from "@/utils/theme";
import { HealthScoreCircle } from "./HealthScoreCircle";

export function HealthScoreSection({ healthScore, wellnessStatus }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        padding: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 8,
        }}
      >
        Your SANA Health Score
      </Text>

      <View
        style={{
          backgroundColor: colors.success,
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 16,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <TrendingUp size={16} color="white" />
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            color: "white",
            marginLeft: 6,
          }}
        >
          {wellnessStatus}
        </Text>
      </View>

      <HealthScoreCircle score={healthScore} />

      <Text
        style={{
          fontSize: 14,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Based on 6 wellness dimensions
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 16,
          marginTop: 16,
        }}
        onPress={() => router.push("/(tabs)/health")}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            color: "white",
          }}
        >
          View Health Graph
        </Text>
      </TouchableOpacity>
    </View>
  );
}

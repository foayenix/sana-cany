import React from "react";
import { View, Text } from "react-native";
import { Clock } from "lucide-react-native";

export function ProductDosage({ dosageRecommendation, colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.primary + "15",
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Clock size={16} color={colors.primary} />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginLeft: 8,
          }}
        >
          Recommended for You
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Inter_500Medium",
          color: colors.textPrimary,
          marginBottom: 8,
        }}
      >
        {dosageRecommendation.personalized}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
        }}
      >
        Standard: {dosageRecommendation.suggested}
      </Text>
    </View>
  );
}

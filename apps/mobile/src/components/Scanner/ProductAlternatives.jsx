import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowRight } from "lucide-react-native";

export function ProductAlternatives({ alternatives, colors }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 12,
        }}
      >
        Better Options for You
      </Text>
      {alternatives.map((alt, index) => (
        <TouchableOpacity
          key={index}
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            padding: 16,
            marginBottom: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
                marginBottom: 2,
              }}
            >
              {alt.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_500Medium",
                color: colors.textSecondary,
                marginBottom: 4,
              }}
            >
              {alt.brand}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
              }}
            >
              {alt.reason}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Inter_600SemiBold",
                color: colors.success,
              }}
            >
              {alt.rating}
            </Text>
            <ArrowRight size={16} color={colors.textSecondary} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

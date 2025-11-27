import React from "react";
import { View, Text } from "react-native";
import { TrendingUp } from "lucide-react-native";

export function ProductRatings({ productData, colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
            }}
          >
            {productData.personalizedRating}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_500Medium",
              color: colors.primary,
            }}
          >
            Your SANA Score
          </Text>
        </View>
        <View
          style={{
            width: 1,
            backgroundColor: colors.borderLight,
            marginHorizontal: 16,
          }}
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Inter_600SemiBold",
              color: colors.textSecondary,
            }}
          >
            {productData.sanaRating}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
            }}
          >
            General Score
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TrendingUp size={14} color={colors.textSecondary} />
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
            marginLeft: 4,
          }}
        >
          Based on {productData.studiesCount.toLocaleString()} studies
        </Text>
      </View>
    </View>
  );
}

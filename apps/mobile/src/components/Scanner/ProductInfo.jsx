import React from "react";
import { View, Text, Image } from "react-native";

export function ProductInfo({ productData, colors, SafetyIcon, safetyColor }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      <Image
        source={{ uri: productData.image }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          marginRight: 16,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginBottom: 4,
          }}
        >
          {productData.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            color: colors.textSecondary,
            marginBottom: 8,
          }}
        >
          {productData.brand}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SafetyIcon size={16} color={safetyColor} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: safetyColor,
              marginLeft: 4,
              textTransform: "capitalize",
            }}
          >
            {productData.safetyLevel}
          </Text>
        </View>
      </View>
    </View>
  );
}

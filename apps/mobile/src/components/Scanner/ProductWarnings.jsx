import React from "react";
import { View, Text } from "react-native";
import { AlertTriangle } from "lucide-react-native";

export function ProductWarnings({ warnings, colors }) {
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
        Important for You
      </Text>
      {warnings.map((warning, index) => (
        <View
          key={index}
          style={{
            backgroundColor:
              warning.level === "high"
                ? colors.error + "20"
                : warning.level === "moderate"
                  ? colors.warning + "20"
                  : colors.info + "20",
            borderRadius: 12,
            padding: 16,
            marginBottom: 8,
            borderLeftWidth: 4,
            borderLeftColor:
              warning.level === "high"
                ? colors.error
                : warning.level === "moderate"
                  ? colors.warning
                  : colors.info,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <AlertTriangle
              size={16}
              color={
                warning.level === "high"
                  ? colors.error
                  : warning.level === "moderate"
                    ? colors.warning
                    : colors.info
              }
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
                marginLeft: 8,
              }}
            >
              {warning.text}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginLeft: 24,
            }}
          >
            {warning.reason}
          </Text>
        </View>
      ))}
    </View>
  );
}

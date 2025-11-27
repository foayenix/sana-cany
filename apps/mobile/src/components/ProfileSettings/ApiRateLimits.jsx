import React from "react";
import { View, Text } from "react-native";

export function ApiRateLimits({ rateLimits, usage, colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: colors.textPrimary,
          marginBottom: 8,
        }}
      >
        Rate Limits
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text style={{ fontSize: 12, color: colors.textSecondary }}>
          Requests: {rateLimits.requests} {rateLimits.period}
        </Text>
        <Text style={{ fontSize: 12, color: colors.textSecondary }}>
          Burst: {rateLimits.burst} req/min
        </Text>
      </View>

      <View style={{ marginTop: 8 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Current Usage
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: colors.primary,
            }}
          >
            {usage.current.toLocaleString()} / {usage.limit.toLocaleString()}
          </Text>
        </View>

        <View
          style={{
            height: 4,
            backgroundColor: colors.borderLight,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${(usage.current / usage.limit) * 100}%`,
              height: "100%",
              backgroundColor: colors.primary,
            }}
          />
        </View>
      </View>
    </View>
  );
}

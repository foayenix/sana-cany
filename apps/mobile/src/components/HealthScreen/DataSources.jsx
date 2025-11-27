import React from "react";
import { View, Text } from "react-native";
import { CheckCircle, Clock } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function DataSources({ sources }) {
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
        Data Sources
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {sources.map((source) => (
          <View
            key={source.id}
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              padding: 12,
              width: "48%",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <source.icon size={20} color={colors.textPrimary} />
              {source.status === "synced" && (
                <CheckCircle
                  size={16}
                  color={colors.success}
                  style={{ marginLeft: 4 }}
                />
              )}
              {source.status === "pending" && (
                <Clock
                  size={16}
                  color={colors.warning}
                  style={{ marginLeft: 4 }}
                />
              )}
            </View>

            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
                textAlign: "center",
                marginBottom: 4,
              }}
            >
              {source.name}
            </Text>

            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                textAlign: "center",
              }}
            >
              {source.lastSync}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

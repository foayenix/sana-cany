import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { analyticsTools } from "@/utils/practiceToolsData";

export function AnalyticsTools({ colors, insets }) {
  const tools = analyticsTools(colors);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Analytics Dashboard
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
          }}
        >
          Practice insights and performance metrics
        </Text>
      </View>

      {tools.map((tool) => (
        <TouchableOpacity
          key={tool.id}
          style={{
            backgroundColor: colors.surface,
            marginHorizontal: 20,
            marginBottom: 16,
            borderRadius: 16,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: `${tool.color}20`,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <tool.icon size={24} color={tool.color} />
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
                {tool.name}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                }}
              >
                {tool.description}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              padding: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_500Medium",
                  color: colors.textSecondary,
                }}
              >
                Last Updated
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_600SemiBold",
                  color: colors.textPrimary,
                }}
              >
                {tool.lastUpdated}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: colors.info + "20",
                borderRadius: 8,
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_500Medium",
                  color: colors.info,
                }}
              >
                {tool.insights}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

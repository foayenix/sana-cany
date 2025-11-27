import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { documentTools } from "@/utils/practiceToolsData";

export function DocumentTools({ colors, insets }) {
  const tools = documentTools(colors);

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
          Document Management
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
          }}
        >
          Templates and documentation tools
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
              marginBottom: 16,
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
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_500Medium",
                  color: colors.textSecondary,
                }}
              >
                Templates Available
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter_600SemiBold",
                  color: colors.primary,
                }}
              >
                {tool.templates}
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                }}
              >
                {tool.recent}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

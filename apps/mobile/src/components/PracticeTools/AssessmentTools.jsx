import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { assessmentTools } from "@/utils/practiceToolsData";

export function AssessmentTools({ colors, insets }) {
  const tools = assessmentTools(colors);

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
          Assessment Tools
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
          }}
        >
          Standardized tools for patient evaluation
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
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
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
                  marginBottom: 12,
                }}
              >
                {tool.description}
              </Text>

              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                <View
                  style={{
                    backgroundColor: colors.primary + "20",
                    borderRadius: 12,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Inter_500Medium",
                      color: colors.primary,
                    }}
                  >
                    {tool.duration}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: colors.accent + "20",
                    borderRadius: 12,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Inter_500Medium",
                      color: colors.accent,
                    }}
                  >
                    {tool.category}
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                  marginTop: 8,
                  fontStyle: "italic",
                }}
              >
                Best used: {tool.usage}
              </Text>
            </View>

            <ChevronRight size={20} color={colors.textSecondary} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

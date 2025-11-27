import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function Timeline({ events }) {
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
        Health Journey Timeline
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 20,
        }}
        style={{ flexGrow: 0 }}
      >
        {events.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              padding: 16,
              width: 200,
              marginRight: 12,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_500Medium",
                color: colors.textSecondary,
                marginBottom: 8,
              }}
            >
              {event.date}
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
                marginBottom: 8,
              }}
            >
              {event.event}
            </Text>

            <View
              style={{
                backgroundColor:
                  event.type === "positive" ? colors.success : colors.error,
                borderRadius: 8,
                paddingHorizontal: 8,
                paddingVertical: 4,
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_600SemiBold",
                  color: "white",
                }}
              >
                {event.impact}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

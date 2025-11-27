import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function JournalEntry({ entry }) {
  const { colors } = useAppTheme();

  const getMoodColor = (mood) => {
    return mood?.color || colors.textSecondary;
  };

  return (
    <TouchableOpacity
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
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
              marginBottom: 4,
            }}
          >
            {entry.date}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            {entry.time}
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: `${getMoodColor(entry.mood)}20`,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Text style={{ fontSize: 16 }}>{entry.mood.emoji}</Text>
          </View>
          <Text
            style={{
              fontSize: 28,
              marginTop: 4,
            }}
          >
            {entry.persona.avatar}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontFamily: "Inter_400Regular",
          color: colors.textPrimary,
          lineHeight: 24,
          marginBottom: 16,
        }}
      >
        {entry.preview}
      </Text>

      {entry.aiResponse && (
        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text style={{ fontSize: 20, marginRight: 8 }}>
              {entry.persona.avatar}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              {entry.persona.name}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              lineHeight: 20,
            }}
          >
            {entry.aiResponse}
          </Text>
        </View>
      )}

      {entry.tags && entry.tags.length > 0 && (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {entry.tags.map((tag, index) => (
            <View
              key={index}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                marginRight: 8,
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_500Medium",
                  color: "white",
                }}
              >
                #{tag}
              </Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
}

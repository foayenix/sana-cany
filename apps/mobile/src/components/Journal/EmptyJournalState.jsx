import React from "react";
import { View, Text } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function EmptyJournalState() {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
        paddingTop: 80,
      }}
    >
      <Text
        style={{
          fontSize: 64,
          marginBottom: 20,
        }}
      >
        📝
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Start Your Journey
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          textAlign: "center",
          lineHeight: 24,
        }}
      >
        Reflect on your thoughts and receive personalized insights from AI
        companions
      </Text>
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { Moon, Footprints, Smile } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function TodaysSummary({ metrics }) {
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
          marginBottom: 8,
        }}
      >
        Today's Focus
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          marginBottom: 20,
        }}
      >
        Your energy levels show improvement
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Moon size={24} color={colors.sleep} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
              marginTop: 8,
            }}
          >
            {metrics.sleep}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginTop: 2,
            }}
          >
            Sleep
          </Text>
        </View>

        <View style={{ alignItems: "center", flex: 1 }}>
          <Footprints size={24} color={colors.physical} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
              marginTop: 8,
            }}
          >
            {metrics.steps}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginTop: 2,
            }}
          >
            Steps
          </Text>
        </View>

        <View style={{ alignItems: "center", flex: 1 }}>
          <Smile size={24} color={colors.emotional} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
              marginTop: 8,
            }}
          >
            Good
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginTop: 2,
            }}
          >
            Mood
          </Text>
        </View>
      </View>
    </View>
  );
}

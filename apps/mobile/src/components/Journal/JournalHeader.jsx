import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Search, Filter } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function JournalHeader() {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
          }}
        >
          AI Journal
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.surfaceVariant,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <Search size={20} color={colors.textPrimary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.surfaceVariant,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Filter size={20} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          marginTop: 4,
        }}
      >
        Reflect with AI-powered insights
      </Text>
    </View>
  );
}

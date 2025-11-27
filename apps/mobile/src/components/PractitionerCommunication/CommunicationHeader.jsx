import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Search, Plus } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function CommunicationHeader() {
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
          Communication
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
              backgroundColor: colors.primary,
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Plus size={16} color="white" />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: "white",
                marginLeft: 6,
              }}
            >
              New Note
            </Text>
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
        Patient messages and session notes
      </Text>
    </View>
  );
}

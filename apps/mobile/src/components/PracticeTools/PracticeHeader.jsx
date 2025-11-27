import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Search } from "lucide-react-native";

export function PracticeHeader({ colors, insets }) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        paddingHorizontal: 20,
        paddingTop: insets.top + 16,
        paddingBottom: 16,
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
        <View>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
            }}
          >
            Practice Tools
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginTop: 4,
            }}
          >
            Assessments, analytics, and documentation
          </Text>
        </View>

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
          <Search size={16} color="white" />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: "white",
              marginLeft: 6,
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

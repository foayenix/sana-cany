import React from "react";
import { View, Text } from "react-native";

export function ResearchInterests({ interests, colors }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: colors.textSecondary,
          marginBottom: 8,
        }}
      >
        Research Interests
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {interests.map((interest, index) => (
          <View
            key={index}
            style={{
              backgroundColor: `${colors.primary}20`,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: colors.primary,
              }}
            >
              {interest}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

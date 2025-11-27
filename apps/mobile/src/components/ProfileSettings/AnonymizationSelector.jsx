import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function AnonymizationSelector({
  selectedLevel,
  colors,
  onSelectLevel,
}) {
  const levels = ["Minimal", "Standard", "Enhanced"];

  return (
    <View style={{ marginVertical: 16 }}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: colors.textSecondary,
          marginBottom: 8,
        }}
      >
        Anonymization Level
      </Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level}
            style={{
              backgroundColor:
                selectedLevel === level ? colors.success : colors.background,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
              borderWidth: 1,
              borderColor:
                selectedLevel === level ? colors.success : colors.border,
            }}
            onPress={() => onSelectLevel(level)}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: selectedLevel === level ? "white" : colors.textPrimary,
              }}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

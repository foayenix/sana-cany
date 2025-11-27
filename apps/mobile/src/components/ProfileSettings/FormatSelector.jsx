import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function FormatSelector({ selectedFormat, colors, onSelectFormat }) {
  const formats = ["CSV", "JSON", "SPSS", "Stata"];

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
        Default Format
      </Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {formats.map((format) => (
          <TouchableOpacity
            key={format}
            style={{
              backgroundColor:
                selectedFormat === format ? colors.primary : colors.background,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
              borderWidth: 1,
              borderColor:
                selectedFormat === format ? colors.primary : colors.border,
            }}
            onPress={() => onSelectFormat(format)}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: selectedFormat === format ? "white" : colors.textPrimary,
              }}
            >
              {format}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

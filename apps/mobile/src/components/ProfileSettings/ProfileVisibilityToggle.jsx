import React from "react";
import { View, Text, Switch } from "react-native";

export function ProfileVisibilityToggle({ profileVisible, colors, onToggle }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: colors.textPrimary,
            marginBottom: 2,
          }}
        >
          Public Profile
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
          }}
        >
          Make your profile visible to other researchers
        </Text>
      </View>

      <Switch
        value={profileVisible}
        onValueChange={onToggle}
        trackColor={{
          false: colors.borderLight,
          true: `${colors.primary}40`,
        }}
        thumbColor={profileVisible ? colors.primary : colors.textSecondary}
      />
    </View>
  );
}

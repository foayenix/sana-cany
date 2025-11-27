import React from "react";
import { View, Text, Switch } from "react-native";

export function NotificationItem({
  option,
  value,
  colors,
  onToggle,
  isLast,
  disabled,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: isLast ? 0 : 1,
        borderBottomColor: colors.borderLight,
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
          {option.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
            lineHeight: 16,
          }}
        >
          {option.description}
        </Text>
      </View>

      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{
          false: colors.borderLight,
          true: `${colors.primary}40`,
        }}
        thumbColor={value ? colors.primary : colors.textSecondary}
        disabled={disabled}
      />
    </View>
  );
}

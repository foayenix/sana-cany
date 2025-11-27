import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { ChevronRight } from "lucide-react-native";

export function SettingsSection({ title, items, colors }) {
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
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        {title}
      </Text>

      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            borderBottomWidth: index < items.length - 1 ? 1 : 0,
            borderBottomColor: colors.borderLight,
          }}
          onPress={item.onPress}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: `${item.color || colors.primary}20`,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <item.icon size={16} color={item.color || colors.primary} />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: colors.textPrimary,
              }}
            >
              {item.title}
            </Text>
            {item.subtitle && (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: colors.textSecondary,
                  marginTop: 2,
                }}
              >
                {item.subtitle}
              </Text>
            )}
          </View>

          {item.showSwitch ? (
            <Switch
              value={item.switchValue}
              onValueChange={item.onSwitchChange}
              trackColor={{
                false: colors.borderLight,
                true: colors.primary + "40",
              }}
              thumbColor={
                item.switchValue ? colors.primary : colors.textSecondary
              }
            />
          ) : item.showBadge ? (
            <View
              style={{
                backgroundColor: colors.success,
                borderRadius: 8,
                paddingHorizontal: 6,
                paddingVertical: 2,
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                ACTIVE
              </Text>
            </View>
          ) : (
            <ChevronRight size={20} color={colors.textSecondary} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { NotificationItem } from "./NotificationItem";
import { useAppTheme, setDarkMode } from "@/utils/theme";

const notificationOptions = [
  {
    key: "datasetApproved",
    title: "Dataset Approved",
    description: "When your dataset requests are approved",
  },
  {
    key: "newDatasets",
    title: "New Datasets Available",
    description: "Weekly digest of newly published datasets",
  },
  {
    key: "collaborationRequests",
    title: "Collaboration Requests",
    description: "When other researchers invite you to collaborate",
  },
  {
    key: "publicationAlerts",
    title: "Publication Alerts",
    description: "When datasets you've used are cited in new publications",
  },
  {
    key: "systemUpdates",
    title: "System Updates",
    description: "Platform updates and new features",
  },
  {
    key: "securityAlerts",
    title: "Security Alerts",
    description: "Important security notifications (cannot be disabled)",
  },
];

export function NotificationsSection({
  notifications,
  colors,
  onUpdateNotifications,
}) {
  const { isDark } = useAppTheme();

  // Handle dark mode toggle
  const handleDarkModeToggle = async (value) => {
    await setDarkMode(value);
  };

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Preferences
      </Text>

      {/* Dark Mode Toggle - First Item */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: colors.borderLight,
          marginBottom: 8,
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
            Dark Mode
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              lineHeight: 16,
            }}
          >
            Switch between light and dark theme
          </Text>
        </View>

        <Switch
          value={isDark}
          onValueChange={handleDarkModeToggle}
          trackColor={{
            false: colors.borderLight,
            true: `${colors.primary}40`,
          }}
          thumbColor={isDark ? colors.primary : colors.textSecondary}
        />
      </View>

      {/* Notification Preferences Section */}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 12,
          marginTop: 8,
        }}
      >
        Notifications
      </Text>

      {notificationOptions.map((option, index) => (
        <NotificationItem
          key={option.key}
          option={option}
          value={notifications[option.key]}
          colors={colors}
          onToggle={(value) =>
            onUpdateNotifications({ ...notifications, [option.key]: value })
          }
          isLast={index === notificationOptions.length - 1}
          disabled={option.key === "securityAlerts"}
        />
      ))}
    </View>
  );
}

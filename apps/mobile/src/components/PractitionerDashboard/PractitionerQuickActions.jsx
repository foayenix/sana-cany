import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Users,
  Calendar,
  MessageCircle,
  BarChart3,
  Send,
} from "lucide-react-native";
import { router } from "expo-router";
import { useAppTheme } from "@/utils/theme";

export function PractitionerQuickActions() {
  const { colors } = useAppTheme();

  const actions = [
    {
      title: "Patient List",
      icon: Users,
      color: colors.primary,
      route: "/(tabs)/health",
    },
    {
      title: "Schedule",
      icon: Calendar,
      color: colors.secondary,
      route: "/(tabs)/appointments",
    },
    {
      title: "Messages",
      icon: MessageCircle,
      color: colors.accent,
      route: "/(tabs)/journal",
    },
    {
      title: "Patient Referrals",
      icon: Send,
      color: colors.success,
      route: "/practitioner-referrals",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      color: colors.warning,
      route: "/(tabs)/health",
    },
  ];

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 16,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Quick Actions
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: colors.surface,
              borderRadius: 16,
              padding: 20,
              width: index < 4 ? "48%" : "100%", // Make analytics full width if it's the 5th item
              alignItems: "center",
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
            onPress={() => router.push(action.route)}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: `${action.color}20`,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <action.icon size={24} color={action.color} />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
                textAlign: "center",
              }}
            >
              {action.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

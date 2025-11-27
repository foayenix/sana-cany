import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { QrCode, Stethoscope, Calendar, BookOpen } from "lucide-react-native";
import { router } from "expo-router";
import { useAppTheme } from "@/utils/theme";

export function QuickActions() {
  const { colors } = useAppTheme();

  const quickActions = [
    { id: 1, title: "Scan Product", icon: QrCode, color: colors.accent },
    { id: 2, title: "Log Symptoms", icon: Stethoscope, color: colors.physical },
    {
      id: 3,
      title: "Book Appointment",
      icon: Calendar,
      color: colors.secondary,
    },
    { id: 4, title: "Journal Entry", icon: BookOpen, color: colors.mental },
  ];

  const handleActionPress = (action) => {
    if (action.title === "Scan Product") {
      router.push("/(tabs)/scanner");
    } else if (action.title === "Journal Entry") {
      router.push("/(tabs)/journal");
    } else if (action.title === "Book Appointment") {
      router.push("/(tabs)/appointments");
    }
  };

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
        {quickActions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={{
              backgroundColor: colors.surface,
              borderRadius: 16,
              padding: 20,
              width: "48%",
              alignItems: "center",
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
            onPress={() => handleActionPress(action)}
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

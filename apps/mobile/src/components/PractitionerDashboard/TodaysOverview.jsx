import React from "react";
import { View, Text } from "react-native";
import { Calendar, Stethoscope, Clock, AlertCircle } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function TodaysOverview({ stats }) {
  const { colors } = useAppTheme();

  const statItems = [
    {
      icon: Calendar,
      value: stats.appointments,
      label: "Appointments",
      color: colors.primary,
    },
    {
      icon: Stethoscope,
      value: stats.completedSessions,
      label: "Completed Sessions",
      color: colors.success,
    },
    {
      icon: Clock,
      value: stats.pendingReviews,
      label: "Pending Reviews",
      color: colors.warning,
    },
    {
      icon: AlertCircle,
      value: stats.urgentPatients,
      label: "Urgent Patients",
      color: colors.error,
    },
  ];

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 20,
        }}
      >
        Today's Overview
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {statItems.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: "center",
              width: "48%",
              marginBottom: index < 2 ? 20 : 0,
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: item.color + "20",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <item.icon size={24} color={item.color} />
            </View>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              {item.value}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                textAlign: "center",
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

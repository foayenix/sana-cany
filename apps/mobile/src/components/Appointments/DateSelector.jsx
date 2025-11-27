import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

export function DateSelector({ scheduleStats, colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 20,
            padding: 8,
          }}
        >
          <ChevronLeft size={20} color={colors.textPrimary} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
          }}
        >
          Today, November 25
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 20,
            padding: 8,
          }}
        >
          <ChevronRight size={20} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Inter_600SemiBold",
              color: colors.primary,
            }}
          >
            {scheduleStats.todaysAppointments}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            Appointments
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Inter_600SemiBold",
              color: colors.success,
            }}
          >
            {scheduleStats.completed}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            Completed
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Inter_600SemiBold",
              color: colors.warning,
            }}
          >
            {scheduleStats.remaining}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            Remaining
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Inter_600SemiBold",
              color: colors.accent,
            }}
          >
            {scheduleStats.totalDuration}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            Total Time
          </Text>
        </View>
      </View>
    </View>
  );
}

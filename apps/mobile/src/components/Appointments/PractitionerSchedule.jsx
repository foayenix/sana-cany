import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import { todaysAppointments, scheduleStats } from "@/utils/appointmentsData";
import { PractitionerScheduleHeader } from "./PractitionerScheduleHeader";
import { DateSelector } from "./DateSelector";
import { PractitionerAppointmentCard } from "./PractitionerAppointmentCard";
import { BreakTimeSlot } from "./BreakTimeSlot";

export function PractitionerSchedule() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("day");

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top }}>
        <PractitionerScheduleHeader viewMode={viewMode} colors={colors} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <DateSelector scheduleStats={scheduleStats} colors={colors} />

        <View style={{ marginTop: 16 }}>
          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
                marginBottom: 8,
              }}
            >
              Today's Schedule
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
              }}
            >
              {todaysAppointments.length} appointments scheduled
            </Text>
          </View>

          {todaysAppointments.map((appointment) => (
            <PractitionerAppointmentCard
              key={appointment.id}
              appointment={appointment}
              colors={colors}
            />
          ))}

          <BreakTimeSlot colors={colors} />
        </View>
      </ScrollView>
    </View>
  );
}

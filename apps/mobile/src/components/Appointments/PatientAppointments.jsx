import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import {
  upcomingAppointments,
  pastAppointments,
} from "@/utils/appointmentsData";
import { PatientAppointmentsHeader } from "./PatientAppointmentsHeader";
import { AppointmentTabSelector } from "./AppointmentTabSelector";
import { PatientAppointmentCard } from "./PatientAppointmentCard";
import { EmptyAppointmentsState } from "./EmptyAppointmentsState";

export function PatientAppointments() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const getCurrentAppointments = () => {
    switch (selectedTab) {
      case "upcoming":
        return upcomingAppointments;
      case "past":
        return pastAppointments;
      default:
        return upcomingAppointments;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top }}>
        <PatientAppointmentsHeader colors={colors} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <AppointmentTabSelector
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          upcomingCount={upcomingAppointments.length}
          pastCount={pastAppointments.length}
          colors={colors}
        />

        <View style={{ marginTop: 16 }}>
          {getCurrentAppointments().length > 0 ? (
            getCurrentAppointments().map((appointment) => (
              <PatientAppointmentCard
                key={appointment.id}
                appointment={appointment}
                selectedTab={selectedTab}
                colors={colors}
              />
            ))
          ) : (
            <EmptyAppointmentsState selectedTab={selectedTab} colors={colors} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

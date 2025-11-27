import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { useProfileStore } from "@/utils/profileStore";
import { PatientAppointments } from "@/components/Appointments/PatientAppointments";
import { PractitionerSchedule } from "@/components/Appointments/PractitionerSchedule";
import { PublicationsScreen } from "@/components/Researcher/PublicationsScreen";

export default function AppointmentsScreen() {
  const { currentProfile } = useProfileStore();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Show researcher publications if in researcher mode
  if (currentProfile === "researcher") {
    return <PublicationsScreen />;
  }

  // Show practitioner appointment schedule if in practitioner mode
  if (currentProfile === "practitioner") {
    return <PractitionerSchedule />;
  }

  // Show patient appointments (default)
  return <PatientAppointments />;
}

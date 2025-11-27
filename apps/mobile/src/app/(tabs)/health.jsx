import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { useProfileStore } from "@/utils/profileStore";
import { PatientHealthDashboard } from "@/components/HealthScreen/PatientHealthDashboard";
import { PatientManagementScreen } from "@/components/HealthScreen/PatientManagementScreen";
import { DatasetExplorer } from "@/components/HealthScreen/DatasetExplorer";

export default function HealthScreen() {
  const { currentProfile } = useProfileStore();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Show dataset explorer if in researcher mode
  if (currentProfile === "researcher") {
    return <DatasetExplorer />;
  }

  // Show practitioner patient management if in practitioner mode
  if (currentProfile === "practitioner") {
    return <PatientManagementScreen />;
  }

  // Show patient health dashboard (current implementation)
  return <PatientHealthDashboard />;
}

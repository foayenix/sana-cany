import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useProfileStore } from "@/utils/profileStore";
import { LifestylePatientDashboard } from "@/components/PatientDashboard/LifestylePatientDashboard";
import { PractitionerDashboard } from "@/components/PractitionerDashboard/PractitionerDashboard";
import { ResearcherDashboard } from "@/components/ResearcherDashboard/ResearcherDashboard";

export default function HomeScreen() {
  const { currentProfile } = useProfileStore();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Show researcher dashboard if in researcher mode
  if (currentProfile === "researcher") {
    return <ResearcherDashboard />;
  }

  // Show practitioner dashboard if in practitioner mode
  if (currentProfile === "practitioner") {
    return <PractitionerDashboard />;
  }

  // Show new lifestyle patient dashboard
  return <LifestylePatientDashboard />;
}

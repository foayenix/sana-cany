import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { PatientProductScanner } from "@/components/Scanner/PatientProductScanner";
import { ResearcherQueriesScreen } from "@/components/Researcher/ResearcherQueriesScreen";
import { useProfileStore } from "@/utils/profileStore";

export default function ScannerScreen() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const { currentProfile } = useProfileStore();

  if (!fontsLoaded) {
    return null;
  }

  // Show different content based on user profile
  if (currentProfile === "researcher") {
    return <ResearcherQueriesScreen />;
  }

  // Default to product scanner for patients and practitioners
  return <PatientProductScanner />;
}

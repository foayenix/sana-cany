import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { useProfileStore } from "@/utils/profileStore";
import { PatientJournal } from "@/components/Journal/PatientJournal";
import { PractitionerCommunicationHub } from "@/components/PractitionerCommunication/PractitionerCommunicationHub";
import { ResearchScreen } from "@/components/Researcher/ResearchScreen";

export default function JournalScreen() {
  const { currentProfile } = useProfileStore();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Show researcher research projects if in researcher mode
  if (currentProfile === "researcher") {
    return <ResearchScreen />;
  }

  // Show practitioner communication if in practitioner mode
  if (currentProfile === "practitioner") {
    return <PractitionerCommunicationHub />;
  }

  // Show patient journal (default)
  return <PatientJournal />;
}

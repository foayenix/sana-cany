import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { useProfileStore } from "@/utils/profileStore";
import { PractitionerPracticeTools } from "@/components/PracticeTools/PractitionerPracticeTools";
import { ResearcherTools } from "@/components/Researcher/ResearcherTools";

export default function PracticeToolsScreen() {
  const { currentProfile } = useProfileStore();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Show researcher tools if in researcher mode
  if (currentProfile === "researcher") {
    return <ResearcherTools />;
  }

  // Show practitioner tools (default for practitioners and any other profile that has access to this tab)
  return <PractitionerPracticeTools />;
}

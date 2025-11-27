import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import { useProfileStore } from "@/utils/profileStore";
import { useRouter } from "expo-router";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import { PractitionerQuickActions } from "@/components/Profile/PractitionerQuickActions";
import { PatientHealthInfo } from "@/components/Profile/PatientHealthInfo";
import { PractitionerInfo } from "@/components/Profile/PractitionerInfo";
import { ResearcherInfo } from "@/components/Profile/ResearcherInfo";
import { ConnectedDevices } from "@/components/Profile/ConnectedDevices";
import { SettingsSection } from "@/components/Profile/SettingsSection";
import { LogoutButton } from "@/components/Profile/LogoutButton";
import { healthInfo, connectedDevices } from "@/utils/profileData";
import { handleDeviceConnect, handleLogout } from "@/utils/profileHandlers";
import {
  getDataPrivacyItems,
  getPreferencesItems,
  getSupportItems,
  getProfileSwitchItems,
} from "@/utils/profileSettingsItems";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();
  const {
    currentProfile,
    setCurrentProfile,
    patientData,
    practitionerData,
    researcherData,
  } = useProfileStore();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(isDark);

  const handleEditProfile = () => {
    router.push("/profile-settings");
  };

  const getProfileData = () => {
    switch (currentProfile) {
      case "practitioner":
        return practitionerData;
      case "researcher":
        return researcherData;
      default:
        return patientData;
    }
  };

  const renderHealthInfo = () => {
    if (currentProfile === "researcher") {
      return (
        <ResearcherInfo
          researcherData={researcherData}
          colors={colors}
          onNavigate={router.push}
        />
      );
    }

    if (currentProfile === "practitioner") {
      return (
        <PractitionerInfo practitionerData={practitionerData} colors={colors} />
      );
    }

    return <PatientHealthInfo healthInfo={healthInfo} colors={colors} />;
  };

  const profileData = getProfileData();
  const dataPrivacyItems = getDataPrivacyItems();
  const preferencesItems = getPreferencesItems(
    isDark,
    notificationsEnabled,
    setNotificationsEnabled,
    darkModeEnabled,
    setDarkModeEnabled,
  );
  const supportItems = getSupportItems();
  const profileSwitchItems = getProfileSwitchItems(
    currentProfile,
    colors,
    setCurrentProfile,
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top + 16 }}>
        <View style={{ paddingHorizontal: 20, marginBottom: 4 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: colors.textPrimary,
            }}
          >
            Profile
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader
          profileData={profileData}
          currentProfile={currentProfile}
          practitionerData={practitionerData}
          researcherData={researcherData}
          colors={colors}
          onEditProfile={handleEditProfile}
        />

        {currentProfile === "practitioner" && (
          <PractitionerQuickActions colors={colors} onNavigate={router.push} />
        )}

        {renderHealthInfo()}

        <ConnectedDevices
          devices={connectedDevices}
          colors={colors}
          onDeviceConnect={handleDeviceConnect}
        />

        <SettingsSection
          title="Profile Access"
          items={profileSwitchItems}
          colors={colors}
        />

        <SettingsSection
          title="Data & Privacy"
          items={dataPrivacyItems}
          colors={colors}
        />

        <SettingsSection
          title="Preferences"
          items={preferencesItems}
          colors={colors}
        />

        <SettingsSection title="Support" items={supportItems} colors={colors} />

        <LogoutButton colors={colors} onLogout={handleLogout} />

        <View style={{ alignItems: "center", marginTop: 24, marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: colors.textSecondary,
            }}
          >
            SANA App Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

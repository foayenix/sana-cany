import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft, Settings } from "lucide-react-native";
import { useAppTheme, setDarkMode } from "@/utils/theme";
import { useRouter } from "expo-router";
import { SectionTabs } from "@/components/ProfileSettings/SectionTabs";
import { ProfileSection } from "@/components/ProfileSettings/ProfileSection";
import { InstitutionSection } from "@/components/ProfileSettings/InstitutionSection";
import { NotificationsSection } from "@/components/ProfileSettings/NotificationsSection";
import { ApiSection } from "@/components/ProfileSettings/ApiSection";
import { ExportSection } from "@/components/ProfileSettings/ExportSection";
import {
  sections,
  initialProfileData,
  initialNotifications,
  apiData,
  initialExportPrefs,
  institutionalData,
} from "@/utils/profileSettingsData";
import {
  handleSaveProfile,
  handleCopyApiKey,
  handleRegenerateApiKey,
} from "@/utils/profileSettingsHandlers";

export default function ProfileSettingsPage() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("profile");
  const [showApiKey, setShowApiKey] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState(initialProfileData);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [exportPrefs, setExportPrefs] = useState(initialExportPrefs);

  const [darkModeEnabled, setDarkModeEnabled] = useState(isDark);

  useEffect(() => {
    setDarkModeEnabled(isDark);
  }, [isDark]);

  const handleDarkModeToggle = (value) => {
    setDarkModeEnabled(value);
    setDarkMode(value);
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      handleSaveProfile(setIsEditing);
    } else {
      setIsEditing(true);
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <ProfileSection
            profileData={profileData}
            colors={colors}
            isEditing={isEditing}
            onToggleEdit={handleToggleEdit}
            onUpdateProfile={setProfileData}
            onSaveProfile={() => handleSaveProfile(setIsEditing)}
          />
        );
      case "institution":
        return (
          <InstitutionSection
            institutionalData={institutionalData}
            colors={colors}
          />
        );
      case "notifications":
        return (
          <NotificationsSection
            notifications={notifications}
            colors={colors}
            onUpdateNotifications={setNotifications}
          />
        );
      case "api":
        return (
          <ApiSection
            apiData={apiData}
            showApiKey={showApiKey}
            colors={colors}
            onToggleVisibility={() => setShowApiKey(!showApiKey)}
            onCopyApiKey={() => handleCopyApiKey(apiData.key)}
            onRegenerateApiKey={handleRegenerateApiKey}
          />
        );
      case "export":
        return (
          <ExportSection
            exportPrefs={exportPrefs}
            colors={colors}
            onUpdateExportPrefs={setExportPrefs}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.textPrimary} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: colors.textPrimary,
              flex: 1,
              marginLeft: 16,
            }}
          >
            Profile & Settings
          </Text>

          <TouchableOpacity>
            <Settings size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Section Tabs */}
      <SectionTabs
        sections={sections}
        activeSection={activeSection}
        colors={colors}
        onSelectSection={setActiveSection}
      />

      {/* Section Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {renderSectionContent()}
      </ScrollView>
    </View>
  );
}

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { ProfileHeader } from "./ProfileHeader";
import { ContactInformation } from "./ContactInformation";
import { ResearchInterests } from "./ResearchInterests";
import { ProfileVisibilityToggle } from "./ProfileVisibilityToggle";

export function ProfileSection({
  profileData,
  colors,
  isEditing,
  onToggleEdit,
  onUpdateProfile,
  onSaveProfile,
}) {
  return (
    <View>
      <ProfileHeader
        profileData={profileData}
        colors={colors}
        isEditing={isEditing}
        onToggleEdit={onToggleEdit}
      />

      <ContactInformation
        profileData={profileData}
        colors={colors}
        isEditing={isEditing}
        onUpdateProfile={onUpdateProfile}
      />

      <View
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          marginBottom: 20,
        }}
      >
        <ResearchInterests
          interests={profileData.researchInterests}
          colors={colors}
        />

        <ProfileVisibilityToggle
          profileVisible={profileData.profileVisible}
          colors={colors}
          onToggle={(value) =>
            onUpdateProfile({ ...profileData, profileVisible: value })
          }
        />
      </View>

      {isEditing && (
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: 12,
            paddingVertical: 16,
            alignItems: "center",
          }}
          onPress={onSaveProfile}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "white",
            }}
          >
            Save Changes
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

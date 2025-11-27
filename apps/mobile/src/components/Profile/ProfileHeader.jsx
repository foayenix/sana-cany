import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Edit3 } from "lucide-react-native";

export function ProfileHeader({
  profileData,
  currentProfile,
  practitionerData,
  researcherData,
  colors,
  onEditProfile,
}) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        padding: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: profileData.profilePhoto }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 16,
          }}
        />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 4,
          }}
        >
          {profileData.name}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: colors.textSecondary,
            marginBottom: 8,
          }}
        >
          {profileData.email}
        </Text>

        {currentProfile === "practitioner" && (
          <View
            style={{
              backgroundColor: colors.primary + "20",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: colors.primary,
              }}
            >
              {practitionerData.specialty}
            </Text>
          </View>
        )}

        {currentProfile === "researcher" && (
          <View
            style={{
              backgroundColor: colors.accent + "20",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: colors.accent,
              }}
            >
              {researcherData.accessLevel}
            </Text>
          </View>
        )}

        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: colors.textSecondary,
          }}
        >
          Member since {profileData.memberSince}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          borderRadius: 16,
          paddingHorizontal: 20,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={onEditProfile}
      >
        <Edit3 size={16} color="white" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "white",
            marginLeft: 8,
          }}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckCircle, Save, Edit3 } from "lucide-react-native";

export function ProfileHeader({
  profileData,
  colors,
  isEditing,
  onToggleEdit,
}) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: colors.primary,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            color: "white",
          }}
        >
          SC
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 4,
          }}
        >
          {profileData.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: colors.textSecondary,
              marginRight: 8,
            }}
          >
            ORCID: {profileData.orcid}
          </Text>
          <CheckCircle size={16} color={colors.success} />
        </View>

        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
            textAlign: "center",
          }}
        >
          {profileData.institution}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: 24,
          paddingVertical: 8,
          borderRadius: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={onToggleEdit}
      >
        {isEditing ? (
          <Save size={16} color="white" />
        ) : (
          <Edit3 size={16} color="white" />
        )}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "white",
            marginLeft: 6,
          }}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

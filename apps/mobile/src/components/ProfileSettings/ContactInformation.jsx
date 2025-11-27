import React from "react";
import { View, Text, TextInput } from "react-native";
import { Mail, Phone } from "lucide-react-native";

export function ContactInformation({
  profileData,
  colors,
  isEditing,
  onUpdateProfile,
}) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Contact Information
      </Text>

      {/* Email */}
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: colors.textSecondary,
            marginBottom: 4,
          }}
        >
          Email Address
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}
        >
          <Mail size={16} color={colors.textSecondary} />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 8,
              fontSize: 14,
              color: colors.textPrimary,
            }}
            value={profileData.email}
            editable={isEditing}
            onChangeText={(text) =>
              onUpdateProfile({ ...profileData, email: text })
            }
          />
        </View>
      </View>

      {/* Phone */}
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: colors.textSecondary,
            marginBottom: 4,
          }}
        >
          Phone Number
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}
        >
          <Phone size={16} color={colors.textSecondary} />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 8,
              fontSize: 14,
              color: colors.textPrimary,
            }}
            value={profileData.phone}
            editable={isEditing}
            onChangeText={(text) =>
              onUpdateProfile({ ...profileData, phone: text })
            }
          />
        </View>
      </View>

      {/* Bio */}
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: colors.textSecondary,
            marginBottom: 4,
          }}
        >
          Biography
        </Text>
        <TextInput
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12,
            fontSize: 14,
            color: colors.textPrimary,
            minHeight: 80,
            textAlignVertical: "top",
          }}
          value={profileData.bio}
          editable={isEditing}
          multiline
          onChangeText={(text) =>
            onUpdateProfile({ ...profileData, bio: text })
          }
        />
      </View>
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckCircle, Edit3 } from "lucide-react-native";

export function InstitutionSection({ institutionalData, colors }) {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: colors.textPrimary,
              flex: 1,
            }}
          >
            Institutional Affiliation
          </Text>

          {institutionalData.verified && (
            <View
              style={{
                backgroundColor: `${colors.success}20`,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircle size={14} color={colors.success} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: colors.success,
                  marginLeft: 4,
                }}
              >
                Verified
              </Text>
            </View>
          )}
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Institution
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
            }}
          >
            {institutionalData.name}
          </Text>
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Department
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
            }}
          >
            {institutionalData.department}
          </Text>
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Role
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
            }}
          >
            {institutionalData.role}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 16,
            borderTopWidth: 1,
            borderTopColor: colors.borderLight,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginBottom: 4,
              }}
            >
              Access Tier
            </Text>
            <View
              style={{
                backgroundColor: `${colors.warning}20`,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: colors.warning,
                }}
              >
                {institutionalData.accessTier}
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginBottom: 4,
              }}
            >
              Member Since
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: colors.textPrimary,
              }}
            >
              {new Date(institutionalData.since).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.background,
          borderRadius: 12,
          padding: 16,
          borderWidth: 1,
          borderColor: colors.border,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Edit3 size={16} color={colors.textPrimary} />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: colors.textPrimary,
            marginLeft: 8,
          }}
        >
          Update Affiliation
        </Text>
      </TouchableOpacity>
    </View>
  );
}

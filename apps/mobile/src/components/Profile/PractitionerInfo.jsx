import React from "react";
import { View, Text } from "react-native";

export function PractitionerInfo({ practitionerData, colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Practitioner Information
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          License Number
        </Text>
        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            padding: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: colors.textPrimary,
            }}
          >
            {practitionerData.license}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Active Patients
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "600",
            color: colors.primary,
          }}
        >
          47
        </Text>
      </View>
    </View>
  );
}

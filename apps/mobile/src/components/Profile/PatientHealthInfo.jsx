import React from "react";
import { View, Text } from "react-native";

export function PatientHealthInfo({ healthInfo, colors }) {
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
        Health Information
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
          Current Medications
        </Text>
        {healthInfo.medications.map((medication, index) => (
          <View
            key={index}
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 8,
              padding: 8,
              marginBottom: 4,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: colors.textPrimary,
              }}
            >
              {medication}
            </Text>
          </View>
        ))}
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
          Allergies
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {healthInfo.allergies.map((allergy, index) => (
            <View
              key={index}
              style={{
                backgroundColor: colors.error + "20",
                borderRadius: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                marginRight: 8,
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: colors.error,
                }}
              >
                {allergy}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Health Goals
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {healthInfo.healthGoals.map((goal, index) => (
            <View
              key={index}
              style={{
                backgroundColor: colors.primary + "20",
                borderRadius: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                marginRight: 8,
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: colors.primary,
                }}
              >
                {goal}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

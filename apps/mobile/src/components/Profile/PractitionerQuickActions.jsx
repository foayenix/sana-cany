import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Send, UserPlus, Calendar } from "lucide-react-native";

export function PractitionerQuickActions({ colors, onNavigate }) {
  const practitionerActions = [
    {
      id: "referrals",
      title: "Patient Referrals",
      description: "Refer patients to specialists",
      icon: Send,
      color: colors.primary,
      action: () => onNavigate("/practitioner-referrals"),
    },
    {
      id: "new-patient",
      title: "Add Patient",
      description: "Add new patient to practice",
      icon: UserPlus,
      color: colors.secondary,
      action: () => console.log("Add Patient"),
    },
    {
      id: "schedule",
      title: "Schedule",
      description: "View appointment calendar",
      icon: Calendar,
      color: colors.accent,
      action: () => console.log("Schedule"),
    },
  ];

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
        Quick Actions
      </Text>

      <View style={{ flexDirection: "row", gap: 12 }}>
        {practitionerActions.map((action) => {
          const Icon = action.icon;
          return (
            <TouchableOpacity
              key={action.id}
              style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 12,
                padding: 12,
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.border,
              }}
              onPress={action.action}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: `${action.color}20`,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 6,
                }}
              >
                <Icon size={16} color={action.color} />
              </View>

              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "600",
                  color: colors.textPrimary,
                  marginBottom: 2,
                  textAlign: "center",
                }}
              >
                {action.title}
              </Text>

              <Text
                style={{
                  fontSize: 9,
                  color: colors.textSecondary,
                  textAlign: "center",
                  lineHeight: 11,
                }}
              >
                {action.description}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

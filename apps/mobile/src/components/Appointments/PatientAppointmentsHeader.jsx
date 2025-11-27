import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";

export function PatientAppointmentsHeader({ colors }) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
          }}
        >
          Appointments
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Plus size={16} color="white" />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: "white",
              marginLeft: 4,
            }}
          >
            Book New
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          marginTop: 4,
        }}
      >
        Manage your health appointments
      </Text>
    </View>
  );
}

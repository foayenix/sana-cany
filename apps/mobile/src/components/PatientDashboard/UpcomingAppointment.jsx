import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function UpcomingAppointment() {
  const { colors } = useAppTheme();

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
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Next Appointment
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=60&h=60&fit=crop&crop=face",
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 16,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
            }}
          >
            Dr. Maya Chen
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginTop: 2,
            }}
          >
            Acupuncturist
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.primary,
              marginTop: 4,
            }}
          >
            Tomorrow, 2:00 PM
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textPrimary,
            }}
          >
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

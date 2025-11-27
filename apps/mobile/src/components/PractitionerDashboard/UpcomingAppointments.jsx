import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { useAppTheme } from "@/utils/theme";

export function UpcomingAppointments({ appointments }) {
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
          }}
        >
          Next Appointments
        </Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/appointments")}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.primary,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>

      {appointments.map((appointment, index) => (
        <TouchableOpacity
          key={appointment.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            borderBottomWidth: index < appointments.length - 1 ? 1 : 0,
            borderBottomColor: colors.borderLight,
          }}
        >
          <Image
            source={{ uri: appointment.profilePhoto }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 12,
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
              {appointment.patientName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginTop: 2,
              }}
            >
              {appointment.type}
            </Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: colors.primary,
              }}
            >
              {appointment.time}
            </Text>
            <View
              style={{
                backgroundColor:
                  appointment.status === "confirmed"
                    ? colors.success + "20"
                    : colors.warning + "20",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 8,
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Inter_500Medium",
                  color:
                    appointment.status === "confirmed"
                      ? colors.success
                      : colors.warning,
                  textTransform: "uppercase",
                }}
              >
                {appointment.status}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

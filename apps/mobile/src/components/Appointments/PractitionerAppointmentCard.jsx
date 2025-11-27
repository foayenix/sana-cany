import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPin, Phone, MessageCircle, Edit3 } from "lucide-react-native";

export function PractitionerAppointmentCard({ appointment, colors }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return colors.success;
      case "pending":
        return colors.warning;
      case "completed":
        return colors.info;
      case "cancelled":
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <TouchableOpacity
      key={appointment.id}
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginBottom: 12,
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        borderLeftWidth: appointment.priority === "high" ? 4 : 0,
        borderLeftColor: colors.error,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 16 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              color: colors.primary,
              marginBottom: 2,
            }}
          >
            {appointment.time}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            {appointment.duration}
          </Text>
        </View>

        <Image
          source={{ uri: appointment.patient.photo }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 12,
          }}
        />

        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              {appointment.patient.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginLeft: 8,
              }}
            >
              ({appointment.patient.age})
            </Text>
            {appointment.isNew && (
              <View
                style={{
                  backgroundColor: colors.accent + "20",
                  borderRadius: 8,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Inter_600SemiBold",
                    color: colors.accent,
                  }}
                >
                  NEW
                </Text>
              </View>
            )}
          </View>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              marginBottom: 2,
            }}
          >
            {appointment.type}
          </Text>

          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            {appointment.patient.condition}
          </Text>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
          >
            <MapPin size={12} color={colors.textSecondary} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginLeft: 4,
              }}
            >
              {appointment.location}
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: `${getStatusColor(appointment.status)}20`,
              borderRadius: 8,
              paddingHorizontal: 6,
              paddingVertical: 2,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Inter_500Medium",
                color: getStatusColor(appointment.status),
                textTransform: "uppercase",
              }}
            >
              {appointment.status}
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 4 }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary + "20",
                borderRadius: 12,
                padding: 6,
              }}
            >
              <Phone size={14} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary + "20",
                borderRadius: 12,
                padding: 6,
              }}
            >
              <MessageCircle size={14} color={colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.surfaceVariant,
                borderRadius: 12,
                padding: 6,
              }}
            >
              <Edit3 size={14} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {appointment.notes && (
        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            padding: 8,
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              fontStyle: "italic",
            }}
          >
            {appointment.notes}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  CalendarIcon,
  Clock,
  MapPin,
  Video,
  MessageCircle,
  Star,
  Edit3,
  Plus,
} from "lucide-react-native";

export function PatientAppointmentCard({ appointment, selectedTab, colors }) {
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
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}
      >
        <Image
          source={{ uri: appointment.practitioner.photo }}
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
              marginBottom: 2,
            }}
          >
            {appointment.practitioner.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            {appointment.practitioner.specialty}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Star size={12} color={colors.warning} fill={colors.warning} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginLeft: 4,
              }}
            >
              {appointment.practitioner.rating}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: `${getStatusColor(appointment.status)}20`,
            borderRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 4,
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
      </View>

      <View
        style={{
          backgroundColor: colors.surfaceVariant,
          borderRadius: 12,
          padding: 12,
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          {appointment.type}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <CalendarIcon size={14} color={colors.textSecondary} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textPrimary,
              marginLeft: 8,
            }}
          >
            {appointment.date}
          </Text>
          <Clock
            size={14}
            color={colors.textSecondary}
            style={{ marginLeft: 16 }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textPrimary,
              marginLeft: 8,
            }}
          >
            {appointment.time} ({appointment.duration})
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {appointment.isVirtual ? (
            <Video size={14} color={colors.primary} />
          ) : (
            <MapPin size={14} color={colors.textSecondary} />
          )}
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginLeft: 8,
              flex: 1,
            }}
          >
            {appointment.isVirtual
              ? "Virtual Appointment"
              : appointment.address}
          </Text>
        </View>
      </View>

      {appointment.notes && (
        <View
          style={{
            backgroundColor: colors.surfaceVariant + "80",
            borderRadius: 8,
            padding: 8,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              fontStyle: "italic",
            }}
          >
            {appointment.notes}
          </Text>
        </View>
      )}

      <View style={{ flexDirection: "row", gap: 8 }}>
        {selectedTab === "upcoming" && (
          <>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: colors.primary + "20",
                borderRadius: 12,
                paddingVertical: 8,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MessageCircle size={14} color={colors.primary} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_500Medium",
                  color: colors.primary,
                  marginLeft: 4,
                }}
              >
                Message
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: colors.surfaceVariant,
                borderRadius: 12,
                paddingVertical: 8,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Edit3 size={14} color={colors.textPrimary} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_500Medium",
                  color: colors.textPrimary,
                  marginLeft: 4,
                }}
              >
                Reschedule
              </Text>
            </TouchableOpacity>
          </>
        )}
        {selectedTab === "past" && (
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: colors.primary + "20",
              borderRadius: 12,
              paddingVertical: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Plus size={14} color={colors.primary} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_500Medium",
                color: colors.primary,
                marginLeft: 4,
              }}
            >
              Book Again
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

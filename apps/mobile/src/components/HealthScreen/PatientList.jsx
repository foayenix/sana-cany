import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  TrendingUp,
  Star,
  Activity,
  TrendingDown,
  MoreVertical,
  Phone,
  MessageCircle,
  Calendar,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function PatientList({ patients }) {
  const { colors } = useAppTheme();

  const getStatusColor = (status) => {
    switch (status) {
      case "improving":
        return colors.success;
      case "thriving":
        return colors.primary;
      case "stable":
        return colors.warning;
      case "declining":
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "improving":
        return TrendingUp;
      case "thriving":
        return Star;
      case "stable":
        return Activity;
      case "declining":
        return TrendingDown;
      default:
        return Activity;
    }
  };

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 16,
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
        Patient List
      </Text>

      {patients.map((patient) => {
        const StatusIcon = getStatusIcon(patient.status);
        return (
          <TouchableOpacity
            key={patient.id}
            style={{
              backgroundColor: colors.surface,
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
              borderLeftWidth: patient.priority === "high" ? 4 : 0,
              borderLeftColor: colors.error,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: patient.profilePhoto }}
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
                    {patient.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_400Regular",
                      color: colors.textSecondary,
                      marginLeft: 8,
                    }}
                  >
                    ({patient.age})
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <StatusIcon
                    size={14}
                    color={getStatusColor(patient.status)}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_500Medium",
                      color: getStatusColor(patient.status),
                      marginLeft: 4,
                      marginRight: 12,
                    }}
                  >
                    {patient.status}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Inter_600SemiBold",
                      color: colors.textPrimary,
                    }}
                  >
                    {patient.healthScore}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_400Regular",
                      color: colors.textSecondary,
                    }}
                  >
                    /100
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Inter_400Regular",
                    color: colors.textSecondary,
                    marginBottom: 2,
                  }}
                >
                  {patient.lastUpdate}
                </Text>

                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Inter_500Medium",
                    color: colors.primary,
                  }}
                >
                  Next: {patient.nextAppointment}
                </Text>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.surfaceVariant,
                    borderRadius: 20,
                    padding: 6,
                    marginBottom: 8,
                  }}
                >
                  <MoreVertical size={16} color={colors.textPrimary} />
                </TouchableOpacity>

                <View style={{ flexDirection: "row", gap: 4 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primary + "20",
                      borderRadius: 16,
                      padding: 6,
                    }}
                  >
                    <Phone size={14} color={colors.primary} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.secondary + "20",
                      borderRadius: 16,
                      padding: 6,
                    }}
                  >
                    <MessageCircle size={14} color={colors.secondary} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.accent + "20",
                      borderRadius: 16,
                      padding: 6,
                    }}
                  >
                    <Calendar size={14} color={colors.accent} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

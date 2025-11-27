import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Phone, Video } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function ConversationItem({ conversation }) {
  const { colors } = useAppTheme();

  return (
    <TouchableOpacity
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
        borderLeftWidth: conversation.isUrgent ? 4 : 0,
        borderLeftColor: colors.error,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ position: "relative", marginRight: 12 }}>
          <Image
            source={{ uri: conversation.patient.photo }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -2,
              right: -2,
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor:
                conversation.patient.status === "online"
                  ? colors.success
                  : colors.textSecondary,
              borderWidth: 2,
              borderColor: colors.surface,
            }}
          />
        </View>

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
              {conversation.patient.name}
            </Text>
            {conversation.isUrgent && (
              <View
                style={{
                  backgroundColor: colors.error + "20",
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
                    color: colors.error,
                  }}
                >
                  URGENT
                </Text>
              </View>
            )}
          </View>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: conversation.unread
                ? colors.textPrimary
                : colors.textSecondary,
              marginBottom: 4,
            }}
            numberOfLines={1}
          >
            {conversation.lastMessage}
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            {conversation.time}
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          {conversation.unread && (
            <View
              style={{
                backgroundColor: conversation.isUrgent
                  ? colors.error
                  : colors.primary,
                borderRadius: 10,
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Inter_600SemiBold",
                  color: "white",
                }}
              >
                {conversation.urgentCount || ""}
              </Text>
            </View>
          )}

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
              <Video size={14} color={colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

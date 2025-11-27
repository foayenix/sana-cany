import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FileText, Clock, Send } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function SessionNote({ note }) {
  const { colors } = useAppTheme();

  const getStatusColor = (status) => {
    switch (status) {
      case "draft":
        return colors.warning;
      case "completed":
        return colors.success;
      case "shared":
        return colors.info;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginBottom: 16,
        borderRadius: 16,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}
      >
        <Image
          source={{ uri: note.patient.photo }}
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
              marginBottom: 2,
            }}
          >
            {note.patient.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginBottom: 2,
            }}
          >
            {note.patient.condition}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
            }}
          >
            {note.date} at {note.time}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: `${getStatusColor(note.status)}20`,
            borderRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Inter_500Medium",
              color: getStatusColor(note.status),
              textTransform: "uppercase",
            }}
          >
            {note.status}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colors.surfaceVariant,
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <FileText size={16} color={colors.textPrimary} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
              marginLeft: 8,
            }}
          >
            {note.session}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <Clock size={12} color={colors.textSecondary} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginLeft: 4,
              }}
            >
              {note.duration}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: colors.textSecondary,
            lineHeight: 20,
          }}
        >
          {note.notes}
        </Text>
      </View>

      {note.tags && note.tags.length > 0 && (
        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 12 }}
        >
          {note.tags.map((tag, index) => (
            <View
              key={index}
              style={{
                backgroundColor: colors.accent + "20",
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
                  fontFamily: "Inter_500Medium",
                  color: colors.accent,
                }}
              >
                #{tag}
              </Text>
            </View>
          ))}
        </View>
      )}

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            marginRight: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textPrimary,
            }}
          >
            Edit Note
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            marginLeft: 4,
          }}
        >
          <Send size={16} color="white" />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: "white",
              marginLeft: 6,
            }}
          >
            Share with Patient
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

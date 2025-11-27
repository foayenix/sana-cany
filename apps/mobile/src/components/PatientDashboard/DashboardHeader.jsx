import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Bell } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function DashboardHeader({ userName, date }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face",
            }}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              marginRight: 12,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              Good morning, {userName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginTop: 2,
              }}
            >
              {date}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.surfaceVariant,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Bell size={20} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

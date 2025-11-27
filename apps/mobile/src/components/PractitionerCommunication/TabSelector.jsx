import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MessageCircle, FileText } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function TabSelector({ selectedTab, onSelectTab }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 16,
        padding: 4,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor:
            selectedTab === "messages" ? colors.primary : "transparent",
          borderRadius: 12,
          paddingVertical: 12,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
        onPress={() => onSelectTab("messages")}
      >
        <MessageCircle
          size={16}
          color={selectedTab === "messages" ? "white" : colors.textSecondary}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_600SemiBold",
            color: selectedTab === "messages" ? "white" : colors.textSecondary,
            marginLeft: 6,
          }}
        >
          Messages
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor:
            selectedTab === "notes" ? colors.primary : "transparent",
          borderRadius: 12,
          paddingVertical: 12,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
        onPress={() => onSelectTab("notes")}
      >
        <FileText
          size={16}
          color={selectedTab === "notes" ? "white" : colors.textSecondary}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_600SemiBold",
            color: selectedTab === "notes" ? "white" : colors.textSecondary,
            marginLeft: 6,
          }}
        >
          Session Notes
        </Text>
      </TouchableOpacity>
    </View>
  );
}

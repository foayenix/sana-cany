import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LogOut } from "lucide-react-native";

export function LogoutButton({ colors, onLogout }) {
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
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
        }}
        onPress={onLogout}
      >
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: colors.error + "20",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          <LogOut size={16} color={colors.error} />
        </View>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: colors.error,
            flex: 1,
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

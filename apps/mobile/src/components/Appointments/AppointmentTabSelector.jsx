import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function AppointmentTabSelector({
  selectedTab,
  setSelectedTab,
  upcomingCount,
  pastCount,
  colors,
}) {
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
      {["upcoming", "past"].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={{
            flex: 1,
            paddingVertical: 12,
            borderRadius: 12,
            backgroundColor:
              selectedTab === tab ? colors.primary : "transparent",
          }}
          onPress={() => setSelectedTab(tab)}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: selectedTab === tab ? "white" : colors.textSecondary,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {tab} ({tab === "upcoming" ? upcomingCount : pastCount})
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useAppTheme } from "@/utils/theme";

export function CategoryTabs() {
  const { colors } = useAppTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "All",
    "Appointments",
    "Wellness",
    "Soundscape",
    "Fitness",
    "Nutrition",
  ];

  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginHorizontal: 20,
          marginBottom: 16,
        }}
      >
        Dashboard
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        style={{ flexGrow: 0 }}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveTab(index)}
            style={{
              backgroundColor:
                activeTab === index
                  ? colors.primary
                  : colors.categoryBackground,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              marginRight: 12,
              ...colors.softCardShadow,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color:
                  activeTab === index
                    ? colors.cardPure
                    : colors.categoryInactive,
              }}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

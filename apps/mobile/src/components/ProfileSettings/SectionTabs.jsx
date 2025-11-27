import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

export function SectionTabs({
  sections,
  activeSection,
  colors,
  onSelectSection,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0 }}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 16 }}
    >
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;

        return (
          <TouchableOpacity
            key={section.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: isActive ? colors.primary : colors.surface,
              marginRight: 12,
            }}
            onPress={() => onSelectSection(section.id)}
          >
            <Icon size={16} color={isActive ? "white" : colors.textSecondary} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: isActive ? "white" : colors.textPrimary,
                marginLeft: 8,
              }}
            >
              {section.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

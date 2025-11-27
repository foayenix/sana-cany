import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

export function CategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
  colors,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 16,
      }}
      style={{ flexGrow: 0 }}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={{
            backgroundColor:
              selectedCategory === category.id
                ? category.color + "20"
                : colors.surfaceVariant,
            borderWidth: selectedCategory === category.id ? 2 : 0,
            borderColor:
              selectedCategory === category.id ? category.color : "transparent",
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 12,
            marginRight: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => onSelectCategory(category.id)}
        >
          <category.icon
            size={20}
            color={
              selectedCategory === category.id
                ? category.color
                : colors.textSecondary
            }
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_600SemiBold",
              color:
                selectedCategory === category.id
                  ? category.color
                  : colors.textSecondary,
              marginLeft: 8,
            }}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

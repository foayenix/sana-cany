import React from "react";
import { View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Search, Filter } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function PatientSearch({
  searchQuery,
  onSearchChange,
  selectedFilter,
  onFilterChange,
}) {
  const { colors } = useAppTheme();

  const filters = [
    "All",
    "High Priority",
    "Improving",
    "Stable",
    "Needs Attention",
  ];

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.surface,
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 8,
              fontSize: 16,
              fontFamily: "Inter_400Regular",
              color: colors.textPrimary,
            }}
            placeholder="Search patients..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={onSearchChange}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: colors.surface,
            borderRadius: 12,
            padding: 12,
          }}
        >
          <Filter size={20} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
        style={{ flexGrow: 0 }}
      >
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor:
                selectedFilter === filter
                  ? colors.primary
                  : colors.surfaceVariant,
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginRight: 8,
            }}
            onPress={() => onFilterChange(filter)}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: selectedFilter === filter ? "white" : colors.textPrimary,
              }}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Database, BarChart3 } from "lucide-react-native";

export function ResearcherInfo({ researcherData, colors, onNavigate }) {
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
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Researcher Information
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Research ID
        </Text>
        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            padding: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: colors.textPrimary,
            }}
          >
            {researcherData.researchId}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Institution
        </Text>
        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            padding: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: colors.textPrimary,
            }}
          >
            {researcherData.institution}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Department
        </Text>
        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            padding: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: colors.textPrimary,
            }}
          >
            {researcherData.department}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 8,
            }}
          >
            Active Datasets
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: colors.primary,
            }}
          >
            {researcherData.activeDatasets}
          </Text>
        </View>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 8,
            }}
          >
            Publications
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: colors.secondary,
            }}
          >
            {researcherData.publications}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 12,
          marginTop: 16,
          paddingTop: 16,
          borderTopWidth: 1,
          borderTopColor: colors.borderLight,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            borderRadius: 12,
            paddingVertical: 12,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => onNavigate("/my-datasets")}
        >
          <Database size={16} color="white" />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "white",
              marginLeft: 8,
            }}
          >
            My Datasets
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.secondary,
            borderRadius: 12,
            paddingVertical: 12,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => onNavigate("/query-builder")}
        >
          <BarChart3 size={16} color="white" />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "white",
              marginLeft: 8,
            }}
          >
            Query Builder
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

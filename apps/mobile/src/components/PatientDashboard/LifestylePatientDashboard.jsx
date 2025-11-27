import React from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";

// Import all the new lifestyle components
import { LifestyleDashboardHeader } from "./LifestyleDashboardHeader";
import { JournalCTACard } from "./JournalCTACard";
import { CategoryTabs } from "./CategoryTabs";
import { LifestyleContentCards } from "./LifestyleContentCards";
import { ProductMarketplace } from "./ProductMarketplace";
import { RecommendedPractitioners } from "./RecommendedPractitioners";

export function LifestylePatientDashboard() {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  // Sample data for practitioners
  const samplePractitioners = [
    {
      id: 1,
      name: "Dr. Emma Thompson",
      specialty: "Holistic Medicine",
      sanaIndex: "95",
      distance: "2.1 km",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Physiotherapy",
      sanaIndex: "92",
      distance: "1.8 km",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      specialty: "Nutrition Therapy",
      sanaIndex: "88",
      distance: "3.2 km",
      rating: 4.7,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style="dark" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with greeting, health score, and mood selector */}
        <LifestyleDashboardHeader />

        {/* Journal CTA card */}
        <JournalCTACard />

        {/* Category tabs */}
        <CategoryTabs />

        {/* Horizontal scrolling lifestyle content cards */}
        <LifestyleContentCards />

        {/* Product Marketplace - replaces motivational quote */}
        <ProductMarketplace />

        {/* Recommended practitioners */}
        <RecommendedPractitioners practitioners={samplePractitioners} />
      </ScrollView>
    </View>
  );
}

import React from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import { DashboardHeader } from "./DashboardHeader";
import { HealthScoreSection } from "./HealthScoreSection";
import { TodaysSummary } from "./TodaysSummary";
import { QuickActions } from "./QuickActions";
import { UpcomingAppointment } from "./UpcomingAppointment";
import { RecentActivity } from "./RecentActivity";
import { RecommendedPractitioners } from "./RecommendedPractitioners";

export function PatientDashboard() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();

  // Dummy data for patient
  const healthScore = 78;
  const wellnessStatus = "Thriving";
  const userName = "Sarah";

  const todaysMetrics = {
    sleep: "7.5h",
    steps: "8,234",
    mood: "positive",
  };

  const recentActivities = [
    {
      id: 1,
      type: "session",
      text: "Session completed with Dr. Amara Okafor",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "score",
      text: "Health score increased by 3 points",
      time: "Yesterday",
    },
    {
      id: 3,
      type: "journal",
      text: "New journal entry with AI insight",
      time: "2 days ago",
    },
    {
      id: 4,
      type: "sync",
      text: "Apple Health data synced",
      time: "3 days ago",
    },
  ];

  const recommendedPractitioners = [
    {
      id: 1,
      name: "Dr. Maya Chen",
      specialty: "Acupuncturist",
      sanaIndex: 92,
      distance: "1.2 miles",
      photo:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Naturopath",
      sanaIndex: 89,
      distance: "2.1 miles",
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      specialty: "Nutritionist",
      sanaIndex: 85,
      distance: "3.4 miles",
      photo:
        "https://images.unsplash.com/photo-1594824121278-ed89e68a71db?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top }}>
        <DashboardHeader userName={userName} date="November 25, 2024" />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <HealthScoreSection
          healthScore={healthScore}
          wellnessStatus={wellnessStatus}
        />
        <TodaysSummary metrics={todaysMetrics} />
        <QuickActions />
        <UpcomingAppointment />
        <RecentActivity activities={recentActivities} />
        <RecommendedPractitioners practitioners={recommendedPractitioners} />
      </ScrollView>
    </View>
  );
}

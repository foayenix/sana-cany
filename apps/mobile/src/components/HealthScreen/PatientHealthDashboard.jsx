import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Moon,
  Brain,
  Heart,
  Users,
  Zap,
  Activity,
  Smartphone,
  Watch,
  UserCheck,
  ClipboardList,
  TestTube,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { HealthScoreHeader } from "./HealthScoreHeader";
import { RadarChart } from "./RadarChart";
import { TopLevers } from "./TopLevers";
import { DataSources } from "./DataSources";
import { Timeline } from "./Timeline";

export function PatientHealthDashboard() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const [selectedTimeRange, setSelectedTimeRange] = useState("3 months");

  // Updated dummy data to match home page and include comparisons
  const healthScore = 87; // Sarah's current wellness score
  const biologicalAge = 28;
  const chronologicalAge = 32;
  const monthlyTrend = +5; // Monthly growth trend

  // Wellness status based on current score
  const wellnessStatus = {
    status: "Thriving",
    description: "Your wellness trajectory is strong and improving",
    color: colors.success,
  };

  // Health dimensions with updated scores reflecting the 87 overall score
  const healthDimensions = [
    {
      name: "Physical Health",
      score: 89,
      color: colors.physical,
      icon: Activity,
    },
    { name: "Mental Wellbeing", score: 85, color: colors.mental, icon: Brain },
    {
      name: "Emotional Balance",
      score: 84,
      color: colors.emotional,
      icon: Heart,
    },
    { name: "Social Connection", score: 82, color: colors.social, icon: Users },
    { name: "Sleep Quality", score: 92, color: colors.sleep, icon: Moon },
    { name: "Energy Levels", score: 88, color: colors.energy, icon: Zap },
  ];

  // Comparison data for the radar chart
  const comparisonData = {
    previous: [
      {
        name: "Physical Health",
        score: 85,
        color: colors.physical,
        icon: Activity,
      },
      {
        name: "Mental Wellbeing",
        score: 79,
        color: colors.mental,
        icon: Brain,
      },
      {
        name: "Emotional Balance",
        score: 78,
        color: colors.emotional,
        icon: Heart,
      },
      {
        name: "Social Connection",
        score: 75,
        color: colors.social,
        icon: Users,
      },
      { name: "Sleep Quality", score: 88, color: colors.sleep, icon: Moon },
      { name: "Energy Levels", score: 82, color: colors.energy, icon: Zap },
    ],
    goal: [
      {
        name: "Physical Health",
        score: 95,
        color: colors.physical,
        icon: Activity,
      },
      {
        name: "Mental Wellbeing",
        score: 90,
        color: colors.mental,
        icon: Brain,
      },
      {
        name: "Emotional Balance",
        score: 92,
        color: colors.emotional,
        icon: Heart,
      },
      {
        name: "Social Connection",
        score: 88,
        color: colors.social,
        icon: Users,
      },
      { name: "Sleep Quality", score: 96, color: colors.sleep, icon: Moon },
      { name: "Energy Levels", score: 94, color: colors.energy, icon: Zap },
    ],
    benchmark: [
      {
        name: "Physical Health",
        score: 78,
        color: colors.physical,
        icon: Activity,
      },
      {
        name: "Mental Wellbeing",
        score: 74,
        color: colors.mental,
        icon: Brain,
      },
      {
        name: "Emotional Balance",
        score: 76,
        color: colors.emotional,
        icon: Heart,
      },
      {
        name: "Social Connection",
        score: 72,
        color: colors.social,
        icon: Users,
      },
      { name: "Sleep Quality", score: 80, color: colors.sleep, icon: Moon },
      { name: "Energy Levels", score: 75, color: colors.energy, icon: Zap },
    ],
  };

  const topLevers = [
    {
      id: 1,
      title: "Sleep Consistency",
      description: "Your strongest area - keep it up!",
      icon: Moon,
      color: colors.sleep,
      improvement: "+2%",
    },
    {
      id: 2,
      title: "Social Connection",
      description: "Great opportunity for growth",
      icon: Users,
      color: colors.social,
      improvement: "+8%",
    },
    {
      id: 3,
      title: "Emotional Balance",
      description: "Continue mindfulness practices",
      icon: Heart,
      color: colors.emotional,
      improvement: "+5%",
    },
  ];

  const dataSources = [
    {
      id: 1,
      name: "Apple Health",
      status: "synced",
      lastSync: "2 hours ago",
      icon: Smartphone,
    },
    {
      id: 2,
      name: "Oura Ring",
      status: "synced",
      lastSync: "today",
      icon: Watch,
    },
    {
      id: 3,
      name: "Practitioner Sessions",
      status: "synced",
      lastSync: "5 this month",
      icon: UserCheck,
    },
    {
      id: 4,
      name: "Self-Reported",
      status: "synced",
      lastSync: "12 logs this month",
      icon: ClipboardList,
    },
    {
      id: 5,
      name: "Blood Tests",
      status: "pending",
      lastSync: "awaiting lab results",
      icon: TestTube,
    },
  ];

  // Updated timeline to reflect Sarah's wellness journey
  const timelineEvents = [
    {
      id: 1,
      date: "Nov 2024",
      event: "Started morning yoga routine",
      impact: "+2 points",
      type: "positive",
    },
    {
      id: 2,
      date: "Oct 2024",
      event: "Improved sleep schedule",
      impact: "+4 points",
      type: "positive",
    },
    {
      id: 3,
      date: "Sep 2024",
      event: "Began meditation practice",
      impact: "+3 points",
      type: "positive",
    },
    {
      id: 4,
      date: "Aug 2024",
      event: "Started nutrition tracking",
      impact: "+5 points",
      type: "positive",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top + 16 }}>
        <View style={{ paddingHorizontal: 20, marginBottom: 4 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
            }}
          >
            Wellness Chart
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <HealthScoreHeader
          healthScore={healthScore}
          biologicalAge={biologicalAge}
          chronologicalAge={chronologicalAge}
          monthlyTrend={monthlyTrend}
          wellnessStatus={wellnessStatus}
          selectedTimeRange={selectedTimeRange}
          onTimeRangePress={() => {}}
        />
        <RadarChart
          healthDimensions={healthDimensions}
          comparisonData={comparisonData}
        />
        <TopLevers levers={topLevers} />
        <DataSources sources={dataSources} />
        <Timeline events={timelineEvents} />
      </ScrollView>
    </View>
  );
}

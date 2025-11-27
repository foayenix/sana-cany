import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import { PracticeOverview } from "./PracticeOverview";
import { PatientSearch } from "./PatientSearch";
import { PatientList } from "./PatientList";

export function PatientManagementScreen() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Patient data for practitioner view
  const patients = [
    {
      id: 1,
      name: "Emily Roberts",
      age: 29,
      lastSession: "2 days ago",
      nextAppointment: "Tomorrow, 9:00 AM",
      healthScore: 82,
      status: "improving",
      priority: "normal",
      profilePhoto:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face",
      conditions: ["Anxiety", "Sleep Issues"],
      lastUpdate: "Completed symptom log",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 34,
      lastSession: "1 week ago",
      nextAppointment: "Dec 2, 10:30 AM",
      healthScore: 67,
      status: "stable",
      priority: "normal",
      profilePhoto:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      conditions: ["Lower Back Pain"],
      lastUpdate: "Health data synced",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      age: 41,
      lastSession: "3 days ago",
      nextAppointment: "Today, 2:00 PM",
      healthScore: 45,
      status: "declining",
      priority: "high",
      profilePhoto:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      conditions: ["Chronic Fatigue", "Digestive Issues"],
      lastUpdate: "Missed last appointment",
    },
    {
      id: 4,
      name: "David Wilson",
      age: 55,
      lastSession: "Yesterday",
      nextAppointment: "Dec 5, 11:00 AM",
      healthScore: 91,
      status: "thriving",
      priority: "normal",
      profilePhoto:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      conditions: ["Maintenance"],
      lastUpdate: "Excellent progress notes",
    },
  ];

  const practiceStats = {
    totalPatients: 47,
    activeThisWeek: 23,
    averageScore: 74,
    improvingPatients: 31,
    needsAttention: 3,
  };

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
            Patient Management
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <PracticeOverview stats={practiceStats} />
        <PatientSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        <PatientList patients={patients} />
      </ScrollView>
    </View>
  );
}

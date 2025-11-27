import React from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import { useProfileStore } from "@/utils/profileStore";
import { PractitionerHeader } from "./PractitionerHeader";
import { TodaysOverview } from "./TodaysOverview";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { PractitionerQuickActions } from "./PractitionerQuickActions";
import { PatientActivity } from "./PatientActivity";

export function PractitionerDashboard() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const { practitionerData } = useProfileStore();

  // Practitioner dashboard data
  const todaysStats = {
    appointments: 12,
    completedSessions: 8,
    pendingReviews: 3,
    urgentPatients: 2,
  };

  const upcomingAppointments = [
    {
      id: 1,
      patientName: "Emily Roberts",
      time: "9:00 AM",
      type: "Initial Consultation",
      status: "confirmed",
      profilePhoto:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 2,
      patientName: "Michael Chen",
      time: "10:30 AM",
      type: "Follow-up",
      status: "confirmed",
      profilePhoto:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 3,
      patientName: "Sarah Johnson",
      time: "2:00 PM",
      type: "Treatment Session",
      status: "pending",
      profilePhoto:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
  ];

  const recentPatientActivity = [
    {
      id: 1,
      patientName: "David Wilson",
      action: "Completed symptom log",
      time: "30 minutes ago",
      priority: "normal",
    },
    {
      id: 2,
      patientName: "Lisa Anderson",
      action: "Missed appointment - follow up needed",
      time: "1 hour ago",
      priority: "high",
    },
    {
      id: 3,
      patientName: "Mark Thompson",
      action: "Submitted health data",
      time: "2 hours ago",
      priority: "normal",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top }}>
        <PractitionerHeader
          profilePhoto={practitionerData.profilePhoto}
          appointmentsCount={todaysStats.appointments}
        />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <TodaysOverview stats={todaysStats} />
        <UpcomingAppointments appointments={upcomingAppointments} />
        <PractitionerQuickActions />
        <PatientActivity activities={recentPatientActivity} />
      </ScrollView>
    </View>
  );
}

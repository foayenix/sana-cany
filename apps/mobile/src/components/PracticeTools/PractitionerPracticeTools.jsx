import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  Send,
  UserPlus,
  Calendar,
  BarChart3,
  Users,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";
import { PracticeHeader } from "./PracticeHeader";
import { CategoryTabs } from "./CategoryTabs";
import { AssessmentTools } from "./AssessmentTools";
import { AnalyticsTools } from "./AnalyticsTools";
import { DocumentTools } from "./DocumentTools";
import { PatientTools } from "./PatientTools";
import { toolCategories } from "@/utils/practiceToolsData";

const { width } = Dimensions.get("window");

export function PractitionerPracticeTools() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("assessments");

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Quick actions for practitioners
  const quickActions = [
    {
      id: "referrals",
      title: "Patient Referrals",
      description: "Refer to specialists",
      icon: Send,
      color: colors.primary,
      action: () => router.push("/practitioner-referrals"),
    },
    {
      id: "new-patient",
      title: "New Patient",
      description: "Add to practice",
      icon: UserPlus,
      color: colors.secondary,
      action: () => console.log("New Patient"),
    },
    {
      id: "schedule",
      title: "Schedule",
      description: "Manage appointments",
      icon: Calendar,
      color: colors.accent,
      action: () => router.push("/appointments"),
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Practice metrics",
      icon: BarChart3,
      color: colors.warning,
      action: () => setSelectedCategory("analytics"),
    },
  ];

  const renderQuickActions = () => (
    <View style={{ paddingHorizontal: 20, paddingVertical: 16 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 12,
        }}
      >
        Quick Actions
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <TouchableOpacity
              key={action.id}
              style={{
                backgroundColor: colors.surface,
                borderRadius: 12,
                padding: 12,
                width: (width - 64) / 2,
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.border,
              }}
              onPress={action.action}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: `${action.color}20`,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <Icon size={20} color={action.color} />
              </View>

              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Inter_600SemiBold",
                  color: colors.textPrimary,
                  marginBottom: 2,
                  textAlign: "center",
                }}
              >
                {action.title}
              </Text>

              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                  textAlign: "center",
                }}
              >
                {action.description}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  const renderContent = () => {
    switch (selectedCategory) {
      case "assessments":
        return <AssessmentTools colors={colors} insets={insets} />;
      case "analytics":
        return <AnalyticsTools colors={colors} insets={insets} />;
      case "documents":
        return <DocumentTools colors={colors} insets={insets} />;
      case "patients":
        return <PatientTools colors={colors} insets={insets} />;
      default:
        return <AssessmentTools colors={colors} insets={insets} />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        <PracticeHeader colors={colors} insets={insets} />

        {/* Quick Actions Section */}
        {renderQuickActions()}

        <CategoryTabs
          categories={toolCategories(colors)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          colors={colors}
        />

        {renderContent()}
      </ScrollView>
    </View>
  );
}

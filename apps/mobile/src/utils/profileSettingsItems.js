import { Alert } from "react-native";
import {
  Download,
  Shield,
  Bell,
  Globe,
  Moon,
  Sun,
  HelpCircle,
  MessageCircle,
  AlertTriangle,
  Users,
  Stethoscope,
  BarChart3,
} from "lucide-react-native";
import { handleDataExport, handleSwitchProfile } from "./profileHandlers";

export const getDataPrivacyItems = () => [
  {
    icon: Download,
    title: "Download my data",
    subtitle: "Export all your SANA data",
    onPress: handleDataExport,
  },
  {
    icon: Shield,
    title: "Data sharing preferences",
    subtitle: "Control how your data is used",
    onPress: () => Alert.alert("Settings", "Data sharing preferences opened"),
  },
  {
    icon: Shield,
    title: "Research consent",
    subtitle: "Contribute to wellness research",
    onPress: () => Alert.alert("Settings", "Research consent opened"),
  },
];

export const getPreferencesItems = (
  isDark,
  notificationsEnabled,
  setNotificationsEnabled,
  darkModeEnabled,
  setDarkModeEnabled,
) => [
  {
    icon: Bell,
    title: "Notifications",
    subtitle: "Manage your notification preferences",
    showSwitch: true,
    switchValue: notificationsEnabled,
    onSwitchChange: setNotificationsEnabled,
  },
  {
    icon: isDark ? Sun : Moon,
    title: "Dark mode",
    subtitle: "Toggle dark/light theme",
    showSwitch: true,
    switchValue: darkModeEnabled,
    onSwitchChange: setDarkModeEnabled,
  },
  {
    icon: Globe,
    title: "Language",
    subtitle: "English (UK)",
    onPress: () => Alert.alert("Settings", "Language settings opened"),
  },
];

export const getSupportItems = () => [
  {
    icon: HelpCircle,
    title: "Help center",
    subtitle: "Get answers to common questions",
    onPress: () => Alert.alert("Support", "Help center opened"),
  },
  {
    icon: MessageCircle,
    title: "Contact support",
    subtitle: "Get in touch with our team",
    onPress: () => Alert.alert("Support", "Contact support opened"),
  },
  {
    icon: AlertTriangle,
    title: "Report an issue",
    subtitle: "Let us know about problems",
    onPress: () => Alert.alert("Support", "Issue reporting opened"),
  },
];

export const getProfileSwitchItems = (
  currentProfile,
  colors,
  setCurrentProfile,
) => [
  {
    icon: Users,
    title: "Switch to Patient Profile",
    subtitle:
      currentProfile === "patient"
        ? "Currently active"
        : "Access patient features",
    onPress: () =>
      currentProfile !== "patient" &&
      handleSwitchProfile("patient", setCurrentProfile),
    showBadge: currentProfile === "patient",
    color: colors.primary,
  },
  {
    icon: Stethoscope,
    title: "Switch to Practitioner Portal",
    subtitle:
      currentProfile === "practitioner"
        ? "Currently active"
        : "Access practitioner tools",
    onPress: () =>
      currentProfile !== "practitioner" &&
      handleSwitchProfile("practitioner", setCurrentProfile),
    showBadge: currentProfile === "practitioner",
    color: colors.secondary,
  },
  {
    icon: BarChart3,
    title: "View Research Portal",
    subtitle:
      currentProfile === "researcher"
        ? "Currently active"
        : "Access research data",
    onPress: () =>
      currentProfile !== "researcher" &&
      handleSwitchProfile("researcher", setCurrentProfile),
    showBadge: currentProfile === "researcher",
    color: colors.accent,
  },
];

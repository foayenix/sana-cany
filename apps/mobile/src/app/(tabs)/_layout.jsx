import { Tabs } from "expo-router";
import {
  Home,
  Heart,
  QrCode,
  Calendar,
  BookOpen,
  User,
  Settings,
  Database,
  Search,
  FileText,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useProfileStore } from "@/utils/profileStore";

export default function TabLayout() {
  const { colors, isDark } = useAppTheme();
  const { currentProfile } = useProfileStore();

  // Function to get appropriate title based on profile
  const getTabTitle = (tabName) => {
    if (currentProfile === "researcher") {
      switch (tabName) {
        case "index":
          return "Dashboard";
        case "health":
          return "Datasets";
        case "scanner":
          return "Queries";
        case "appointments":
          return "Publications";
        case "journal":
          return "Research";
        case "practicetools":
          return "Tools";
        case "profile":
          return "Profile";
        default:
          return tabName;
      }
    } else if (currentProfile === "practitioner") {
      switch (tabName) {
        case "index":
          return "Dashboard";
        case "health":
          return "Patients";
        case "journal":
          return "Notes";
        default:
          return tabName;
      }
    } else {
      // Patient profile
      switch (tabName) {
        case "index":
          return "Home";
        case "health":
          return "Health";
        case "journal":
          return "Journal";
        default:
          return tabName;
      }
    }
  };

  // Function to get appropriate icon based on profile
  const getTabIcon = (tabName, color) => {
    if (currentProfile === "researcher") {
      switch (tabName) {
        case "health":
          return <Database color={color} size={24} />;
        case "scanner":
          return <Search color={color} size={24} />;
        case "appointments":
          return <FileText color={color} size={24} />;
        case "journal":
          return <BookOpen color={color} size={24} />;
        case "practicetools":
          return <Settings color={color} size={24} />;
        default:
          break;
      }
    }

    // Default icons for all profiles
    switch (tabName) {
      case "index":
        return <Home color={color} size={24} />;
      case "health":
        return <Heart color={color} size={24} />;
      case "scanner":
        return <QrCode color={color} size={24} />;
      case "appointments":
        return <Calendar color={color} size={24} />;
      case "journal":
        return <BookOpen color={color} size={24} />;
      case "practicetools":
        return <Settings color={color} size={24} />;
      case "profile":
        return <User color={color} size={24} />;
      default:
        return <Home color={color} size={24} />;
    }
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingTop: 8,
          paddingBottom: 4,
          height: 88,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: getTabTitle("index"),
          tabBarIcon: ({ color }) => getTabIcon("index", color),
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          title: getTabTitle("health"),
          tabBarIcon: ({ color }) => getTabIcon("health", color),
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: getTabTitle("scanner"),
          tabBarIcon: ({ color }) => getTabIcon("scanner", color),
          href:
            currentProfile === "patient"
              ? "/scanner"
              : currentProfile === "researcher"
                ? "/scanner"
                : null,
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: getTabTitle("appointments"),
          tabBarIcon: ({ color }) => getTabIcon("appointments", color),
          href:
            currentProfile === "researcher" ? "/appointments" : "/appointments",
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: getTabTitle("journal"),
          tabBarIcon: ({ color }) => getTabIcon("journal", color),
        }}
      />
      <Tabs.Screen
        name="practicetools"
        options={{
          title: getTabTitle("practicetools"),
          tabBarIcon: ({ color }) => getTabIcon("practicetools", color),
          href:
            currentProfile === "practitioner" || currentProfile === "researcher"
              ? "/practicetools"
              : null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: getTabTitle("profile"),
          tabBarIcon: ({ color }) => getTabIcon("profile", color),
        }}
      />
    </Tabs>
  );
}

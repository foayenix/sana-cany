import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  Database,
  Search,
  FileText,
  Users,
  Activity,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Eye,
  Settings,
  User,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export function ResearcherDashboard() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();

  // Mock data for metrics
  const metrics = [
    {
      title: "Total Dataset Size",
      value: "2.5M",
      subtitle: "records",
      icon: Database,
      color: colors.primary,
    },
    {
      title: "Data Quality",
      value: "94%",
      subtitle: "accuracy",
      icon: CheckCircle,
      color: colors.success,
    },
    {
      title: "Research Output",
      value: "247",
      subtitle: "studies",
      icon: FileText,
      color: colors.secondary,
    },
    {
      title: "Your Access",
      value: "12",
      subtitle: "datasets",
      icon: Eye,
      color: colors.accent,
    },
  ];

  // Quick access tiles
  const quickAccessTiles = [
    {
      title: "Dataset Explorer",
      icon: Database,
      color: colors.primary,
      description: "Browse available datasets",
      onPress: () => router.push("/(tabs)/health"),
    },
    {
      title: "Query Builder",
      icon: Search,
      color: colors.secondary,
      description: "Build complex queries",
      onPress: () => router.push("/query-builder"),
    },
    {
      title: "My Datasets",
      icon: Star,
      color: colors.accent,
      description: "Your saved datasets",
      onPress: () => router.push("/my-datasets"),
    },
    {
      title: "Publications",
      icon: FileText,
      color: colors.primary,
      description: "Research publications",
      onPress: () => router.push("/(tabs)/appointments"),
    },
    {
      title: "Collaboration",
      icon: Users,
      color: colors.secondary,
      description: "Work with others",
    },
    {
      title: "Data Request",
      icon: AlertCircle,
      color: colors.warning,
      description: "Request new data",
      onPress: () => router.push("/dataset-detail"),
    },
  ];

  // Activity feed data
  const activityFeed = [
    {
      id: 1,
      icon: Database,
      title: "New dataset available",
      description: "Mental Health Survey 2024 dataset published",
      time: "2 hours ago",
      color: colors.primary,
    },
    {
      id: 2,
      icon: Users,
      title: "Collaboration request",
      description: "Dr. Sarah Chen requested access to your query",
      time: "4 hours ago",
      color: colors.secondary,
    },
    {
      id: 3,
      icon: FileText,
      title: "Publication approved",
      description: "Your study 'Wellness Trends' was published",
      time: "1 day ago",
      color: colors.success,
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Query completed",
      description: "Weekly health metrics analysis finished",
      time: "2 days ago",
      color: colors.accent,
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "Data validation complete",
      description: "Patient cohort data validation passed",
      time: "3 days ago",
      color: colors.success,
    },
  ];

  // Trending research tags
  const trendingTags = [
    { tag: "Mental Health", size: 24, popularity: 95 },
    { tag: "Nutrition", size: 20, popularity: 87 },
    { tag: "Sleep", size: 18, popularity: 76 },
    { tag: "Exercise", size: 16, popularity: 68 },
    { tag: "Stress", size: 22, popularity: 89 },
    { tag: "Meditation", size: 14, popularity: 54 },
    { tag: "Chronic Pain", size: 16, popularity: 62 },
    { tag: "Wellness", size: 20, popularity: 83 },
    { tag: "Burnout", size: 14, popularity: 49 },
    { tag: "Recovery", size: 12, popularity: 41 },
  ];

  const renderHeroBanner = () => (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        marginHorizontal: 20,
        borderRadius: 24,
        padding: 24,
        marginBottom: 24,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          color: "white",
          marginBottom: 8,
        }}
      >
        Research Dashboard
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          color: "rgba(255, 255, 255, 0.9)",
          lineHeight: 22,
        }}
      >
        Access datasets, build queries, and drive healthcare research forward
      </Text>
    </LinearGradient>
  );

  const renderMetricCard = (metric, index) => (
    <View
      key={index}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 20,
        padding: 20,
        width: (width - 60) / 2,
        marginRight: index % 2 === 0 ? 20 : 0,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: `${metric.color}20`,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <metric.icon size={24} color={metric.color} />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: colors.textPrimary,
          marginBottom: 4,
        }}
      >
        {metric.value}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: metric.color,
          marginBottom: 4,
        }}
      >
        {metric.subtitle}
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: colors.textSecondary,
        }}
      >
        {metric.title}
      </Text>
    </View>
  );

  const renderQuickAccessTile = (tile, index) => (
    <TouchableOpacity
      key={index}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        width: (width - 80) / 2,
        marginRight: index % 2 === 0 ? 20 : 0,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
      activeOpacity={0.7}
      onPress={tile.onPress}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: `${tile.color}20`,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <tile.icon size={20} color={tile.color} />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 4,
        }}
      >
        {tile.title}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "400",
          color: colors.textSecondary,
          lineHeight: 16,
        }}
      >
        {tile.description}
      </Text>
    </TouchableOpacity>
  );

  const renderActivityItem = (item) => (
    <View
      key={item.id}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderLight,
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: `${item.color}20`,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 12,
        }}
      >
        <item.icon size={16} color={item.color} />
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 4,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: colors.textSecondary,
            marginBottom: 4,
            lineHeight: 18,
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: colors.textSecondary,
          }}
        >
          {item.time}
        </Text>
      </View>
    </View>
  );

  const renderTrendingTags = () => (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
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
        Trending Research
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {trendingTags.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: `${colors.primary}${Math.floor(
                (item.popularity / 100) * 255,
              )
                .toString(16)
                .padStart(2, "0")}`,
              borderRadius: 16,
              paddingHorizontal: 12,
              paddingVertical: 6,
              marginRight: 8,
              marginBottom: 8,
            }}
            activeOpacity={0.7}
          >
            <Text
              style={{
                fontSize: item.size,
                fontWeight: "600",
                color: colors.primary,
              }}
            >
              {item.tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Profile/Settings Buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: colors.textPrimary,
              }}
            >
              Welcome back
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                marginTop: 4,
              }}
            >
              Good morning, Dr. Chen
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: colors.surface,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.push("/profile-settings")}
            >
              <Settings size={20} color={colors.textPrimary} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: colors.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.push("/profile-settings")}
            >
              <User size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {renderHeroBanner()}

        {/* Metrics Grid */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 20,
            marginBottom: 24,
          }}
        >
          {metrics.map((metric, index) => renderMetricCard(metric, index))}
        </View>

        {/* Quick Access Section */}
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: colors.textPrimary,
              marginHorizontal: 20,
              marginBottom: 16,
            }}
          >
            Quick Access
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingHorizontal: 20,
            }}
          >
            {quickAccessTiles.map((tile, index) =>
              renderQuickAccessTile(tile, index),
            )}
          </View>
        </View>

        {/* Activity Feed */}
        <View
          style={{
            backgroundColor: colors.surface,
            marginHorizontal: 20,
            borderRadius: 20,
            padding: 20,
            marginBottom: 24,
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
            Recent Activity
          </Text>

          {activityFeed.map((item) => renderActivityItem(item))}
        </View>

        {renderTrendingTags()}
      </ScrollView>
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Database,
  Search,
  BarChart3,
  FileText,
  Users,
  Settings,
  Download,
  Upload,
  Code,
  Brain,
  Calculator,
  Globe,
  Shield,
  Zap,
  Activity,
  TrendingUp,
  BookOpen,
  Award,
  Target,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export function ResearcherTools() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Data Analysis",
    "Collaboration",
    "Publishing",
    "Admin",
  ];

  // Research tools organized by category
  const tools = [
    // Data Analysis Tools
    {
      id: 1,
      title: "Statistical Analysis Suite",
      description: "Advanced statistical analysis tools for research data",
      icon: BarChart3,
      category: "Data Analysis",
      color: colors.primary,
      features: [
        "Descriptive Statistics",
        "Hypothesis Testing",
        "Regression Analysis",
      ],
      lastUsed: "2 hours ago",
      isActive: true,
    },
    {
      id: 2,
      title: "Data Visualization Studio",
      description: "Create publication-ready charts and graphs",
      icon: TrendingUp,
      category: "Data Analysis",
      color: colors.secondary,
      features: ["Interactive Charts", "Custom Graphs", "Export Options"],
      lastUsed: "1 day ago",
      isActive: true,
    },
    {
      id: 3,
      title: "Query Builder Pro",
      description: "Build complex database queries visually",
      icon: Search,
      category: "Data Analysis",
      color: colors.accent,
      features: ["Visual Query Builder", "SQL Export", "Query Optimization"],
      lastUsed: "3 days ago",
      isActive: false,
    },
    {
      id: 4,
      title: "Machine Learning Toolkit",
      description: "ML algorithms for research analysis",
      icon: Brain,
      category: "Data Analysis",
      color: colors.primary,
      features: ["Predictive Modeling", "Clustering", "Classification"],
      lastUsed: "1 week ago",
      isActive: false,
    },

    // Collaboration Tools
    {
      id: 5,
      title: "Research Collaboration Hub",
      description: "Collaborate with other researchers globally",
      icon: Users,
      category: "Collaboration",
      color: colors.secondary,
      features: ["Team Workspaces", "Real-time Editing", "Version Control"],
      lastUsed: "Yesterday",
      isActive: true,
    },
    {
      id: 6,
      title: "Peer Review System",
      description: "Manage peer reviews and feedback",
      icon: Award,
      category: "Collaboration",
      color: colors.warning,
      features: ["Anonymous Reviews", "Feedback Tracking", "Reviewer Matching"],
      lastUsed: "3 days ago",
      isActive: false,
    },
    {
      id: 7,
      title: "Grant Proposal Manager",
      description: "Collaborate on grant applications",
      icon: Target,
      category: "Collaboration",
      color: colors.success,
      features: [
        "Proposal Templates",
        "Budget Tracking",
        "Deadline Management",
      ],
      lastUsed: "1 week ago",
      isActive: false,
    },

    // Publishing Tools
    {
      id: 8,
      title: "Publication Manager",
      description: "Manage your research publications",
      icon: FileText,
      category: "Publishing",
      color: colors.primary,
      features: ["Citation Tracking", "Impact Metrics", "Journal Finder"],
      lastUsed: "Yesterday",
      isActive: true,
    },
    {
      id: 9,
      title: "Research Repository",
      description: "Store and share research datasets",
      icon: Database,
      category: "Publishing",
      color: colors.secondary,
      features: ["Secure Storage", "DOI Assignment", "Access Control"],
      lastUsed: "5 days ago",
      isActive: false,
    },
    {
      id: 10,
      title: "Citation Generator",
      description: "Generate citations in any format",
      icon: BookOpen,
      category: "Publishing",
      color: colors.accent,
      features: ["Multiple Formats", "Auto-populate", "Bibliography Builder"],
      lastUsed: "2 days ago",
      isActive: false,
    },

    // Admin Tools
    {
      id: 11,
      title: "Data Export Center",
      description: "Export data in various formats",
      icon: Download,
      category: "Admin",
      color: colors.warning,
      features: ["Multiple Formats", "Scheduled Exports", "Compression"],
      lastUsed: "1 week ago",
      isActive: false,
    },
    {
      id: 12,
      title: "API Management",
      description: "Manage API keys and integrations",
      icon: Code,
      category: "Admin",
      color: colors.error,
      features: ["API Keys", "Rate Limits", "Usage Analytics"],
      lastUsed: "2 weeks ago",
      isActive: false,
    },
    {
      id: 13,
      title: "Security Center",
      description: "Manage data security and permissions",
      icon: Shield,
      category: "Admin",
      color: colors.success,
      features: ["Access Control", "Audit Logs", "Encryption Settings"],
      lastUsed: "1 month ago",
      isActive: false,
    },
  ];

  const quickStats = [
    { label: "Active Tools", value: "8", icon: Zap },
    { label: "Data Processed", value: "2.3TB", icon: Activity },
    { label: "Collaborators", value: "24", icon: Users },
    { label: "Projects", value: "12", icon: Target },
  ];

  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  const renderStatsCard = (stat, index) => (
    <View
      key={index}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        width: (width - 60) / 2,
        marginRight: index % 2 === 0 ? 20 : 0,
        marginBottom: 16,
        ...colors.cardShadow,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: `${colors.primary}20`,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <stat.icon size={20} color={colors.primary} />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: colors.textPrimary,
          marginBottom: 4,
        }}
      >
        {stat.value}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: colors.textSecondary,
        }}
      >
        {stat.label}
      </Text>
    </View>
  );

  const renderToolCard = (tool) => (
    <TouchableOpacity
      key={tool.id}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 16,
        ...colors.cardShadow,
      }}
      activeOpacity={0.7}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: `${tool.color}20`,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <tool.icon size={24} color={tool.color} />
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
              {tool.title}
            </Text>

            <Text
              style={{
                fontSize: 13,
                color: colors.textSecondary,
                lineHeight: 18,
              }}
            >
              {tool.description}
            </Text>
          </View>
        </View>

        {/* Status Indicator */}
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: tool.isActive
              ? colors.success
              : colors.textSecondary,
            marginTop: 8,
          }}
        />
      </View>

      {/* Features */}
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
      >
        {tool.features.map((feature, index) => (
          <View
            key={index}
            style={{
              backgroundColor: `${tool.color}15`,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 12,
              marginRight: 8,
              marginBottom: 4,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: tool.color,
              }}
            >
              {feature}
            </Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 11,
              color: colors.textSecondary,
            }}
          >
            Last used {tool.lastUsed}
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity
            style={{
              backgroundColor: `${tool.color}15`,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: tool.color,
              }}
            >
              {tool.isActive ? "Open" : "Launch"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.surfaceVariant,
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
            }}
          >
            <Settings size={12} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
          backgroundColor: colors.surface,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: colors.textPrimary,
            marginBottom: 16,
          }}
        >
          Research Tools
        </Text>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={{
                  backgroundColor:
                    selectedCategory === category
                      ? colors.primary
                      : colors.surfaceVariant,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color:
                      selectedCategory === category
                        ? "white"
                        : colors.textSecondary,
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Quick Stats */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          {quickStats.map((stat, index) => renderStatsCard(stat, index))}
        </View>

        {/* Recent Activity */}
        <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
          <View
            style={{
              backgroundColor: colors.surface,
              borderRadius: 16,
              padding: 20,
              ...colors.cardShadow,
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

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: `${colors.success}20`,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <BarChart3 size={20} color={colors.success} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.textPrimary,
                    fontWeight: "500",
                  }}
                >
                  3 Analyses
                </Text>
                <Text style={{ fontSize: 10, color: colors.textSecondary }}>
                  Today
                </Text>
              </View>

              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: `${colors.primary}20`,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Database size={20} color={colors.primary} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.textPrimary,
                    fontWeight: "500",
                  }}
                >
                  12 Queries
                </Text>
                <Text style={{ fontSize: 10, color: colors.textSecondary }}>
                  This week
                </Text>
              </View>

              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: `${colors.secondary}20`,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <FileText size={20} color={colors.secondary} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.textPrimary,
                    fontWeight: "500",
                  }}
                >
                  2 Papers
                </Text>
                <Text style={{ fontSize: 10, color: colors.textSecondary }}>
                  This month
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Tools List */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              {selectedCategory} Tools ({filteredTools.length})
            </Text>
          </View>

          {filteredTools.map((tool) => renderToolCard(tool))}
        </View>
      </ScrollView>
    </View>
  );
}

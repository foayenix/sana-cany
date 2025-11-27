import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  BookOpen,
  Search,
  Plus,
  Clock,
  Users,
  Star,
  FileText,
  Target,
  Calendar,
  TrendingUp,
  ChevronRight,
  Database,
  Beaker,
  Lightbulb,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export function ResearchScreen() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState("Active");

  const tabs = ["Active", "Completed", "Drafts", "Collaborations"];

  // Mock research projects data
  const researchProjects = [
    {
      id: 1,
      title: "Digital Wellness Intervention Efficacy Study",
      description:
        "Analyzing the effectiveness of digital wellness apps on mental health outcomes across diverse populations.",
      status: "Active",
      progress: 75,
      phase: "Data Analysis",
      startDate: "2024-08-15",
      expectedCompletion: "2024-12-30",
      collaborators: ["Dr. Michael Roberts", "Dr. Lisa Wang"],
      datasetSize: "2.3M records",
      tags: ["Mental Health", "Digital Interventions", "Wellness"],
      type: "Longitudinal Study",
      priority: "High",
      funding: "$125,000",
      lastUpdate: "2 days ago",
    },
    {
      id: 2,
      title: "Nutrition Behavior Patterns in Urban Populations",
      description:
        "Comprehensive analysis of dietary patterns and their correlation with health outcomes in urban environments.",
      status: "Active",
      progress: 45,
      phase: "Data Collection",
      startDate: "2024-09-01",
      expectedCompletion: "2025-03-15",
      collaborators: ["Dr. Amanda Torres", "Prof. James Liu"],
      datasetSize: "1.8M records",
      tags: ["Nutrition", "Urban Health", "Behavioral Analysis"],
      type: "Cross-sectional Study",
      priority: "Medium",
      funding: "$85,000",
      lastUpdate: "1 week ago",
    },
    {
      id: 3,
      title: "Sleep Quality and Cognitive Performance Correlation",
      description:
        "Multi-variable analysis examining the relationship between sleep quality metrics and cognitive performance indicators.",
      status: "Completed",
      progress: 100,
      phase: "Published",
      startDate: "2024-01-10",
      expectedCompletion: "2024-10-15",
      collaborators: ["Dr. Kevin Park"],
      datasetSize: "945K records",
      tags: ["Sleep", "Cognitive Health", "Performance"],
      type: "Experimental Study",
      priority: "High",
      funding: "$95,000",
      lastUpdate: "1 month ago",
    },
    {
      id: 4,
      title: "Chronic Pain Management: Data-Driven Approaches",
      description:
        "Developing novel therapeutic approaches for chronic pain management using comprehensive patient data analysis.",
      status: "Draft",
      progress: 15,
      phase: "Literature Review",
      startDate: "2024-11-01",
      expectedCompletion: "2025-06-30",
      collaborators: ["Dr. Robert Martinez", "Dr. Emily Thompson"],
      datasetSize: "Planning",
      tags: ["Chronic Pain", "Therapeutics", "Data Science"],
      type: "Intervention Study",
      priority: "High",
      funding: "$150,000",
      lastUpdate: "3 days ago",
    },
    {
      id: 5,
      title: "Wellness Technology Adoption in Healthcare",
      description:
        "Analyzing patterns of wellness technology adoption across different healthcare settings and patient demographics.",
      status: "Draft",
      progress: 8,
      phase: "Proposal",
      startDate: "2024-11-15",
      expectedCompletion: "2025-04-30",
      collaborators: ["Dr. David Kim"],
      datasetSize: "Planning",
      tags: ["Technology", "Healthcare", "Adoption"],
      type: "Observational Study",
      priority: "Medium",
      funding: "$75,000",
      lastUpdate: "1 week ago",
    },
  ];

  const researchInsights = [
    {
      title: "Trending Research Areas",
      value: "Mental Health + AI",
      change: "+23%",
      icon: TrendingUp,
    },
    {
      title: "Active Collaborations",
      value: "12",
      change: "+3",
      icon: Users,
    },
    {
      title: "Datasets Accessed",
      value: "47",
      change: "+8",
      icon: Database,
    },
    {
      title: "Publications This Year",
      value: "8",
      change: "+2",
      icon: FileText,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return colors.primary;
      case "Completed":
        return colors.success;
      case "Draft":
        return colors.warning;
      case "Collaborations":
        return colors.secondary;
      default:
        return colors.textSecondary;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return colors.error;
      case "Medium":
        return colors.warning;
      case "Low":
        return colors.success;
      default:
        return colors.textSecondary;
    }
  };

  const filteredProjects = researchProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchText.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase()),
      );

    const matchesTab =
      (selectedTab === "Active" && project.status === "Active") ||
      (selectedTab === "Completed" && project.status === "Completed") ||
      (selectedTab === "Drafts" && project.status === "Draft") ||
      (selectedTab === "Collaborations" && project.collaborators.length > 0);

    return matchesSearch && matchesTab;
  });

  const renderInsightCard = (insight, index) => (
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
        <insight.icon size={20} color={colors.primary} />
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: colors.textPrimary,
          marginBottom: 4,
        }}
      >
        {insight.value}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: colors.textSecondary,
          marginBottom: 4,
        }}
      >
        {insight.title}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: colors.success,
        }}
      >
        {insight.change}
      </Text>
    </View>
  );

  const renderProjectCard = (project) => (
    <TouchableOpacity
      key={project.id}
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
          marginBottom: 12,
        }}
      >
        <View style={{ flex: 1, marginRight: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: colors.textPrimary,
              lineHeight: 22,
              marginBottom: 8,
            }}
          >
            {project.title}
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: colors.textSecondary,
              lineHeight: 18,
              marginBottom: 12,
            }}
            numberOfLines={2}
          >
            {project.description}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: getStatusColor(project.status) + "20",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "600",
              color: getStatusColor(project.status),
            }}
          >
            {project.status}
          </Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={{ marginBottom: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            {project.phase}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: colors.textPrimary,
            }}
          >
            {project.progress}%
          </Text>
        </View>

        <View
          style={{
            height: 6,
            backgroundColor: colors.borderLight,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              height: "100%",
              width: `${project.progress}%`,
              backgroundColor: getStatusColor(project.status),
              borderRadius: 3,
            }}
          />
        </View>
      </View>

      {/* Project Details */}
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 16,
            marginBottom: 8,
          }}
        >
          <Calendar size={12} color={colors.textSecondary} />
          <Text
            style={{ fontSize: 11, color: colors.textSecondary, marginLeft: 4 }}
          >
            {project.expectedCompletion}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 16,
            marginBottom: 8,
          }}
        >
          <Target size={12} color={getPriorityColor(project.priority)} />
          <Text
            style={{
              fontSize: 11,
              color: getPriorityColor(project.priority),
              marginLeft: 4,
              fontWeight: "500",
            }}
          >
            {project.priority} Priority
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 16,
            marginBottom: 8,
          }}
        >
          <Database size={12} color={colors.textSecondary} />
          <Text
            style={{ fontSize: 11, color: colors.textSecondary, marginLeft: 4 }}
          >
            {project.datasetSize}
          </Text>
        </View>
      </View>

      {/* Tags */}
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
      >
        {project.tags.map((tag, index) => (
          <View
            key={index}
            style={{
              backgroundColor: `${colors.primary}15`,
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
                color: colors.primary,
              }}
            >
              {tag}
            </Text>
          </View>
        ))}
      </View>

      {/* Collaborators and Actions */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          {project.collaborators.length > 0 && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Users size={14} color={colors.textSecondary} />
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textSecondary,
                  marginLeft: 4,
                }}
              >
                {project.collaborators.length} collaborator
                {project.collaborators.length !== 1 ? "s" : ""}
              </Text>
            </View>
          )}

          <Text
            style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2 }}
          >
            Updated {project.lastUpdate}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: `${colors.primary}15`,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.primary,
              marginRight: 4,
            }}
          >
            View Details
          </Text>
          <ChevronRight size={12} color={colors.primary} />
        </TouchableOpacity>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: colors.textPrimary,
            }}
          >
            Research Projects
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Plus size={16} color="white" />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
                marginLeft: 4,
              }}
            >
              New Project
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.surfaceVariant,
            borderRadius: 12,
            paddingHorizontal: 12,
            marginBottom: 16,
          }}
        >
          <Search size={18} color={colors.textSecondary} />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              color: colors.textPrimary,
              paddingVertical: 12,
              paddingHorizontal: 12,
            }}
            placeholder="Search research projects..."
            placeholderTextColor={colors.textSecondary}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={{
                  backgroundColor:
                    selectedTab === tab
                      ? colors.primary
                      : colors.surfaceVariant,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
                onPress={() => setSelectedTab(tab)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: selectedTab === tab ? "white" : colors.textSecondary,
                  }}
                >
                  {tab}
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
        {/* Research Insights */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          {researchInsights.map((insight, index) =>
            renderInsightCard(insight, index),
          )}
        </View>

        {/* Projects List */}
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
              {selectedTab} Projects ({filteredProjects.length})
            </Text>
          </View>

          {filteredProjects.map((project) => renderProjectCard(project))}
        </View>
      </ScrollView>
    </View>
  );
}

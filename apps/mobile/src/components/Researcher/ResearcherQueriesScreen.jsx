import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Search,
  Plus,
  BarChart3,
  Clock,
  Database,
  Target,
  Filter,
  ChevronRight,
  TrendingUp,
  Users,
  Activity,
  Settings,
  Eye,
  Save,
  Share,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

// Mock data for saved queries
const SAVED_QUERIES = [
  {
    id: 1,
    title: "IBS Herbal Medicine RCT Analysis",
    description: "Comprehensive analysis of herbal treatment effectiveness",
    blocks: 4,
    sampleSize: 15450,
    lastModified: "2 hours ago",
    status: "Active",
    category: "Treatment Efficacy",
    tags: ["RCT", "IBS", "Herbal Medicine"],
    power: 92,
    completeness: 94,
  },
  {
    id: 2,
    title: "Depression & Meditation Longitudinal Study",
    description: "Long-term outcomes of meditation-based interventions",
    blocks: 3,
    sampleSize: 8920,
    lastModified: "1 day ago",
    status: "Pending Review",
    category: "Mental Health",
    tags: ["Depression", "Meditation", "Longitudinal"],
    power: 87,
    completeness: 91,
  },
  {
    id: 3,
    title: "Chronic Pain Management Subgroup Analysis",
    description: "Age-stratified analysis of pain management interventions",
    blocks: 5,
    sampleSize: 12680,
    lastModified: "3 days ago",
    status: "Complete",
    category: "Pain Management",
    tags: ["Chronic Pain", "Subgroup", "Acupuncture"],
    power: 89,
    completeness: 88,
  },
  {
    id: 4,
    title: "Anxiety Treatment Response Predictors",
    description: "Identifying baseline predictors of treatment response",
    blocks: 6,
    sampleSize: 9340,
    lastModified: "1 week ago",
    status: "Draft",
    category: "Predictive Modeling",
    tags: ["Anxiety", "Predictors", "Machine Learning"],
    power: 85,
    completeness: 92,
  },
];

const QUERY_TEMPLATES = [
  {
    id: "efficacy",
    title: "Treatment Efficacy",
    description: "Standard efficacy analysis template",
    icon: Target,
    color: "#10B981",
    blocks: 4,
    estimatedSampleSize: "10K-20K",
  },
  {
    id: "safety",
    title: "Safety Profile",
    description: "Adverse events and safety analysis",
    icon: Activity,
    color: "#F59E0B",
    blocks: 3,
    estimatedSampleSize: "5K-15K",
  },
  {
    id: "subgroup",
    title: "Subgroup Analysis",
    description: "Population-specific outcomes",
    icon: Users,
    color: "#8B5CF6",
    blocks: 5,
    estimatedSampleSize: "8K-25K",
  },
  {
    id: "longitudinal",
    title: "Longitudinal Study",
    description: "Long-term follow-up analysis",
    icon: TrendingUp,
    color: "#EF4444",
    blocks: 4,
    estimatedSampleSize: "3K-12K",
  },
];

export function ResearcherQueriesScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Treatment Efficacy",
    "Mental Health",
    "Pain Management",
    "Predictive Modeling",
  ];

  const filteredQueries = SAVED_QUERIES.filter((query) => {
    const matchesSearch =
      query.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      query.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      query.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || query.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return colors.success;
      case "Pending Review":
        return colors.warning;
      case "Complete":
        return colors.primary;
      case "Draft":
        return colors.textSecondary;
      default:
        return colors.textSecondary;
    }
  };

  const renderQueryCard = (query) => (
    <TouchableOpacity
      key={query.id}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
      onPress={() => router.push("/query-builder")}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 8,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 4,
              lineHeight: 22,
            }}
          >
            {query.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              lineHeight: 18,
            }}
          >
            {query.description}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 8,
            backgroundColor: `${getStatusColor(query.status)}20`,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "600",
              color: getStatusColor(query.status),
            }}
          >
            {query.status}
          </Text>
        </View>
      </View>

      {/* Tags */}
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        {query.tags.slice(0, 3).map((tag, index) => (
          <View
            key={index}
            style={{
              backgroundColor: colors.background,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 12,
              marginRight: 6,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: colors.textSecondary,
                fontWeight: "500",
              }}
            >
              {tag}
            </Text>
          </View>
        ))}
      </View>

      {/* Statistics */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 14, fontWeight: "600", color: colors.primary }}
          >
            {query.blocks}
          </Text>
          <Text style={{ fontSize: 10, color: colors.textSecondary }}>
            Blocks
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 14, fontWeight: "600", color: colors.secondary }}
          >
            n={query.sampleSize.toLocaleString()}
          </Text>
          <Text style={{ fontSize: 10, color: colors.textSecondary }}>
            Sample Size
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: query.power >= 80 ? colors.success : colors.warning,
            }}
          >
            {query.power}%
          </Text>
          <Text style={{ fontSize: 10, color: colors.textSecondary }}>
            Power
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 14, fontWeight: "600", color: colors.accent }}
          >
            {query.completeness}%
          </Text>
          <Text style={{ fontSize: 10, color: colors.textSecondary }}>
            Complete
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Clock size={12} color={colors.textSecondary} />
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              marginLeft: 4,
            }}
          >
            {query.lastModified}
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.background,
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Eye size={12} color={colors.textPrimary} />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "500",
                color: colors.textPrimary,
                marginLeft: 4,
              }}
            >
              View
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Settings size={12} color="white" />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "500",
                color: "white",
                marginLeft: 4,
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderTemplateCard = (template) => {
    const Icon = template.icon;
    return (
      <TouchableOpacity
        key={template.id}
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          width: width * 0.42,
          marginRight: 12,
          borderLeftWidth: 4,
          borderLeftColor: template.color,
        }}
        onPress={() => router.push("/query-builder")}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Icon size={20} color={template.color} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginLeft: 8,
              flex: 1,
            }}
          >
            {template.title}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
            lineHeight: 16,
            marginBottom: 12,
          }}
        >
          {template.description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View>
            <Text style={{ fontSize: 10, color: colors.textSecondary }}>
              Blocks
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              {template.blocks}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, color: colors.textSecondary }}>
              Sample Size
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              {template.estimatedSampleSize}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: template.color,
            borderRadius: 8,
            paddingVertical: 8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "white",
            }}
          >
            Use Template
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          Research Queries
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
            marginBottom: 16,
          }}
        >
          Build and manage your data analysis queries
        </Text>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.surface,
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 12,
            marginBottom: 16,
          }}
        >
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 8,
              fontSize: 16,
              color: colors.textPrimary,
            }}
            placeholder="Search queries..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Create New Query Button */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: 12,
            paddingVertical: 14,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.push("/query-builder")}
        >
          <Plus size={20} color="white" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "white",
              marginLeft: 8,
            }}
          >
            Build New Query
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Query Templates */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: colors.textPrimary,
                marginBottom: 8,
              }}
            >
              Quick Start Templates
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
              }}
            >
              Pre-built query structures for common research patterns
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {QUERY_TEMPLATES.map(renderTemplateCard)}
          </ScrollView>
        </View>

        {/* Category Filter */}
        <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", gap: 8 }}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor:
                      selectedCategory === category
                        ? colors.primary
                        : colors.surface,
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
                          : colors.textPrimary,
                    }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Saved Queries */}
        <View
          style={{ paddingHorizontal: 20, paddingBottom: insets.bottom + 20 }}
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
                fontSize: 18,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              Your Queries
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
              }}
            >
              {filteredQueries.length} queries
            </Text>
          </View>

          {filteredQueries.length === 0 ? (
            <View
              style={{
                backgroundColor: colors.surface,
                borderRadius: 16,
                padding: 32,
                alignItems: "center",
              }}
            >
              <Database
                size={48}
                color={colors.textSecondary}
                style={{ opacity: 0.5 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.textPrimary,
                  marginTop: 16,
                  marginBottom: 8,
                }}
              >
                No queries found
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.textSecondary,
                  textAlign: "center",
                  lineHeight: 20,
                }}
              >
                {searchQuery
                  ? "Try adjusting your search terms"
                  : "Create your first query to get started"}
              </Text>
            </View>
          ) : (
            filteredQueries.map(renderQueryCard)
          )}
        </View>
      </ScrollView>
    </View>
  );
}

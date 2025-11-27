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
  FileText,
  Search,
  Filter,
  Download,
  Share,
  Star,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Eye,
  MessageCircle,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export function PublicationsScreen() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "My Publications",
    "Collaborations",
    "Citations",
    "Draft",
  ];

  // Mock publications data
  const publications = [
    {
      id: 1,
      title: "Mental Health Trends in Digital Wellness Interventions",
      authors: ["Dr. Sarah Chen", "Dr. Michael Roberts", "Dr. Lisa Wang"],
      journal: "Journal of Digital Health",
      publishedDate: "2024-11-15",
      status: "Published",
      citations: 24,
      downloads: 1247,
      type: "Research Article",
      tags: ["Mental Health", "Digital Interventions", "Wellness"],
      abstract:
        "A comprehensive analysis of digital wellness interventions and their impact on mental health outcomes...",
      doi: "10.1016/j.jdh.2024.11.001",
      isCollaboration: false,
    },
    {
      id: 2,
      title: "Nutrition Data Analytics: Patterns in Modern Dietary Behaviors",
      authors: ["Dr. Sarah Chen", "Dr. Amanda Torres", "Prof. James Liu"],
      journal: "Nutrition Research Today",
      publishedDate: "2024-10-22",
      status: "Published",
      citations: 18,
      downloads: 892,
      type: "Research Article",
      tags: ["Nutrition", "Data Analytics", "Behavioral Patterns"],
      abstract:
        "This study examines modern dietary patterns through comprehensive data analytics...",
      doi: "10.1016/j.nrt.2024.10.015",
      isCollaboration: true,
    },
    {
      id: 3,
      title: "Sleep Quality Metrics: A Multi-Variable Analysis",
      authors: ["Dr. Sarah Chen", "Dr. Kevin Park"],
      journal: "Sleep Medicine Review",
      publishedDate: "2024-09-10",
      status: "Published",
      citations: 31,
      downloads: 1456,
      type: "Review Article",
      tags: ["Sleep", "Analytics", "Health Metrics"],
      abstract:
        "Comprehensive review of sleep quality measurement methodologies and their clinical applications...",
      doi: "10.1016/j.smr.2024.09.003",
      isCollaboration: false,
    },
    {
      id: 4,
      title: "Chronic Pain Management: Data-Driven Therapeutic Approaches",
      authors: ["Dr. Sarah Chen", "Dr. Robert Martinez", "Dr. Emily Thompson"],
      journal: "Pain Management Journal",
      publishedDate: "In Review",
      status: "Under Review",
      citations: 0,
      downloads: 0,
      type: "Research Article",
      tags: ["Chronic Pain", "Data Science", "Therapeutics"],
      abstract:
        "Novel approaches to chronic pain management utilizing comprehensive patient data analysis...",
      doi: "Pending",
      isCollaboration: true,
    },
    {
      id: 5,
      title: "Wellness Technology Adoption in Healthcare Settings",
      authors: ["Dr. Sarah Chen", "Dr. David Kim"],
      journal: "Draft",
      publishedDate: "Draft",
      status: "Draft",
      citations: 0,
      downloads: 0,
      type: "Research Article",
      tags: ["Wellness Technology", "Healthcare", "Adoption"],
      abstract:
        "Analysis of wellness technology adoption patterns in various healthcare settings...",
      doi: "Draft",
      isCollaboration: false,
    },
  ];

  const stats = [
    { label: "Total Publications", value: "23", icon: FileText },
    { label: "Total Citations", value: "847", icon: Star },
    { label: "H-Index", value: "12", icon: Award },
    { label: "Total Downloads", value: "15.2K", icon: Download },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return colors.success;
      case "Under Review":
        return colors.warning;
      case "Draft":
        return colors.textSecondary;
      default:
        return colors.textSecondary;
    }
  };

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchText.toLowerCase()) ||
      pub.tags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase()),
      );

    const matchesFilter =
      selectedFilter === "All" ||
      (selectedFilter === "My Publications" && !pub.isCollaboration) ||
      (selectedFilter === "Collaborations" && pub.isCollaboration) ||
      (selectedFilter === "Citations" && pub.citations > 0) ||
      (selectedFilter === "Draft" && pub.status === "Draft");

    return matchesSearch && matchesFilter;
  });

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

  const renderPublicationCard = (publication) => (
    <TouchableOpacity
      key={publication.id}
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
            {publication.title}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: colors.textSecondary,
              marginBottom: 8,
            }}
          >
            {publication.authors.join(", ")}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: getStatusColor(publication.status) + "20",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "600",
              color: getStatusColor(publication.status),
            }}
          >
            {publication.status}
          </Text>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: colors.textPrimary,
            marginRight: 8,
          }}
        >
          {publication.journal}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
          }}
        >
          • {publication.publishedDate}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 13,
          color: colors.textSecondary,
          lineHeight: 18,
          marginBottom: 12,
        }}
        numberOfLines={2}
      >
        {publication.abstract}
      </Text>

      <View
        style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}
      >
        {publication.tags.map((tag, index) => (
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Star size={14} color={colors.textSecondary} />
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginLeft: 4,
              }}
            >
              {publication.citations}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Download size={14} color={colors.textSecondary} />
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginLeft: 4,
              }}
            >
              {publication.downloads}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity>
            <Share size={16} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Eye size={16} color={colors.primary} />
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
          Publications
        </Text>

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
            placeholder="Search publications..."
            placeholderTextColor={colors.textSecondary}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={{
                  backgroundColor:
                    selectedFilter === filter
                      ? colors.primary
                      : colors.surfaceVariant,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color:
                      selectedFilter === filter
                        ? "white"
                        : colors.textSecondary,
                  }}
                >
                  {filter}
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
        {/* Stats Grid */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          {stats.map((stat, index) => renderStatsCard(stat, index))}
        </View>

        {/* Publications List */}
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
              Research Publications ({filteredPublications.length})
            </Text>
          </View>

          {filteredPublications.map((publication) =>
            renderPublicationCard(publication),
          )}
        </View>
      </ScrollView>
    </View>
  );
}

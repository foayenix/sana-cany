import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Search,
  Filter,
  Download,
  Eye,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  BarChart3,
  Award,
  Users,
  ExternalLink,
  Trash2,
  RefreshCw,
  Shield,
  BookOpen,
  Star,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function MyDatasetsPage() {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Mock data for different dataset statuses
  const pendingDatasets = [
    {
      id: "PD001",
      name: "Chronic Pain Management - Multi-Modal Approach",
      requestDate: "2024-11-20",
      status: "Under Review",
      progress: 65,
      expectedDate: "2024-12-05",
      reviewStage: "Ethics Review",
      sampleSize: 12500,
    },
    {
      id: "PD002",
      name: "Depression Treatment Outcomes - Mindfulness Study",
      requestDate: "2024-11-18",
      status: "Documentation Required",
      progress: 30,
      expectedDate: "2024-12-15",
      reviewStage: "Initial Review",
      sampleSize: 8900,
    },
    {
      id: "PD003",
      name: "Diabetes Management - Lifestyle Interventions",
      requestDate: "2024-11-15",
      status: "Final Approval",
      progress: 90,
      expectedDate: "2024-11-28",
      reviewStage: "Data Custodian",
      sampleSize: 15200,
    },
  ];

  const approvedDatasets = [
    {
      id: "AD001",
      name: "IBS Treatment Outcomes - Herbal Medicine",
      approvedDate: "2024-10-15",
      validUntil: "2025-10-15",
      downloaded: true,
      usagePercent: 85,
      sampleSize: 15450,
      lastAccessed: "2024-11-22",
      analysisComplete: true,
    },
    {
      id: "AD002",
      name: "Anxiety Disorders - Cognitive Behavioral Therapy",
      approvedDate: "2024-09-20",
      validUntil: "2025-09-20",
      downloaded: true,
      usagePercent: 60,
      sampleSize: 9800,
      lastAccessed: "2024-11-20",
      analysisComplete: false,
    },
    {
      id: "AD003",
      name: "Hypertension Management - Dietary Approaches",
      approvedDate: "2024-08-10",
      validUntil: "2025-08-10",
      downloaded: false,
      usagePercent: 0,
      sampleSize: 11200,
      lastAccessed: null,
      analysisComplete: false,
    },
    {
      id: "AD004",
      name: "Sleep Disorders - Acupuncture Efficacy",
      approvedDate: "2024-07-05",
      validUntil: "2025-07-05",
      downloaded: true,
      usagePercent: 40,
      sampleSize: 7600,
      lastAccessed: "2024-11-10",
      analysisComplete: false,
    },
    {
      id: "AD005",
      name: "Migraine Treatment - Herbal vs Conventional",
      approvedDate: "2024-06-15",
      validUntil: "2025-06-15",
      downloaded: true,
      usagePercent: 95,
      sampleSize: 13900,
      lastAccessed: "2024-11-19",
      analysisComplete: true,
    },
  ];

  const expiredDatasets = [
    {
      id: "ED001",
      name: "Arthritis Pain - Exercise vs Medication",
      expiredDate: "2024-05-15",
      originalValid: "2023-05-15",
      canRenew: true,
      sampleSize: 8500,
    },
    {
      id: "ED002",
      name: "Mental Health - Telemedicine Effectiveness",
      expiredDate: "2024-03-20",
      originalValid: "2023-03-20",
      canRenew: false,
      sampleSize: 6700,
    },
  ];

  const completedDatasets = [
    {
      id: "CD001",
      name: "IBS Treatment Outcomes - Herbal Medicine",
      studyTitle:
        "Efficacy of Standardized Herbal Protocols in IBS Management: A Multi-Center RCT",
      status: "Published",
      publicationDate: "2024-10-01",
      journal: "Journal of Integrative Medicine Research",
      doi: "10.1000/182",
      sanaAcknowledged: true,
      sampleSize: 15450,
      citations: 12,
    },
  ];

  const usageStats = {
    totalDatasets: 11,
    recordsAnalyzed: 67450,
    publications: 2,
    citations: 78,
    collaborations: 4,
    activeProjects: 5,
  };

  const complianceStatus = [
    {
      item: "Data Use Agreements Current",
      status: "good",
      details: "All 7 agreements valid",
    },
    {
      item: "Ethics Approvals Valid",
      status: "good",
      details: "IRB approvals current",
    },
    {
      item: "Data Security Certified",
      status: "good",
      details: "Security audit passed",
    },
    {
      item: "Publication Requirements Met",
      status: "good",
      details: "SANA acknowledged in all pubs",
    },
    {
      item: "Access Renewal Due",
      status: "warning",
      details: "2 datasets expire in 90 days",
    },
  ];

  const tabs = [
    {
      id: "pending",
      title: "Pending",
      count: pendingDatasets.length,
      color: colors.warning,
    },
    {
      id: "approved",
      title: "Approved",
      count: approvedDatasets.length,
      color: colors.success,
    },
    {
      id: "expired",
      title: "Expired",
      count: expiredDatasets.length,
      color: colors.error,
    },
    {
      id: "completed",
      title: "Completed",
      count: completedDatasets.length,
      color: colors.primary,
    },
  ];

  const renderPendingCard = (dataset) => (
    <View
      key={dataset.id}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: colors.warning,
      }}
    >
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
            }}
          >
            {dataset.name}
          </Text>
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Requested: {new Date(dataset.requestDate).toLocaleDateString()} • n=
            {dataset.sampleSize.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 12 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
            }}
          >
            {dataset.status}
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "600", color: colors.warning }}
          >
            {dataset.progress}%
          </Text>
        </View>

        <View
          style={{
            height: 6,
            backgroundColor: colors.borderLight,
            borderRadius: 3,
            overflow: "hidden",
            marginBottom: 8,
          }}
        >
          <View
            style={{
              width: `${dataset.progress}%`,
              height: "100%",
              backgroundColor: colors.warning,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Stage: {dataset.reviewStage}
          </Text>
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Expected: {new Date(dataset.expectedDate).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.push("/dataset-detail")}
        >
          <Eye size={14} color="white" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "white",
              marginLeft: 4,
            }}
          >
            View
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <MessageCircle size={14} color={colors.textPrimary} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textPrimary,
              marginLeft: 4,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.error,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          onPress={() =>
            Alert.alert(
              "Withdraw Request",
              "Are you sure you want to withdraw this request?",
            )
          }
        >
          <Trash2 size={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderApprovedCard = (dataset) => (
    <View
      key={dataset.id}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: colors.success,
      }}
    >
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
            }}
          >
            {dataset.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              Approved: {new Date(dataset.approvedDate).toLocaleDateString()}
            </Text>
            <View
              style={{
                width: 4,
                height: 4,
                backgroundColor: colors.textSecondary,
                borderRadius: 2,
                marginHorizontal: 8,
              }}
            />
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              n={dataset.sampleSize.toLocaleString()}
            </Text>
          </View>
        </View>

        {dataset.downloaded && (
          <View
            style={{
              backgroundColor: `${colors.success}20`,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
            }}
          >
            <Text
              style={{ fontSize: 10, fontWeight: "600", color: colors.success }}
            >
              Downloaded
            </Text>
          </View>
        )}
      </View>

      <View style={{ marginBottom: 12 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Analysis Progress
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color:
                dataset.usagePercent === 100 ? colors.success : colors.primary,
            }}
          >
            {dataset.usagePercent}%
          </Text>
        </View>

        <View
          style={{
            height: 6,
            backgroundColor: colors.borderLight,
            borderRadius: 3,
            overflow: "hidden",
            marginBottom: 8,
          }}
        >
          <View
            style={{
              width: `${dataset.usagePercent}%`,
              height: "100%",
              backgroundColor:
                dataset.usagePercent === 100 ? colors.success : colors.primary,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Valid until: {new Date(dataset.validUntil).toLocaleDateString()}
          </Text>
          {dataset.lastAccessed && (
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              Last accessed:{" "}
              {new Date(dataset.lastAccessed).toLocaleDateString()}
            </Text>
          )}
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: dataset.downloaded
              ? colors.secondary
              : colors.primary,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Download size={14} color="white" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "white",
              marginLeft: 4,
            }}
          >
            {dataset.downloaded ? "Re-download" : "Download"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.border,
          }}
          onPress={() => router.push("/dataset-detail")}
        >
          <Eye size={14} color={colors.textPrimary} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textPrimary,
              marginLeft: 4,
            }}
          >
            View Terms
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.accent,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
        >
          <RefreshCw size={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderExpiredCard = (dataset) => (
    <View
      key={dataset.id}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: colors.error,
      }}
    >
      <View style={{ marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 4,
          }}
        >
          {dataset.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Expired: {new Date(dataset.expiredDate).toLocaleDateString()}
          </Text>
          <View
            style={{
              width: 4,
              height: 4,
              backgroundColor: colors.textSecondary,
              borderRadius: 2,
              marginHorizontal: 8,
            }}
          />
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            n={dataset.sampleSize.toLocaleString()}
          </Text>
        </View>

        {!dataset.canRenew && (
          <View
            style={{
              backgroundColor: `${colors.error}20`,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{ fontSize: 10, fontWeight: "600", color: colors.error }}
            >
              Renewal Not Available
            </Text>
          </View>
        )}
      </View>

      <View style={{ flexDirection: "row", gap: 8 }}>
        {dataset.canRenew ? (
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: colors.primary,
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RefreshCw size={14} color="white" />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "white",
                marginLeft: 4,
              }}
            >
              Renew Access
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: colors.borderLight,
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: colors.textSecondary,
              }}
            >
              Cannot Renew
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Trash2 size={14} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCompletedCard = (dataset) => (
    <View
      key={dataset.id}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
      }}
    >
      <View style={{ marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 4,
          }}
        >
          {dataset.studyTitle}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
            marginBottom: 8,
            lineHeight: 20,
          }}
        >
          Dataset: {dataset.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <View
            style={{
              backgroundColor: `${colors.success}20`,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <Text
              style={{ fontSize: 10, fontWeight: "600", color: colors.success }}
            >
              Published
            </Text>
          </View>

          {dataset.sanaAcknowledged && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckCircle size={14} color={colors.success} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "500",
                  color: colors.success,
                  marginLeft: 4,
                }}
              >
                SANA Acknowledged
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            {dataset.journal} •{" "}
            {new Date(dataset.publicationDate).toLocaleDateString()}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
            fontFamily: "monospace",
          }}
        >
          DOI: {dataset.doi} • {dataset.citations} citations
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ExternalLink size={14} color="white" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "white",
              marginLeft: 4,
            }}
          >
            View Publication
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.border,
          }}
          onPress={() => router.push("/dataset-detail")}
        >
          <Eye size={14} color={colors.textPrimary} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textPrimary,
              marginLeft: 4,
            }}
          >
            Dataset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderUsageStats = () => (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Usage Summary
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
        {[
          {
            label: "Total Datasets",
            value: usageStats.totalDatasets,
            icon: FileText,
            color: colors.primary,
          },
          {
            label: "Records Analyzed",
            value: usageStats.recordsAnalyzed.toLocaleString(),
            icon: BarChart3,
            color: colors.success,
          },
          {
            label: "Publications",
            value: usageStats.publications,
            icon: BookOpen,
            color: colors.accent,
          },
          {
            label: "Citations",
            value: usageStats.citations,
            icon: Award,
            color: colors.warning,
          },
          {
            label: "Collaborations",
            value: usageStats.collaborations,
            icon: Users,
            color: colors.secondary,
          },
          {
            label: "Active Projects",
            value: usageStats.activeProjects,
            icon: Star,
            color: colors.error,
          },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <View
              key={index}
              style={{
                backgroundColor: colors.background,
                borderRadius: 12,
                padding: 12,
                minWidth: (width - 72) / 3,
                alignItems: "center",
              }}
            >
              <Icon size={20} color={stat.color} style={{ marginBottom: 4 }} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: colors.textPrimary,
                }}
              >
                {stat.value}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: colors.textSecondary,
                  textAlign: "center",
                }}
              >
                {stat.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );

  const renderComplianceStatus = () => (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Compliance Status
      </Text>

      {complianceStatus.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            borderBottomWidth: index < complianceStatus.length - 1 ? 1 : 0,
            borderBottomColor: colors.borderLight,
          }}
        >
          {item.status === "good" ? (
            <CheckCircle size={16} color={colors.success} />
          ) : (
            <AlertTriangle size={16} color={colors.warning} />
          )}

          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: colors.textPrimary,
              }}
            >
              {item.item}
            </Text>
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              {item.details}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "pending":
        return (
          <View>
            {pendingDatasets.map(renderPendingCard)}
            {renderUsageStats()}
            {renderComplianceStatus()}
          </View>
        );
      case "approved":
        return (
          <View>
            {approvedDatasets.map(renderApprovedCard)}
            {renderUsageStats()}
            {renderComplianceStatus()}
          </View>
        );
      case "expired":
        return (
          <View>
            {expiredDatasets.map(renderExpiredCard)}
            {renderUsageStats()}
            {renderComplianceStatus()}
          </View>
        );
      case "completed":
        return (
          <View>
            {completedDatasets.map(renderCompletedCard)}
            {renderUsageStats()}
            {renderComplianceStatus()}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.textPrimary} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: colors.textPrimary,
              flex: 1,
              marginLeft: 16,
            }}
          >
            My Datasets
          </Text>

          <TouchableOpacity onPress={() => setShowFilterModal(true)}>
            <Filter size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.surface,
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 12,
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
            placeholder="Search datasets..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 16 }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor:
                activeTab === tab.id ? tab.color : colors.surface,
              marginRight: 12,
            }}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: activeTab === tab.id ? "white" : colors.textPrimary,
                marginRight: 6,
              }}
            >
              {tab.title}
            </Text>

            <View
              style={{
                backgroundColor:
                  activeTab === tab.id
                    ? "rgba(255,255,255,0.3)"
                    : `${tab.color}20`,
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: activeTab === tab.id ? "white" : tab.color,
                }}
              >
                {tab.count}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
}

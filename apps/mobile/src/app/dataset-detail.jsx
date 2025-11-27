import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Share,
  Star,
  Download,
  FileText,
  Database,
  Users,
  BookOpen,
  CheckCircle,
  Search,
  Upload,
  Copy,
  ExternalLink,
  Calendar,
  BarChart3,
  Award,
  Shield,
  Clock,
  ChevronDown,
  Info,
  Trash2,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";
import * as DocumentPicker from "expo-document-picker";

export default function DatasetDetailPage() {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [requestForm, setRequestForm] = useState({
    name: "",
    institution: "",
    orcid: "",
    email: "",
    role: "",
    studyTitle: "",
    researchQuestion: "",
    methodology: "",
    ethicsFile: null,
    agreements: {
      dataUse: false,
      confidentiality: false,
      sharing: false,
      citation: false,
    },
    justification: "",
  });
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Mock dataset data
  const dataset = {
    id: "DS001",
    title: "IBS Treatment Outcomes - Herbal Medicine",
    qualityScore: 92,
    doi: "10.1000/182",
    version: "2.1.0",
    description:
      "A comprehensive longitudinal study examining the efficacy of standardized herbal medicine protocols in treating Irritable Bowel Syndrome (IBS). This multi-center study tracked patient outcomes across 24 months, measuring symptom severity, quality of life metrics, and treatment adherence patterns. The study employed a randomized controlled design with matched placebo controls and included detailed biomarker analysis.",
    keyFindings: {
      primaryOutcome: "67% improvement in IBS symptom severity scores",
      cohensD: 0.84,
      nnt: 3.2,
      pValue: "<0.001",
      confidenceInterval: "95% CI: 0.62-0.91",
    },
    sampleSize: 15450,
    practitionerCount: 890,
    dateRange: "2020-2024",
    followUpDuration: "24 months",
    completeness: 92,
    outcomeTracking: 87,
    variableCategories: [
      { category: "Demographics", count: 12, completeness: 98 },
      { category: "Clinical Outcomes", count: 24, completeness: 89 },
      { category: "Treatment Details", count: 18, completeness: 94 },
      { category: "Quality of Life", count: 15, completeness: 91 },
      { category: "Biomarkers", count: 8, completeness: 85 },
    ],
    statisticalConsiderations: [
      "Multiple imputation used for missing data (<5%)",
      "Bonferroni correction applied for multiple comparisons",
      "Propensity score matching for treatment assignment",
      "Mixed-effects models account for practitioner clustering",
      "Intent-to-treat and per-protocol analyses conducted",
    ],
    ethicsCompliance: [
      {
        item: "IRB Approval",
        completed: true,
        details: "Multi-site IRB approval #2020-045",
      },
      {
        item: "Informed Consent",
        completed: true,
        details: "Written consent obtained from all participants",
      },
      {
        item: "Data Privacy",
        completed: true,
        details: "HIPAA compliant data handling procedures",
      },
      {
        item: "Publication Ethics",
        completed: true,
        details: "Pre-registered study protocol (ClinicalTrials.gov)",
      },
    ],
    citation: `Johnson, M. K., Smith, R. L., Chen, X., & Williams, A. B. (2024). IBS Treatment Outcomes - Herbal Medicine: A Longitudinal Multi-Center Study. Journal of Integrative Medicine Research, 15(3), 245-267. DOI: 10.1000/182`,
  };

  const dataDictionary = [
    {
      name: "patient_id",
      description: "Unique patient identifier",
      type: "String",
      values: "Alphanumeric (8 chars)",
      completeness: 100,
    },
    {
      name: "age",
      description: "Patient age at enrollment",
      type: "Integer",
      values: "18-75",
      completeness: 99,
    },
    {
      name: "gender",
      description: "Self-reported gender identity",
      type: "Categorical",
      values: "Male, Female, Other, Prefer not to say",
      completeness: 98,
    },
    {
      name: "ibs_severity_baseline",
      description: "IBS Symptom Severity Score at baseline",
      type: "Integer",
      values: "0-500",
      completeness: 97,
    },
    {
      name: "ibs_severity_6m",
      description: "IBS Symptom Severity Score at 6 months",
      type: "Integer",
      values: "0-500",
      completeness: 89,
    },
    {
      name: "ibs_severity_12m",
      description: "IBS Symptom Severity Score at 12 months",
      type: "Integer",
      values: "0-500",
      completeness: 87,
    },
    {
      name: "ibs_severity_24m",
      description: "IBS Symptom Severity Score at 24 months",
      type: "Integer",
      values: "0-500",
      completeness: 85,
    },
    {
      name: "treatment_group",
      description: "Randomized treatment assignment",
      type: "Categorical",
      values: "Herbal, Placebo, Standard Care",
      completeness: 100,
    },
    {
      name: "herbal_formula",
      description: "Specific herbal formula used",
      type: "Categorical",
      values: "Formula A, Formula B, Formula C",
      completeness: 94,
    },
    {
      name: "adherence_6m",
      description: "Treatment adherence at 6 months (%)",
      type: "Float",
      values: "0.0-100.0",
      completeness: 91,
    },
    {
      name: "adherence_12m",
      description: "Treatment adherence at 12 months (%)",
      type: "Float",
      values: "0.0-100.0",
      completeness: 88,
    },
    {
      name: "adherence_24m",
      description: "Treatment adherence at 24 months (%)",
      type: "Float",
      values: "0.0-100.0",
      completeness: 86,
    },
    {
      name: "qol_baseline",
      description: "Quality of Life score at baseline",
      type: "Float",
      values: "0.0-100.0",
      completeness: 96,
    },
    {
      name: "qol_6m",
      description: "Quality of Life score at 6 months",
      type: "Float",
      values: "0.0-100.0",
      completeness: 90,
    },
    {
      name: "qol_12m",
      description: "Quality of Life score at 12 months",
      type: "Float",
      values: "0.0-100.0",
      completeness: 88,
    },
    {
      name: "qol_24m",
      description: "Quality of Life score at 24 months",
      type: "Float",
      values: "0.0-100.0",
      completeness: 85,
    },
    {
      name: "adverse_events",
      description: "Number of reported adverse events",
      type: "Integer",
      values: "0-15",
      completeness: 93,
    },
    {
      name: "dropout_reason",
      description: "Reason for study dropout",
      type: "Categorical",
      values:
        "Completed, Side effects, Lost to follow-up, Personal reasons, Other",
      completeness: 82,
    },
    {
      name: "practitioner_id",
      description: "Treating practitioner identifier",
      type: "String",
      values: "Alphanumeric (6 chars)",
      completeness: 99,
    },
    {
      name: "site_location",
      description: "Study site location",
      type: "Categorical",
      values: "Boston, Chicago, Denver, Portland, Austin",
      completeness: 100,
    },
    {
      name: "comorbidities",
      description: "Number of reported comorbidities",
      type: "Integer",
      values: "0-8",
      completeness: 95,
    },
    {
      name: "bmi",
      description: "Body Mass Index at enrollment",
      type: "Float",
      values: "16.5-45.2",
      completeness: 91,
    },
    {
      name: "stress_level",
      description: "Self-reported stress level (1-10)",
      type: "Integer",
      values: "1-10",
      completeness: 89,
    },
    {
      name: "diet_quality_score",
      description: "Standardized diet quality assessment",
      type: "Float",
      values: "0.0-100.0",
      completeness: 87,
    },
  ];

  const roleOptions = [
    "Principal Investigator",
    "Co-Investigator",
    "Research Fellow",
    "Graduate Student",
    "Data Analyst",
    "Other",
  ];

  const tabs = [
    { id: "overview", title: "Overview", icon: Info },
    { id: "dictionary", title: "Data Dictionary", icon: Database },
    { id: "access", title: "Access", icon: Users },
    { id: "publications", title: "Publications", icon: BookOpen },
    { id: "downloads", title: "Downloads", icon: Download },
  ];

  const filteredVariables = dataDictionary.filter(
    (variable) =>
      variable.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      variable.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      variable.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets[0]) {
        setRequestForm({
          ...requestForm,
          ethicsFile: result.assets[0],
        });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to select document");
    }
  };

  const handleSubmitRequest = () => {
    const requiredFields = [
      "name",
      "institution",
      "email",
      "role",
      "studyTitle",
      "researchQuestion",
      "methodology",
      "justification",
    ];
    const missingFields = requiredFields.filter((field) => !requestForm[field]);

    if (missingFields.length > 0) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    if (!Object.values(requestForm.agreements).every(Boolean)) {
      Alert.alert("Error", "Please accept all data use agreements");
      return;
    }

    setRequestSubmitted(true);
    Alert.alert("Success", "Access request submitted successfully");
  };

  const renderOverviewTab = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
      {/* Header */}
      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          {dataset.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <View
            style={{
              backgroundColor: `${colors.success}20`,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
              marginRight: 12,
            }}
          >
            <Text
              style={{ fontSize: 12, fontWeight: "600", color: colors.success }}
            >
              Quality Score: {dataset.qualityScore}/100
            </Text>
          </View>

          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            DOI: {dataset.doi} • Version {dataset.version}
          </Text>
        </View>
      </View>

      {/* Study Description */}
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
            marginBottom: 12,
          }}
        >
          Study Description
        </Text>
        <Text
          style={{ fontSize: 14, lineHeight: 22, color: colors.textSecondary }}
        >
          {dataset.description}
        </Text>
      </View>

      {/* Key Findings */}
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
            marginBottom: 12,
          }}
        >
          Key Findings
        </Text>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: colors.primary,
              marginBottom: 4,
            }}
          >
            {dataset.keyFindings.primaryOutcome}
          </Text>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
          <View
            style={{
              backgroundColor: colors.background,
              padding: 12,
              borderRadius: 12,
              flex: 1,
              minWidth: 120,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginBottom: 4,
              }}
            >
              Effect Size
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              Cohen's d = {dataset.keyFindings.cohensD}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: colors.background,
              padding: 12,
              borderRadius: 12,
              flex: 1,
              minWidth: 120,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginBottom: 4,
              }}
            >
              NNT
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              {dataset.keyFindings.nnt}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            padding: 12,
            backgroundColor: colors.background,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Statistical Significance
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
            }}
          >
            p {dataset.keyFindings.pValue} (
            {dataset.keyFindings.confidenceInterval})
          </Text>
        </View>
      </View>

      {/* Variable Summary */}
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
            marginBottom: 12,
          }}
        >
          Variable Summary
        </Text>

        {dataset.variableCategories.map((category, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 12,
              borderBottomWidth:
                index < dataset.variableCategories.length - 1 ? 1 : 0,
              borderBottomColor: colors.borderLight,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: colors.textPrimary,
                }}
              >
                {category.category}
              </Text>
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                {category.count} variables
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: colors.primary,
                }}
              >
                {category.completeness}%
              </Text>
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                complete
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Statistical Considerations */}
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
            marginBottom: 12,
          }}
        >
          Statistical Considerations
        </Text>

        {dataset.statisticalConsiderations.map((consideration, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 8,
            }}
          >
            <View
              style={{
                width: 6,
                height: 6,
                backgroundColor: colors.primary,
                borderRadius: 3,
                marginTop: 7,
                marginRight: 12,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: colors.textSecondary,
                flex: 1,
              }}
            >
              {consideration}
            </Text>
          </View>
        ))}
      </View>

      {/* Ethics & Compliance */}
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
            marginBottom: 12,
          }}
        >
          Ethics & Compliance
        </Text>

        {dataset.ethicsCompliance.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              paddingVertical: 12,
              borderBottomWidth:
                index < dataset.ethicsCompliance.length - 1 ? 1 : 0,
              borderBottomColor: colors.borderLight,
            }}
          >
            <CheckCircle
              size={20}
              color={colors.success}
              style={{ marginRight: 12, marginTop: 2 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: colors.textPrimary,
                  marginBottom: 4,
                }}
              >
                {item.item}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textSecondary,
                  lineHeight: 18,
                }}
              >
                {item.details}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Citation */}
      <View
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: colors.textPrimary,
            }}
          >
            Citation
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.background,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 8,
            }}
            onPress={() => {
              // Copy citation to clipboard
              Alert.alert("Success", "Citation copied to clipboard");
            }}
          >
            <Copy size={14} color={colors.textPrimary} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: colors.textPrimary,
                marginLeft: 6,
              }}
            >
              Copy
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 12,
            lineHeight: 18,
            color: colors.textSecondary,
            fontFamily: "monospace",
          }}
        >
          {dataset.citation}
        </Text>
      </View>
    </ScrollView>
  );

  const renderDataDictionaryTab = () => (
    <View style={{ flex: 1 }}>
      {/* Search and Export */}
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}
      >
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
            placeholder="Search variables..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {["CSV", "JSON", "SPSS", "Stata", "R"].map((format) => (
              <TouchableOpacity
                key={format}
                style={{
                  backgroundColor: colors.surface,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() =>
                  Alert.alert("Export", `Exporting as ${format}...`)
                }
              >
                <Download size={14} color={colors.textPrimary} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: colors.textPrimary,
                    marginLeft: 6,
                  }}
                >
                  {format}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Variables Table */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
            marginBottom: 16,
          }}
        >
          {filteredVariables.length} of {dataDictionary.length} variables
        </Text>

        {filteredVariables.map((variable, index) => (
          <View
            key={index}
            style={{
              backgroundColor: colors.surface,
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
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
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.textPrimary,
                  flex: 1,
                }}
              >
                {variable.name}
              </Text>
              <View
                style={{
                  backgroundColor:
                    variable.completeness >= 90
                      ? `${colors.success}20`
                      : `${colors.warning}20`,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "600",
                    color:
                      variable.completeness >= 90
                        ? colors.success
                        : colors.warning,
                  }}
                >
                  {variable.completeness}%
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                marginBottom: 8,
                lineHeight: 20,
              }}
            >
              {variable.description}
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                  Type
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: colors.textPrimary,
                  }}
                >
                  {variable.type}
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                  Values/Range
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: colors.textPrimary,
                  }}
                >
                  {variable.values}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const renderAccessTab = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
      {requestSubmitted ? (
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 20,
            alignItems: "center",
          }}
        >
          <Clock
            size={48}
            color={colors.warning}
            style={{ marginBottom: 16 }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Request Under Review
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.textSecondary,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Your access request has been submitted and is currently under review
            by the data custodians.
          </Text>

          <View
            style={{
              width: "100%",
              backgroundColor: colors.background,
              borderRadius: 8,
              padding: 16,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: colors.textSecondary,
                marginBottom: 8,
              }}
            >
              Review Progress
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: 4,
                  backgroundColor: colors.borderLight,
                  borderRadius: 2,
                }}
              >
                <View
                  style={{
                    width: "40%",
                    height: "100%",
                    backgroundColor: colors.warning,
                    borderRadius: 2,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: colors.warning,
                  marginLeft: 12,
                }}
              >
                40%
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              Estimated review time: 5-10 business days
            </Text>
          </View>
        </View>
      ) : (
        <>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 16,
            }}
          >
            Request Dataset Access
          </Text>

          {/* Personal Information */}
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
              Personal Information
            </Text>

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 12,
              }}
              placeholder="Full Name *"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.name}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, name: text })
              }
            />

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 12,
              }}
              placeholder="Institution/Organization *"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.institution}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, institution: text })
              }
            />

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 12,
              }}
              placeholder="ORCID (optional)"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.orcid}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, orcid: text })
              }
            />

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 12,
              }}
              placeholder="Email Address *"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.email}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, email: text })
              }
              keyboardType="email-address"
            />

            {/* Role Dropdown */}
            <TouchableOpacity
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onPress={() => {
                Alert.alert(
                  "Select Role",
                  "",
                  roleOptions.map((role) => ({
                    text: role,
                    onPress: () => setRequestForm({ ...requestForm, role }),
                  })),
                );
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: requestForm.role
                    ? colors.textPrimary
                    : colors.textSecondary,
                }}
              >
                {requestForm.role || "Select Role *"}
              </Text>
              <ChevronDown size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>

          {/* Study Information */}
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
              Study Information
            </Text>

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 12,
              }}
              placeholder="Study Title *"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.studyTitle}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, studyTitle: text })
              }
            />

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 12,
                minHeight: 80,
              }}
              placeholder="Research Question *"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.researchQuestion}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, researchQuestion: text })
              }
              multiline
              textAlignVertical="top"
            />

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 12,
                minHeight: 80,
              }}
              placeholder="Methodology *"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.methodology}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, methodology: text })
              }
              multiline
              textAlignVertical="top"
            />
          </View>

          {/* Ethics Approval Upload */}
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
              Ethics Approval
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 16,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                borderColor: colors.borderLight,
                borderStyle: "dashed",
              }}
              onPress={handleDocumentPick}
            >
              {requestForm.ethicsFile ? (
                <>
                  <FileText size={20} color={colors.success} />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: colors.textPrimary,
                      }}
                    >
                      {requestForm.ethicsFile.name}
                    </Text>
                    <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                      {(requestForm.ethicsFile.size / 1024).toFixed(1)} KB
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      setRequestForm({ ...requestForm, ethicsFile: null })
                    }
                  >
                    <Trash2 size={16} color={colors.error} />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Upload size={20} color={colors.textSecondary} />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: colors.textPrimary,
                      }}
                    >
                      Upload Ethics Approval
                    </Text>
                    <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                      PDF format, max 10MB
                    </Text>
                  </View>
                </>
              )}
            </TouchableOpacity>
          </View>

          {/* Data Use Agreements */}
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
              Data Use Agreements
            </Text>

            {[
              {
                key: "dataUse",
                text: "I agree to use this data solely for the stated research purpose",
              },
              {
                key: "confidentiality",
                text: "I will maintain confidentiality and not attempt to re-identify participants",
              },
              {
                key: "sharing",
                text: "I will not share this data with unauthorized third parties",
              },
              {
                key: "citation",
                text: "I will properly cite this dataset in any publications or presentations",
              },
            ].map((agreement, index) => (
              <TouchableOpacity
                key={agreement.key}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
                onPress={() =>
                  setRequestForm({
                    ...requestForm,
                    agreements: {
                      ...requestForm.agreements,
                      [agreement.key]: !requestForm.agreements[agreement.key],
                    },
                  })
                }
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    borderWidth: 2,
                    borderColor: requestForm.agreements[agreement.key]
                      ? colors.primary
                      : colors.borderLight,
                    backgroundColor: requestForm.agreements[agreement.key]
                      ? colors.primary
                      : "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12,
                    marginTop: 2,
                  }}
                >
                  {requestForm.agreements[agreement.key] && (
                    <CheckCircle size={12} color="white" />
                  )}
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.textPrimary,
                    flex: 1,
                    lineHeight: 20,
                  }}
                >
                  {agreement.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Justification */}
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
              Justification
            </Text>

            <TextInput
              style={{
                backgroundColor: colors.background,
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                fontSize: 16,
                color: colors.textPrimary,
                minHeight: 120,
              }}
              placeholder="Please explain how this dataset will contribute to your research and why access is necessary *"
              placeholderTextColor={colors.textSecondary}
              value={requestForm.justification}
              onChangeText={(text) =>
                setRequestForm({ ...requestForm, justification: text })
              }
              multiline
              textAlignVertical="top"
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
            onPress={handleSubmitRequest}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
              Submit Access Request
            </Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );

  const renderPublicationsTab = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Related Publications
      </Text>

      {/* Primary Publication */}
      <View
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Award size={16} color={colors.primary} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: colors.primary,
              marginLeft: 6,
            }}
          >
            PRIMARY PUBLICATION
          </Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 8,
            lineHeight: 22,
          }}
        >
          IBS Treatment Outcomes - Herbal Medicine: A Longitudinal Multi-Center
          Study
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
            marginBottom: 12,
          }}
        >
          Johnson, M. K., Smith, R. L., Chen, X., & Williams, A. B.
        </Text>

        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
            marginBottom: 12,
          }}
        >
          Journal of Integrative Medicine Research • Vol 15, No 3 • 2024
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            DOI: 10.1000/182 • Citations: 47
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <ExternalLink size={14} color="white" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "white",
              marginLeft: 6,
            }}
          >
            View Article
          </Text>
        </TouchableOpacity>
      </View>

      {/* Related Publications */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 12,
        }}
      >
        Related Studies
      </Text>

      {[
        {
          title: "Biomarker Patterns in Herbal Medicine Treatment Response",
          authors: "Chen, X., Johnson, M. K., et al.",
          journal: "Biomarkers in Medicine • 2024",
          citations: 23,
        },
        {
          title: "Long-term Safety Profile of Standardized Herbal Protocols",
          authors: "Williams, A. B., Smith, R. L., et al.",
          journal: "Safety in Integrative Medicine • 2024",
          citations: 18,
        },
        {
          title: "Patient-Reported Outcomes in IBS: A Meta-Analysis",
          authors: "Smith, R. L., Johnson, M. K., et al.",
          journal: "Patient-Reported Outcomes Review • 2023",
          citations: 34,
        },
      ].map((publication, index) => (
        <View
          key={index}
          style={{
            backgroundColor: colors.surface,
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
              marginBottom: 6,
              lineHeight: 20,
            }}
          >
            {publication.title}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            {publication.authors}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              marginBottom: 8,
            }}
          >
            {publication.journal}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              {publication.citations} citations
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: colors.background,
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ExternalLink size={12} color={colors.textPrimary} />
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
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const renderDownloadsTab = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Available Downloads
      </Text>

      {/* Dataset Files */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 12,
        }}
      >
        Dataset Files
      </Text>

      {[
        {
          name: "Complete Dataset",
          description: "Full dataset with all 15,450 patient records",
          format: "CSV",
          size: "245 MB",
          restricted: true,
        },
        {
          name: "Anonymized Sample",
          description: "Random 10% sample for evaluation purposes",
          format: "CSV",
          size: "24 MB",
          restricted: false,
        },
        {
          name: "Summary Statistics",
          description: "Descriptive statistics and variable summaries",
          format: "PDF",
          size: "2.1 MB",
          restricted: false,
        },
      ].map((file, index) => (
        <View
          key={index}
          style={{
            backgroundColor: colors.surface,
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
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
                  fontSize: 14,
                  fontWeight: "600",
                  color: colors.textPrimary,
                  marginBottom: 4,
                }}
              >
                {file.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textSecondary,
                  marginBottom: 6,
                  lineHeight: 18,
                }}
              >
                {file.description}
              </Text>
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                {file.format} • {file.size}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: file.restricted
                  ? colors.borderLight
                  : colors.primary,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
              disabled={file.restricted}
              onPress={() => {
                if (!file.restricted) {
                  Alert.alert("Download", `Downloading ${file.name}...`);
                }
              }}
            >
              {file.restricted ? (
                <Shield size={14} color={colors.textSecondary} />
              ) : (
                <Download size={14} color="white" />
              )}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: file.restricted ? colors.textSecondary : "white",
                  marginLeft: 6,
                }}
              >
                {file.restricted ? "Restricted" : "Download"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Documentation */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 12,
          marginTop: 20,
        }}
      >
        Documentation
      </Text>

      {[
        {
          name: "Study Protocol",
          description: "Detailed methodology and procedures",
          format: "PDF",
          size: "1.8 MB",
        },
        {
          name: "Data Dictionary",
          description: "Complete variable definitions and coding",
          format: "Excel",
          size: "456 KB",
        },
        {
          name: "Analysis Code",
          description: "R scripts for primary analyses",
          format: "R",
          size: "125 KB",
        },
        {
          name: "Quality Report",
          description: "Data quality assessment and validation",
          format: "PDF",
          size: "3.2 MB",
        },
      ].map((doc, index) => (
        <View
          key={index}
          style={{
            backgroundColor: colors.surface,
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: colors.textPrimary,
                  marginBottom: 4,
                }}
              >
                {doc.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textSecondary,
                  marginBottom: 4,
                }}
              >
                {doc.description}
              </Text>
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                {doc.format} • {doc.size}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() =>
                Alert.alert("Download", `Downloading ${doc.name}...`)
              }
            >
              <Download size={14} color="white" />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "white",
                  marginLeft: 6,
                }}
              >
                Download
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverviewTab();
      case "dictionary":
        return renderDataDictionaryTab();
      case "access":
        return renderAccessTab();
      case "publications":
        return renderPublicationsTab();
      case "downloads":
        return renderDownloadsTab();
      default:
        return renderOverviewTab();
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
          Dataset Details
        </Text>

        <TouchableOpacity>
          <Share size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 16 }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <TouchableOpacity
              key={tab.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
                backgroundColor: isActive ? colors.primary : colors.surface,
                marginRight: 8,
              }}
              onPress={() => setActiveTab(tab.id)}
            >
              <Icon
                size={16}
                color={isActive ? "white" : colors.textSecondary}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: isActive ? "white" : colors.textSecondary,
                  marginLeft: 6,
                }}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Tab Content */}
      {renderTabContent()}
    </View>
  );
}

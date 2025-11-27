import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Modal,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Search,
  Filter,
  X,
  Eye,
  Users,
  Calendar,
  BarChart3,
  CheckCircle,
  Clock,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

// Dummy dataset data
const DUMMY_DATASETS = [
  {
    id: "DS001",
    title: "IBS Treatment Outcomes - Herbal Medicine",
    sampleSize: 15450,
    practitionerCount: 890,
    dateRange: "2020-2024",
    followUpDuration: "24 months",
    completeness: 92,
    outcomeTracking: 87,
    condition: "IBS",
    modality: "Herbal Medicine",
    ageRange: [18, 75],
    accessLevel: "Open",
    ageDistribution: [12, 18, 25, 22, 15, 8],
    genderDistribution: { male: 35, female: 60, other: 5 },
  },
  {
    id: "DS002",
    title: "Mental Health & Meditation - 5 Year Study",
    sampleSize: 8920,
    practitionerCount: 245,
    dateRange: "2019-2024",
    followUpDuration: "60 months",
    completeness: 89,
    outcomeTracking: 94,
    condition: "Depression",
    modality: "Meditation",
    ageRange: [21, 65],
    accessLevel: "Restricted",
    ageDistribution: [8, 22, 28, 25, 12, 5],
    genderDistribution: { male: 28, female: 68, other: 4 },
  },
  {
    id: "DS003",
    title: "Chronic Pain Management - Acupuncture Protocol",
    sampleSize: 12680,
    practitionerCount: 156,
    dateRange: "2021-2024",
    followUpDuration: "18 months",
    completeness: 85,
    outcomeTracking: 91,
    condition: "Chronic Pain",
    modality: "Acupuncture",
    ageRange: [25, 80],
    accessLevel: "Open",
    ageDistribution: [5, 15, 20, 28, 22, 10],
    genderDistribution: { male: 42, female: 54, other: 4 },
  },
  {
    id: "DS004",
    title: "Sleep Disorders - Behavioral Intervention Study",
    sampleSize: 6750,
    practitionerCount: 89,
    dateRange: "2022-2024",
    followUpDuration: "12 months",
    completeness: 96,
    outcomeTracking: 88,
    condition: "Sleep Disorders",
    modality: "Behavioral Therapy",
    ageRange: [18, 70],
    accessLevel: "Open",
    ageDistribution: [15, 25, 22, 20, 12, 6],
    genderDistribution: { male: 48, female: 50, other: 2 },
  },
  {
    id: "DS005",
    title: "Anxiety Treatment - Mindfulness Based Therapy",
    sampleSize: 9340,
    practitionerCount: 178,
    dateRange: "2020-2024",
    followUpDuration: "36 months",
    completeness: 91,
    outcomeTracking: 93,
    condition: "Anxiety",
    modality: "Mindfulness",
    ageRange: [16, 60],
    accessLevel: "Restricted",
    ageDistribution: [18, 28, 25, 18, 8, 3],
    genderDistribution: { male: 32, female: 65, other: 3 },
  },
  {
    id: "DS006",
    title: "Digestive Health - Nutritional Counseling Impact",
    sampleSize: 11200,
    practitionerCount: 234,
    dateRange: "2021-2024",
    followUpDuration: "24 months",
    completeness: 88,
    outcomeTracking: 85,
    condition: "Digestive Issues",
    modality: "Nutritional Counseling",
    ageRange: [20, 75],
    accessLevel: "Open",
    ageDistribution: [10, 20, 25, 22, 18, 5],
    genderDistribution: { male: 38, female: 58, other: 4 },
  },
  {
    id: "DS007",
    title: "ADHD Management - Holistic Approach Study",
    sampleSize: 4850,
    practitionerCount: 67,
    dateRange: "2022-2024",
    followUpDuration: "18 months",
    completeness: 93,
    outcomeTracking: 89,
    condition: "ADHD",
    modality: "Holistic Medicine",
    ageRange: [8, 45],
    accessLevel: "Restricted",
    ageDistribution: [25, 22, 20, 15, 12, 6],
    genderDistribution: { male: 62, female: 35, other: 3 },
  },
  {
    id: "DS008",
    title: "Cardiovascular Health - Exercise Prescription",
    sampleSize: 18750,
    practitionerCount: 345,
    dateRange: "2019-2024",
    followUpDuration: "48 months",
    completeness: 87,
    outcomeTracking: 92,
    condition: "Cardiovascular",
    modality: "Exercise Therapy",
    ageRange: [30, 85],
    accessLevel: "Open",
    ageDistribution: [2, 8, 18, 28, 25, 19],
    genderDistribution: { male: 55, female: 42, other: 3 },
  },
  {
    id: "DS009",
    title: "Autoimmune Conditions - Integrative Treatment",
    sampleSize: 7420,
    practitionerCount: 123,
    dateRange: "2020-2024",
    followUpDuration: "30 months",
    completeness: 90,
    outcomeTracking: 86,
    condition: "Autoimmune",
    modality: "Integrative Medicine",
    ageRange: [22, 70],
    accessLevel: "Restricted",
    ageDistribution: [8, 18, 25, 25, 18, 6],
    genderDistribution: { male: 25, female: 72, other: 3 },
  },
  {
    id: "DS010",
    title: "Women's Health - Hormonal Balance Protocol",
    sampleSize: 13560,
    practitionerCount: 198,
    dateRange: "2021-2024",
    followUpDuration: "24 months",
    completeness: 94,
    outcomeTracking: 91,
    condition: "Hormonal Issues",
    modality: "Hormone Therapy",
    ageRange: [18, 65],
    accessLevel: "Open",
    ageDistribution: [12, 25, 28, 22, 10, 3],
    genderDistribution: { male: 5, female: 93, other: 2 },
  },
];

const CONDITIONS = [
  "IBS",
  "Depression",
  "Chronic Pain",
  "Sleep Disorders",
  "Anxiety",
  "Digestive Issues",
  "ADHD",
  "Cardiovascular",
  "Autoimmune",
  "Hormonal Issues",
];

const MODALITIES = [
  "Herbal Medicine",
  "Meditation",
  "Acupuncture",
  "Behavioral Therapy",
  "Mindfulness",
  "Nutritional Counseling",
  "Holistic Medicine",
  "Exercise Therapy",
  "Integrative Medicine",
  "Hormone Therapy",
];

export function DatasetExplorer() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedModalities, setSelectedModalities] = useState([]);
  const [ageRange, setAgeRange] = useState([0, 100]);
  const [sampleSizeRange, setSampleSizeRange] = useState([0, 20000]);
  const [completenessRange, setCompletenessRange] = useState([0, 100]);

  // Filter datasets based on search and filters
  const filteredDatasets = useMemo(() => {
    return DUMMY_DATASETS.filter((dataset) => {
      // Search query filter
      if (
        searchQuery &&
        !dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !dataset.condition.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !dataset.modality.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Condition filter
      if (
        selectedConditions.length > 0 &&
        !selectedConditions.includes(dataset.condition)
      ) {
        return false;
      }

      // Modality filter
      if (
        selectedModalities.length > 0 &&
        !selectedModalities.includes(dataset.modality)
      ) {
        return false;
      }

      // Age range filter
      if (
        dataset.ageRange[0] < ageRange[0] ||
        dataset.ageRange[1] > ageRange[1]
      ) {
        return false;
      }

      // Sample size filter
      if (
        dataset.sampleSize < sampleSizeRange[0] ||
        dataset.sampleSize > sampleSizeRange[1]
      ) {
        return false;
      }

      // Completeness filter
      if (
        dataset.completeness < completenessRange[0] ||
        dataset.completeness > completenessRange[1]
      ) {
        return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedConditions,
    selectedModalities,
    ageRange,
    sampleSizeRange,
    completenessRange,
  ]);

  const renderAgeHistogram = (distribution) => (
    <View style={{ flexDirection: "row", alignItems: "flex-end", height: 24 }}>
      {distribution.map((value, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            height: (value / Math.max(...distribution)) * 24,
            marginHorizontal: 1,
            borderRadius: 1,
          }}
        />
      ))}
    </View>
  );

  const renderGenderPieChart = (distribution) => {
    const total = distribution.male + distribution.female + distribution.other;
    const maleAngle = (distribution.male / total) * 360;
    const femaleAngle = (distribution.female / total) * 360;

    return (
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: colors.secondary,
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: 12,
            height: 12,
            backgroundColor: colors.primary,
            borderRadius: 6,
            top: 0,
            left: 6,
          }}
        />
      </View>
    );
  };

  const renderDatasetCard = (dataset) => (
    <View
      key={dataset.id}
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
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
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
            {dataset.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textSecondary,
            }}
          >
            {dataset.id}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
            backgroundColor:
              dataset.accessLevel === "Open"
                ? `${colors.success}20`
                : `${colors.warning}20`,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {dataset.accessLevel === "Open" ? (
            <Unlock size={10} color={colors.success} />
          ) : (
            <Lock size={10} color={colors.warning} />
          )}
          <Text
            style={{
              fontSize: 10,
              fontWeight: "600",
              color:
                dataset.accessLevel === "Open"
                  ? colors.success
                  : colors.warning,
              marginLeft: 4,
            }}
          >
            {dataset.accessLevel}
          </Text>
        </View>
      </View>

      {/* Stats Row */}
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
            n={dataset.sampleSize.toLocaleString()}
          </Text>
          <Text style={{ fontSize: 10, color: colors.textSecondary }}>
            Sample Size
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 14, fontWeight: "600", color: colors.secondary }}
          >
            {dataset.practitionerCount}
          </Text>
          <Text style={{ fontSize: 10, color: colors.textSecondary }}>
            Practitioners
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 14, fontWeight: "600", color: colors.accent }}
          >
            {dataset.followUpDuration}
          </Text>
          <Text style={{ fontSize: 10, color: colors.textSecondary }}>
            Follow-up
          </Text>
        </View>
      </View>

      {/* Date Range */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}
      >
        <Calendar size={14} color={colors.textSecondary} />
        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
            marginLeft: 6,
          }}
        >
          {dataset.dateRange}
        </Text>
      </View>

      {/* Quality Indicators */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <View style={{ flex: 1, marginRight: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <Text style={{ fontSize: 10, color: colors.textSecondary }}>
              Completeness
            </Text>
            <Text
              style={{ fontSize: 10, fontWeight: "600", color: colors.success }}
            >
              {dataset.completeness}%
            </Text>
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: colors.borderLight,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: `${dataset.completeness}%`,
                height: "100%",
                backgroundColor: colors.success,
              }}
            />
          </View>
        </View>

        <View style={{ flex: 1, marginLeft: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <Text style={{ fontSize: 10, color: colors.textSecondary }}>
              Outcome Tracking
            </Text>
            <Text
              style={{ fontSize: 10, fontWeight: "600", color: colors.primary }}
            >
              {dataset.outcomeTracking}%
            </Text>
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: colors.borderLight,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: `${dataset.outcomeTracking}%`,
                height: "100%",
                backgroundColor: colors.primary,
              }}
            />
          </View>
        </View>
      </View>

      {/* Mini Visualizations */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 10,
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Age Distribution
          </Text>
          {renderAgeHistogram(dataset.ageDistribution)}
        </View>

        <View style={{ alignItems: "center", marginLeft: 16 }}>
          <Text
            style={{
              fontSize: 10,
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Gender
          </Text>
          {renderGenderPieChart(dataset.genderDistribution)}
        </View>
      </View>

      {/* View Details Button */}
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          borderRadius: 12,
          paddingVertical: 12,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.7}
        onPress={() => router.push("/dataset-detail")}
      >
        <Eye size={16} color="white" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "white",
            marginLeft: 6,
          }}
        >
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderFilterModal = () => (
    <Modal
      visible={showFilters}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => setShowFilters(false)}
    >
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View
          style={{
            paddingTop: insets.top + 16,
            paddingHorizontal: 20,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: colors.textPrimary,
            }}
          >
            Filters
          </Text>
          <TouchableOpacity onPress={() => setShowFilters(false)}>
            <X size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
          {/* Conditions */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
                marginBottom: 12,
              }}
            >
              Conditions
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {CONDITIONS.map((condition) => (
                <TouchableOpacity
                  key={condition}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 16,
                    backgroundColor: selectedConditions.includes(condition)
                      ? colors.primary
                      : colors.surface,
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                  onPress={() => {
                    if (selectedConditions.includes(condition)) {
                      setSelectedConditions(
                        selectedConditions.filter((c) => c !== condition),
                      );
                    } else {
                      setSelectedConditions([...selectedConditions, condition]);
                    }
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: selectedConditions.includes(condition)
                        ? "white"
                        : colors.textPrimary,
                    }}
                  >
                    {condition}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Modalities */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
                marginBottom: 12,
              }}
            >
              Modalities
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {MODALITIES.map((modality) => (
                <TouchableOpacity
                  key={modality}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 16,
                    backgroundColor: selectedModalities.includes(modality)
                      ? colors.secondary
                      : colors.surface,
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                  onPress={() => {
                    if (selectedModalities.includes(modality)) {
                      setSelectedModalities(
                        selectedModalities.filter((m) => m !== modality),
                      );
                    } else {
                      setSelectedModalities([...selectedModalities, modality]);
                    }
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: selectedModalities.includes(modality)
                        ? "white"
                        : colors.textPrimary,
                    }}
                  >
                    {modality}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Clear Filters Button */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.surface,
              borderRadius: 12,
              paddingVertical: 12,
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() => {
              setSelectedConditions([]);
              setSelectedModalities([]);
              setAgeRange([0, 100]);
              setSampleSizeRange([0, 20000]);
              setCompletenessRange([0, 100]);
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              Clear All Filters
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );

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
            marginBottom: 16,
          }}
        >
          Dataset Explorer
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
            marginBottom: 12,
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

        {/* Filter Button */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.surface,
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            alignSelf: "flex-start",
          }}
          onPress={() => setShowFilters(true)}
        >
          <Filter size={16} color={colors.textPrimary} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
              marginLeft: 6,
            }}
          >
            Filters
          </Text>
          {(selectedConditions.length > 0 || selectedModalities.length > 0) && (
            <View
              style={{
                backgroundColor: colors.primary,
                borderRadius: 8,
                width: 16,
                height: 16,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                {selectedConditions.length + selectedModalities.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Results Count */}
      <View style={{ paddingHorizontal: 20, marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
          }}
        >
          {filteredDatasets.length} dataset
          {filteredDatasets.length !== 1 ? "s" : ""} found
        </Text>
      </View>

      {/* Dataset Cards */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {filteredDatasets.map(renderDatasetCard)}
      </ScrollView>

      {renderFilterModal()}
    </View>
  );
}

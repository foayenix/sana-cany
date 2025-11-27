import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  PanResponder,
  Animated,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Plus,
  Save,
  Share,
  Download,
  Search,
  Users,
  Activity,
  Target,
  Settings,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Eye,
  Trash2,
  Copy,
  RefreshCw,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

// Query block definitions
const BLOCK_CATEGORIES = {
  cohort: {
    title: "Cohort",
    color: "#3B82F6",
    icon: Users,
    blocks: [
      {
        id: "condition",
        title: "Condition Selector",
        description: "Primary health condition",
        params: ["IBS", "Depression", "Chronic Pain"],
      },
      {
        id: "demographics",
        title: "Demographics",
        description: "Age, gender, location",
        params: ["Age: 18-75", "Gender: All", "Location: Any"],
      },
      {
        id: "baseline",
        title: "Baseline Health",
        description: "Health scores at start",
        params: ["Severity: Any", "Duration: >6m"],
      },
      {
        id: "daterange",
        title: "Date Range",
        description: "Study period",
        params: ["2020-2024"],
      },
    ],
  },
  intervention: {
    title: "Intervention",
    color: "#10B981",
    icon: Activity,
    blocks: [
      {
        id: "modality",
        title: "Modality Type",
        description: "Treatment approach",
        params: ["Herbal Medicine", "Acupuncture", "Meditation"],
      },
      {
        id: "dosage",
        title: "Treatment Dosage",
        description: "Intensity/frequency",
        params: ["Standard dose", "2-3x/week"],
      },
      {
        id: "duration",
        title: "Duration",
        description: "Treatment length",
        params: ["12-24 weeks"],
      },
    ],
  },
  outcome: {
    title: "Outcome",
    color: "#F59E0B",
    icon: Target,
    blocks: [
      {
        id: "proms",
        title: "PROMs",
        description: "Patient-reported measures",
        params: ["IBS-SSS", "QoL scores"],
      },
      {
        id: "healthscore",
        title: "Health Score Changes",
        description: "Objective improvements",
        params: ["≥30% improvement"],
      },
      {
        id: "symptoms",
        title: "Symptom Resolution",
        description: "Clinical endpoints",
        params: ["Complete/Partial"],
      },
    ],
  },
  covariate: {
    title: "Covariate",
    color: "#8B5CF6",
    icon: Settings,
    blocks: [
      {
        id: "comorbidities",
        title: "Comorbidities",
        description: "Other conditions",
        params: ["<3 conditions"],
      },
      {
        id: "lifestyle",
        title: "Lifestyle Factors",
        description: "Diet, exercise, stress",
        params: ["Tracked variables"],
      },
    ],
  },
};

const QUERY_TEMPLATES = [
  {
    id: "efficacy",
    title: "Treatment Efficacy",
    description: "Standard efficacy analysis",
  },
  {
    id: "safety",
    title: "Safety Profile",
    description: "Adverse events & safety",
  },
  {
    id: "subgroup",
    title: "Subgroup Analysis",
    description: "Population-specific outcomes",
  },
  {
    id: "longitudinal",
    title: "Longitudinal Study",
    description: "Long-term follow-up",
  },
];

const SAVED_QUERIES = [
  {
    id: 1,
    title: "IBS Herbal Medicine RCT",
    blocks: 4,
    sampleSize: 15450,
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Depression Meditation Study",
    blocks: 3,
    sampleSize: 8920,
    date: "1 week ago",
  },
  {
    id: 3,
    title: "Pain Management Analysis",
    blocks: 5,
    sampleSize: 12680,
    date: "2 weeks ago",
  },
];

export default function QueryBuilderPage() {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const router = useRouter();

  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [canvasBlocks, setCanvasBlocks] = useState([]);
  const [draggedBlock, setDraggedBlock] = useState(null);
  const [calculations, setCalculations] = useState({
    sampleSize: 0,
    meanAge: 0,
    genderSplit: { male: 0, female: 0 },
    baselineScore: 0,
    power: 0,
    completeness: 0,
  });

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (evt, gestureState) => {
      pan.flattenOffset();

      // Check if dropped in canvas area
      const canvasArea = {
        x: width * 0.25,
        y: 100,
        width: width * 0.45,
        height: height - 300,
      };

      const dropX = gestureState.moveX;
      const dropY = gestureState.moveY;

      if (
        dropX >= canvasArea.x &&
        dropX <= canvasArea.x + canvasArea.width &&
        dropY >= canvasArea.y &&
        dropY <= canvasArea.y + canvasArea.height &&
        draggedBlock
      ) {
        addBlockToCanvas(
          draggedBlock,
          dropX - canvasArea.x,
          dropY - canvasArea.y,
        );
      }

      setDraggedBlock(null);
      pan.setValue({ x: 0, y: 0 });
    },
  });

  const addBlockToCanvas = (block, x, y) => {
    const newBlock = {
      ...block,
      id: `${block.id}_${Date.now()}`,
      x: Math.max(0, Math.min(x, width * 0.4)),
      y: Math.max(0, Math.min(y, height - 400)),
    };

    setCanvasBlocks((prev) => [...prev, newBlock]);
    updateCalculations([...canvasBlocks, newBlock]);
  };

  const removeBlockFromCanvas = (blockId) => {
    const newBlocks = canvasBlocks.filter((block) => block.id !== blockId);
    setCanvasBlocks(newBlocks);
    updateCalculations(newBlocks);
  };

  const updateCalculations = (blocks) => {
    // Mock calculation based on selected blocks
    let sampleSize = 0;
    let meanAge = 45;
    let genderSplit = { male: 45, female: 55 };
    let baselineScore = 285;
    let power = 0;
    let completeness = 95;

    blocks.forEach((block) => {
      switch (block.category) {
        case "cohort":
          if (block.id.includes("condition")) sampleSize += 15000;
          if (block.id.includes("demographics"))
            sampleSize = Math.floor(sampleSize * 0.8);
          break;
        case "intervention":
          if (block.id.includes("modality"))
            sampleSize = Math.floor(sampleSize * 0.9);
          break;
        case "outcome":
          power += 15;
          break;
      }
    });

    power = Math.min(power, 95);
    sampleSize = Math.max(sampleSize, blocks.length * 1000);

    setCalculations({
      sampleSize,
      meanAge,
      genderSplit,
      baselineScore,
      power,
      completeness,
    });
  };

  const renderDraggableBlock = (block, category) => {
    const categoryData = BLOCK_CATEGORIES[category];
    const Icon = categoryData.icon;

    return (
      <Animated.View
        key={`${category}_${block.id}`}
        style={[
          pan.getLayout(),
          draggedBlock?.id === block.id ? { zIndex: 1000 } : {},
        ]}
        {...(draggedBlock?.id === block.id ? panResponder.panHandlers : {})}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.surface,
            borderRadius: 12,
            padding: 12,
            marginBottom: 8,
            borderLeftWidth: 4,
            borderLeftColor: categoryData.color,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
          onLongPress={() => {
            setDraggedBlock({ ...block, category });
          }}
          delayLongPress={500}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Icon size={16} color={categoryData.color} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: colors.textPrimary,
                marginLeft: 8,
                flex: 1,
              }}
            >
              {block.title}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              marginBottom: 6,
              lineHeight: 16,
            }}
          >
            {block.description}
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {block.params.slice(0, 2).map((param, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: `${categoryData.color}20`,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 4,
                  marginRight: 4,
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: categoryData.color,
                    fontWeight: "500",
                  }}
                >
                  {param}
                </Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderCanvasBlock = (block, index) => {
    const categoryData = BLOCK_CATEGORIES[block.category];
    const Icon = categoryData.icon;

    return (
      <View
        key={block.id}
        style={{
          position: "absolute",
          left: block.x,
          top: block.y,
          backgroundColor: colors.surface,
          borderRadius: 12,
          padding: 12,
          minWidth: 140,
          maxWidth: 160,
          borderLeftWidth: 4,
          borderLeftColor: categoryData.color,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Icon size={14} color={categoryData.color} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: colors.textPrimary,
              marginLeft: 6,
              flex: 1,
            }}
          >
            {block.title}
          </Text>
          <TouchableOpacity onPress={() => removeBlockFromCanvas(block.id)}>
            <Trash2 size={12} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 10,
            color: colors.textSecondary,
            lineHeight: 14,
          }}
        >
          {block.description}
        </Text>

        {/* Connection arrow */}
        {index < canvasBlocks.length - 1 && (
          <View
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              marginTop: -6,
            }}
          >
            <ArrowRight size={12} color={colors.textSecondary} />
          </View>
        )}
      </View>
    );
  };

  const renderLeftPanel = () => (
    <View
      style={{
        width: width * 0.25,
        backgroundColor: colors.background,
        borderRightWidth: 1,
        borderRightColor: colors.border,
      }}
    >
      <ScrollView
        contentContainerStyle={{ padding: 12 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: colors.textPrimary,
            marginBottom: 16,
          }}
        >
          Query Blocks
        </Text>

        {Object.entries(BLOCK_CATEGORIES).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <View key={key} style={{ marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 12,
                  paddingVertical: 8,
                }}
              >
                <Icon size={16} color={category.color} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: colors.textPrimary,
                    marginLeft: 8,
                  }}
                >
                  {category.title}
                </Text>
              </View>

              {category.blocks.map((block) => renderDraggableBlock(block, key))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );

  const renderCanvas = () => (
    <View
      style={{
        width: width * 0.45,
        backgroundColor: colors.surface,
        position: "relative",
      }}
    >
      {/* Canvas Header */}
      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
            textAlign: "center",
          }}
        >
          Query Canvas
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.textSecondary,
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Drag blocks here to build your query
        </Text>
      </View>

      {/* Canvas Area */}
      <View style={{ flex: 1, position: "relative" }}>
        {canvasBlocks.length === 0 && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Search
              size={48}
              color={colors.textSecondary}
              style={{ opacity: 0.3 }}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                textAlign: "center",
                marginTop: 12,
                lineHeight: 20,
              }}
            >
              Drop query blocks here to start building your research query
            </Text>
          </View>
        )}

        {canvasBlocks.map((block, index) => renderCanvasBlock(block, index))}
      </View>
    </View>
  );

  const renderRightPanel = () => (
    <View
      style={{
        width: width * 0.3,
        backgroundColor: colors.background,
        borderLeftWidth: 1,
        borderLeftColor: colors.border,
      }}
    >
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Sample Size */}
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 16,
            marginBottom: 16,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
              marginBottom: 4,
            }}
          >
            Estimated Sample Size
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: colors.primary,
            }}
          >
            {calculations.sampleSize.toLocaleString()}
          </Text>
        </View>

        {/* Quick Statistics */}
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Quick Statistics
          </Text>

          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              Mean Age
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              {calculations.meanAge} years
            </Text>
          </View>

          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              Gender Split
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              {calculations.genderSplit.male}% M /{" "}
              {calculations.genderSplit.female}% F
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              Baseline Score
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              {calculations.baselineScore}
            </Text>
          </View>
        </View>

        {/* Power Analysis */}
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Power Analysis
          </Text>

          <View style={{ marginBottom: 8 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                Statistical Power
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color:
                    calculations.power >= 80 ? colors.success : colors.warning,
                }}
              >
                {calculations.power}%
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
                  width: `${calculations.power}%`,
                  height: "100%",
                  backgroundColor:
                    calculations.power >= 80 ? colors.success : colors.warning,
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              Subgroup Adequacy
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: colors.textPrimary,
              }}
            >
              {calculations.sampleSize > 10000
                ? "Excellent"
                : calculations.sampleSize > 5000
                  ? "Good"
                  : "Limited"}
            </Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                Data Completeness
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: colors.success,
                }}
              >
                {calculations.completeness}%
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
                  width: `${calculations.completeness}%`,
                  height: "100%",
                  backgroundColor: colors.success,
                }}
              />
            </View>
          </View>
        </View>

        {/* Privacy Check */}
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: 16,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Privacy Check
          </Text>

          {[
            "De-identification Complete",
            "K-anonymity Satisfied",
            "Disclosure Risk Low",
          ].map((check, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <CheckCircle size={16} color={colors.success} />
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textPrimary,
                  marginLeft: 8,
                }}
              >
                {check}
              </Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={{ marginBottom: 16 }}>
          {[
            { title: "Refine Query", icon: RefreshCw, color: colors.secondary },
            { title: "Save Query", icon: Save, color: colors.primary },
            {
              title: "Request Dataset",
              icon: Download,
              color: colors.success,
              route: "/dataset-detail",
            },
            { title: "Export Results", icon: Share, color: colors.accent },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: action.color,
                  borderRadius: 12,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
                onPress={() =>
                  action.route ? router.push(action.route) : null
                }
              >
                <Icon size={16} color="white" />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "white",
                    marginLeft: 8,
                  }}
                >
                  {action.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );

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
          Visual Query Builder
        </Text>

        <TouchableOpacity>
          <Share size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        {renderLeftPanel()}
        {renderCanvas()}
        {renderRightPanel()}
      </View>

      {/* Bottom Section */}
      <View
        style={{
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingVertical: 16,
          paddingHorizontal: 20,
          paddingBottom: insets.bottom + 16,
        }}
      >
        {/* Templates */}
        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Query Templates
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              {QUERY_TEMPLATES.map((template) => (
                <TouchableOpacity
                  key={template.id}
                  style={{
                    backgroundColor: colors.background,
                    borderRadius: 12,
                    padding: 12,
                    minWidth: 120,
                    borderWidth: 1,
                    borderColor: colors.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: colors.textPrimary,
                      marginBottom: 4,
                    }}
                  >
                    {template.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: colors.textSecondary,
                      lineHeight: 14,
                    }}
                  >
                    {template.description}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Saved Queries */}
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Recent Queries
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              {SAVED_QUERIES.map((query) => (
                <TouchableOpacity
                  key={query.id}
                  style={{
                    backgroundColor: colors.background,
                    borderRadius: 12,
                    padding: 12,
                    minWidth: 160,
                    borderWidth: 1,
                    borderColor: colors.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: colors.textPrimary,
                      marginBottom: 4,
                    }}
                  >
                    {query.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <BarChart3 size={10} color={colors.textSecondary} />
                    <Text
                      style={{
                        fontSize: 10,
                        color: colors.textSecondary,
                        marginLeft: 4,
                      }}
                    >
                      {query.blocks} blocks • n=
                      {query.sampleSize.toLocaleString()}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 10,
                      color: colors.textSecondary,
                    }}
                  >
                    {query.date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

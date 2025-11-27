import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Svg, {
  Polygon,
  Circle,
  Line,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import {
  RotateCcw,
  Target,
  TrendingUp,
  Eye,
  EyeOff,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function RadarChart({ healthDimensions, comparisonData = null }) {
  const { colors } = useAppTheme();
  const [showComparison, setShowComparison] = useState(true);
  const [comparisonType, setComparisonType] = useState("previous"); // "previous", "goal", "benchmark"

  const centerX = 150;
  const centerY = 150;
  const maxRadius = 100;

  // Generate comparison data if not provided
  const defaultComparison = {
    previous: healthDimensions.map((dim) => ({
      ...dim,
      score: Math.max(0, dim.score + (Math.random() - 0.5) * 20), // Slight variation from current
    })),
    goal: healthDimensions.map((dim) => ({
      ...dim,
      score: Math.min(100, dim.score + 10 + Math.random() * 15), // Goals are typically higher
    })),
    benchmark: healthDimensions.map((dim) => ({
      ...dim,
      score: 75 + Math.random() * 15, // Population benchmark around 75-90
    })),
  };

  const comparison = comparisonData || defaultComparison;
  const currentComparison = comparison[comparisonType] || comparison.previous;

  // Calculate current points
  const points = healthDimensions.map((dimension, index) => {
    const angle = (index * 2 * Math.PI) / healthDimensions.length - Math.PI / 2;
    const radius = (dimension.score / 100) * maxRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return `${x},${y}`;
  });

  // Calculate comparison points
  const comparisonPoints = currentComparison.map((dimension, index) => {
    const angle =
      (index * 2 * Math.PI) / currentComparison.length - Math.PI / 2;
    const radius = (dimension.score / 100) * maxRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return `${x},${y}`;
  });

  const maxPoints = healthDimensions.map((_, index) => {
    const angle = (index * 2 * Math.PI) / healthDimensions.length - Math.PI / 2;
    const x = centerX + maxRadius * Math.cos(angle);
    const y = centerY + maxRadius * Math.sin(angle);
    return { x, y, angle, index };
  });

  const getComparisonColor = (type) => {
    switch (type) {
      case "previous":
        return colors.secondary;
      case "goal":
        return colors.success;
      case "benchmark":
        return colors.warning;
      default:
        return colors.secondary;
    }
  };

  const getComparisonIcon = (type) => {
    switch (type) {
      case "previous":
        return RotateCcw;
      case "goal":
        return Target;
      case "benchmark":
        return TrendingUp;
      default:
        return RotateCcw;
    }
  };

  const getComparisonLabel = (type) => {
    switch (type) {
      case "previous":
        return "Previous Month";
      case "goal":
        return "Personal Goals";
      case "benchmark":
        return "Population Avg";
      default:
        return "Previous Month";
    }
  };

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
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
            fontSize: 18,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
          }}
        >
          6-Dimension Wellness Chart
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 12,
            backgroundColor: showComparison
              ? colors.primary
              : colors.borderLight,
          }}
          onPress={() => setShowComparison(!showComparison)}
        >
          {showComparison ? (
            <Eye size={14} color="white" />
          ) : (
            <EyeOff size={14} color={colors.textSecondary} />
          )}
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_500Medium",
              color: showComparison ? "white" : colors.textSecondary,
              marginLeft: 4,
            }}
          >
            Compare
          </Text>
        </TouchableOpacity>
      </View>

      {/* Comparison Type Selector */}
      {showComparison && (
        <View
          style={{
            flexDirection: "row",
            marginBottom: 16,
            backgroundColor: colors.background,
            borderRadius: 12,
            padding: 4,
          }}
        >
          {["previous", "goal", "benchmark"].map((type) => {
            const Icon = getComparisonIcon(type);
            const isActive = comparisonType === type;
            return (
              <TouchableOpacity
                key={type}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  borderRadius: 8,
                  backgroundColor: isActive ? colors.surface : "transparent",
                }}
                onPress={() => setComparisonType(type)}
              >
                <Icon
                  size={12}
                  color={
                    isActive ? getComparisonColor(type) : colors.textSecondary
                  }
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Inter_500Medium",
                    color: isActive ? colors.textPrimary : colors.textSecondary,
                    marginLeft: 4,
                  }}
                >
                  {type === "previous"
                    ? "Prev"
                    : type === "goal"
                      ? "Goal"
                      : "Avg"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      <View style={{ alignItems: "center" }}>
        <Svg height="300" width="300" viewBox="0 0 300 300">
          <Defs>
            <LinearGradient
              id="currentGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <Stop offset="0%" stopColor={colors.primary} stopOpacity="0.6" />
              <Stop
                offset="100%"
                stopColor={colors.primary}
                stopOpacity="0.2"
              />
            </LinearGradient>
            <LinearGradient
              id="comparisonGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <Stop
                offset="0%"
                stopColor={getComparisonColor(comparisonType)}
                stopOpacity="0.3"
              />
              <Stop
                offset="100%"
                stopColor={getComparisonColor(comparisonType)}
                stopOpacity="0.1"
              />
            </LinearGradient>
          </Defs>

          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((percentage) => (
            <Circle
              key={percentage}
              cx={centerX}
              cy={centerY}
              r={(percentage / 100) * maxRadius}
              stroke={colors.borderLight}
              strokeWidth="1"
              fill="none"
            />
          ))}

          {/* Grid lines */}
          {maxPoints.map((point) => (
            <Line
              key={point.index}
              x1={centerX}
              y1={centerY}
              x2={point.x}
              y2={point.y}
              stroke={colors.borderLight}
              strokeWidth="1"
            />
          ))}

          {/* Comparison polygon (behind current) */}
          {showComparison && (
            <>
              <Polygon
                points={comparisonPoints.join(" ")}
                fill="url(#comparisonGradient)"
                stroke={getComparisonColor(comparisonType)}
                strokeWidth="2"
                strokeDasharray="4,4"
              />

              {/* Comparison data points */}
              {currentComparison.map((dimension, index) => {
                const angle =
                  (index * 2 * Math.PI) / currentComparison.length -
                  Math.PI / 2;
                const radius = (dimension.score / 100) * maxRadius;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                return (
                  <Circle
                    key={`comp-${index}`}
                    cx={x}
                    cy={y}
                    r="3"
                    fill={getComparisonColor(comparisonType)}
                    stroke="white"
                    strokeWidth="1"
                  />
                );
              })}
            </>
          )}

          {/* Current data polygon */}
          <Polygon
            points={points.join(" ")}
            fill="url(#currentGradient)"
            stroke={colors.primary}
            strokeWidth="2"
          />

          {/* Current data points */}
          {healthDimensions.map((dimension, index) => {
            const angle =
              (index * 2 * Math.PI) / healthDimensions.length - Math.PI / 2;
            const radius = (dimension.score / 100) * maxRadius;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            return (
              <Circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill={colors.primary}
                stroke="white"
                strokeWidth="2"
              />
            );
          })}

          {/* Labels */}
          {healthDimensions.map((dimension, index) => {
            const angle =
              (index * 2 * Math.PI) / healthDimensions.length - Math.PI / 2;
            const labelRadius = maxRadius + 25;
            const x = centerX + labelRadius * Math.cos(angle);
            const y = centerY + labelRadius * Math.sin(angle);

            return (
              <SvgText
                key={index}
                x={x}
                y={y}
                textAnchor="middle"
                fontSize="12"
                fill={colors.textSecondary}
                fontFamily="Inter_500Medium"
              >
                {dimension.name.split(" ")[0]}
              </SvgText>
            );
          })}
        </Svg>
      </View>

      {/* Legend */}
      {showComparison && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 12,
            marginBottom: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: colors.primary,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
              }}
            >
              Current
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 12,
                height: 2,
                backgroundColor: getComparisonColor(comparisonType),
                marginRight: 6,
                borderRadius: 1,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
              }}
            >
              {getComparisonLabel(comparisonType)}
            </Text>
          </View>
        </View>
      )}

      {/* Dimension scores list */}
      <View style={{ marginTop: 20 }}>
        {healthDimensions.map((dimension, index) => {
          const compScore = showComparison
            ? currentComparison[index]?.score
            : null;
          const difference = compScore ? dimension.score - compScore : 0;

          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: index < healthDimensions.length - 1 ? 1 : 0,
                borderBottomColor: colors.borderLight,
              }}
            >
              <dimension.icon size={20} color={dimension.color} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter_500Medium",
                    color: colors.textPrimary,
                  }}
                >
                  {dimension.name}
                </Text>
                {showComparison && compScore && (
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: "Inter_400Regular",
                      color:
                        difference > 0
                          ? colors.success
                          : difference < 0
                            ? colors.error
                            : colors.textSecondary,
                    }}
                  >
                    {difference > 0 ? "+" : ""}
                    {difference.toFixed(0)} vs{" "}
                    {getComparisonLabel(comparisonType).toLowerCase()}
                  </Text>
                )}
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Inter_600SemiBold",
                      color: colors.textPrimary,
                      marginRight: 4,
                    }}
                  >
                    {dimension.score}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_400Regular",
                      color: colors.textSecondary,
                    }}
                  >
                    /100
                  </Text>
                </View>

                {showComparison && compScore && (
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: "Inter_400Regular",
                      color: colors.textSecondary,
                    }}
                  >
                    was {compScore.toFixed(0)}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

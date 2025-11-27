import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Svg, {
  Circle,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
  Path,
} from "react-native-svg";
import { ChevronDown, TrendingUp, Target, Users } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function HealthScoreHeader({
  healthScore,
  biologicalAge,
  chronologicalAge,
  monthlyTrend,
  wellnessStatus,
  selectedTimeRange,
  onTimeRangePress,
}) {
  const { colors } = useAppTheme();

  const radius = 50;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;

  // Your current score
  const yourScore = healthScore;
  const yourStrokeDashoffset =
    circumference - (yourScore / 100) * circumference;

  // Health goal comparison (90+)
  const healthGoal = 92;
  const goalStrokeDashoffset =
    circumference - (healthGoal / 100) * circumference;

  // Friend comparison data
  const friendScore = 79;
  const friendStrokeDashoffset =
    circumference - (friendScore / 100) * circumference;

  // Comparison data for the month
  const comparisonData = [
    {
      label: "Your Score",
      value: yourScore,
      color: colors.primary,
      trend: monthlyTrend,
    },
    {
      label: "Health Goal",
      value: healthGoal,
      color: colors.warning,
      trend: 0,
      icon: Target,
    },
    {
      label: "Sarah's Friend",
      value: friendScore,
      color: colors.accent,
      trend: 2,
      icon: Users,
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: colors.surface,
          marginHorizontal: 20,
          marginTop: 20,
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
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
            }}
          >
            Your SANA Health Graph
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={onTimeRangePress}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
                marginRight: 4,
              }}
            >
              {selectedTimeRange}
            </Text>
            <ChevronDown size={16} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Main Health Score Circle */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <View style={{ alignItems: "center", marginRight: 30 }}>
            <Svg height={radius * 2} width={radius * 2}>
              <Defs>
                <SvgLinearGradient
                  id="yourGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <Stop
                    offset="0%"
                    stopColor={colors.primary}
                    stopOpacity="1"
                  />
                  <Stop
                    offset="100%"
                    stopColor={colors.accent}
                    stopOpacity="1"
                  />
                </SvgLinearGradient>
                <SvgLinearGradient
                  id="goalGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <Stop
                    offset="0%"
                    stopColor={colors.warning}
                    stopOpacity="0.3"
                  />
                  <Stop
                    offset="100%"
                    stopColor={colors.warning}
                    stopOpacity="0.3"
                  />
                </SvgLinearGradient>
                <SvgLinearGradient
                  id="friendGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <Stop
                    offset="0%"
                    stopColor={colors.accent}
                    stopOpacity="0.4"
                  />
                  <Stop
                    offset="100%"
                    stopColor={colors.accent}
                    stopOpacity="0.4"
                  />
                </SvgLinearGradient>
              </Defs>
              {/* Background circle */}
              <Circle
                stroke={colors.borderLight}
                fill="transparent"
                cx={radius}
                cy={radius}
                r={normalizedRadius}
                strokeWidth={strokeWidth}
              />
              {/* Friend's score (bottom layer) */}
              <Circle
                stroke="url(#friendGrad)"
                fill="transparent"
                cx={radius}
                cy={radius}
                r={normalizedRadius}
                strokeWidth={strokeWidth - 1}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={friendStrokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${radius} ${radius})`}
              />
              {/* Health goal (middle layer) */}
              <Circle
                stroke="url(#goalGrad)"
                fill="transparent"
                cx={radius}
                cy={radius}
                r={normalizedRadius}
                strokeWidth={strokeWidth - 1}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={goalStrokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${radius} ${radius})`}
              />
              {/* Your score (top layer) */}
              <Circle
                stroke="url(#yourGrad)"
                fill="transparent"
                cx={radius}
                cy={radius}
                r={normalizedRadius}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={yourStrokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${radius} ${radius})`}
              />
            </Svg>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Inter_600SemiBold",
                  color: colors.textPrimary,
                }}
              >
                {yourScore}
              </Text>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: wellnessStatus.color,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 16,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <TrendingUp size={14} color="white" />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                  color: "white",
                  marginLeft: 4,
                }}
              >
                {wellnessStatus.status}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
                marginBottom: 4,
              }}
            >
              Biological Age: {biologicalAge}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                marginBottom: 12,
              }}
            >
              vs Chronological: {chronologicalAge}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TrendingUp size={16} color={colors.success} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_500Medium",
                  color: colors.success,
                  marginLeft: 4,
                }}
              >
                {monthlyTrend > 0 ? "+" : ""}
                {monthlyTrend} points this month
              </Text>
            </View>
          </View>
        </View>

        {/* Comparison Legend */}
        <View
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 16,
            padding: 16,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Wellness Comparison
          </Text>

          {comparisonData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                  borderBottomWidth: index < comparisonData.length - 1 ? 1 : 0,
                  borderBottomColor: colors.border,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  {IconComponent && (
                    <IconComponent size={16} color={item.color} />
                  )}
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: item.color,
                      marginLeft: IconComponent ? 8 : 0,
                      marginRight: 12,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_500Medium",
                      color: colors.textPrimary,
                      flex: 1,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Inter_600SemiBold",
                      color: colors.textPrimary,
                      marginRight: 8,
                    }}
                  >
                    {item.value}
                  </Text>
                  {item.trend !== 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TrendingUp
                        size={12}
                        color={item.trend > 0 ? colors.success : colors.error}
                        style={{
                          transform: [
                            { rotate: item.trend > 0 ? "0deg" : "180deg" },
                          ],
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Inter_500Medium",
                          color: item.trend > 0 ? colors.success : colors.error,
                          marginLeft: 2,
                        }}
                      >
                        {item.trend > 0 ? "+" : ""}
                        {item.trend}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        {/* Insight Card */}
        <View
          style={{
            backgroundColor: colors.primary + "10",
            borderRadius: 16,
            padding: 16,
            borderLeftWidth: 4,
            borderLeftColor: colors.primary,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_600SemiBold",
              color: colors.primary,
              marginBottom: 4,
            }}
          >
            Wellness Insight
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              lineHeight: 20,
            }}
          >
            You're {yourScore - friendScore} points ahead of your friend and{" "}
            {healthGoal - yourScore} points away from your health goal. Keep up
            your current wellness routine to reach the 90+ target!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

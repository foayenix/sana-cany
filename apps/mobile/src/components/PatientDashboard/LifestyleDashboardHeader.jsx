import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronDown, TrendingUp } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useAppTheme } from "@/utils/theme";
import { useProfileStore } from "@/utils/profileStore";

const moods = [
  { emoji: "😊", label: "Happy", color: "#F4B942" },
  { emoji: "😌", label: "Calm", color: "#A5BE5E" },
  { emoji: "⚡", label: "Energetic", color: "#FF7B54" },
  { emoji: "🧘‍♀️", label: "Peaceful", color: "#7BA5C6" },
  { emoji: "🤔", label: "Reflective", color: "#B5A7D6" },
];

export function LifestyleDashboardHeader() {
  const { colors } = useAppTheme();
  const { getCurrentProfileData } = useProfileStore();
  const router = useRouter();
  const profileData = getCurrentProfileData();
  const [selectedMood, setSelectedMood] = useState(0); // Default to Happy
  const [showMoodDropdown, setShowMoodDropdown] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const healthScore = 87;
  const monthlyGrowth = 5;

  const handleHealthScorePress = () => {
    router.push("/(tabs)/health");
  };

  return (
    <LinearGradient
      colors={[colors.gradientHeader.start, colors.gradientHeader.end]}
      style={{
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
      }}
    >
      {/* Greeting and Profile */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_700Bold",
              color: colors.textPrimary,
              marginBottom: 4,
            }}
          >
            {getGreeting()},
          </Text>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter_400Regular",
              color: colors.textPrimary,
            }}
          >
            {profileData.name.split(" ")[0]}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            overflow: "hidden",
            ...colors.softCardShadow,
          }}
        >
          <Image
            source={{ uri: profileData.profilePhoto }}
            style={{
              width: 50,
              height: 50,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      {/* Mood Selector with Inline Health Score */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.cardPure,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            ...colors.softCardShadow,
          }}
          onPress={() => setShowMoodDropdown(!showMoodDropdown)}
        >
          <Text style={{ fontSize: 18, marginRight: 8 }}>
            {moods[selectedMood].emoji}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.textSecondary,
              flex: 1,
            }}
          >
            How are you feeling?
          </Text>
          <ChevronDown
            size={16}
            color={colors.textSecondary}
            style={{
              transform: [{ rotate: showMoodDropdown ? "180deg" : "0deg" }],
            }}
          />
        </TouchableOpacity>

        {/* Health Score Button */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.cardPure,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            ...colors.softCardShadow,
          }}
          onPress={handleHealthScorePress}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Inter_700Bold",
              color: colors.primary,
              marginRight: 6,
            }}
          >
            {healthScore}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TrendingUp size={14} color={colors.success} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_600SemiBold",
                color: colors.success,
                marginLeft: 2,
              }}
            >
              +{monthlyGrowth}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Mood Dropdown */}
      {showMoodDropdown && (
        <View
          style={{
            backgroundColor: colors.cardPure,
            borderRadius: 16,
            marginTop: 8,
            padding: 16,
            ...colors.cardShadow,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 4 }}
          >
            {moods.map((mood, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedMood(index);
                  setShowMoodDropdown(false);
                }}
                style={{
                  alignItems: "center",
                  padding: 12,
                  marginHorizontal: 8,
                  borderRadius: 16,
                  backgroundColor:
                    selectedMood === index
                      ? mood.color + "20"
                      : colors.surfaceVariant,
                  minWidth: 70,
                }}
              >
                <Text style={{ fontSize: 24, marginBottom: 4 }}>
                  {mood.emoji}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color:
                      selectedMood === index
                        ? mood.color
                        : colors.textSecondary,
                  }}
                >
                  {mood.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </LinearGradient>
  );
}

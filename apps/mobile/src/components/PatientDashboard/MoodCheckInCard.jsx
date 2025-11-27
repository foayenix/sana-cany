import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAppTheme } from "@/utils/theme";

export function MoodCheckInCard() {
  const { colors } = useAppTheme();
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: "😊", label: "Happy", color: colors.moodHappy },
    { emoji: "😌", label: "Calm", color: colors.moodCalm },
    { emoji: "⚡", label: "Energetic", color: colors.moodEnergetic },
    { emoji: "🕯️", label: "Peaceful", color: colors.moodPeaceful },
    { emoji: "🤔", label: "Reflective", color: colors.moodReflective },
  ];

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginBottom: 16,
        backgroundColor: colors.cardPure,
        borderRadius: 20,
        padding: 20,
        ...colors.cardShadow,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          marginBottom: 4,
        }}
      >
        How are you feeling today?
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          marginBottom: 16,
        }}
      >
        Track your daily mood for better wellness insights
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedMood(index)}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor:
                selectedMood === index ? mood.color : colors.surfaceVariant,
              justifyContent: "center",
              alignItems: "center",
              ...colors.softCardShadow,
            }}
          >
            <Text style={{ fontSize: 20 }}>{mood.emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedMood !== null && (
        <View
          style={{
            marginTop: 16,
            paddingTop: 16,
            borderTopWidth: 1,
            borderTopColor: colors.borderLight,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.primary,
              textAlign: "center",
            }}
          >
            Feeling {moods[selectedMood].label.toLowerCase()} today ✨
          </Text>
        </View>
      )}
    </View>
  );
}

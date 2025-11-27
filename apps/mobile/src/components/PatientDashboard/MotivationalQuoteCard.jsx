import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Quote } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function MotivationalQuoteCard() {
  const { colors } = useAppTheme();

  const quotes = [
    {
      text: "Wellness is not a destination, but a way of traveling.",
      author: "Judi Hollis",
    },
    {
      text: "Take care of your body. It's the only place you have to live.",
      author: "Jim Rohn",
    },
    {
      text: "Your body holds deep wisdom. Trust in it. Learn from it. Nourish it.",
      author: "Bella Bleue",
    },
    {
      text: "Health is a relationship between you and your body.",
      author: "Terri Guillemets",
    },
  ];

  // Get a random quote for today (you could make this more sophisticated)
  const dailyQuote =
    quotes[Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % quotes.length];

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginBottom: 24,
      }}
    >
      <LinearGradient
        colors={[colors.gradientQuote.start, colors.gradientQuote.end]}
        style={{
          borderRadius: 20,
          padding: 24,
          ...colors.cardShadow,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: colors.primarySoft,
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.8,
            }}
          >
            <Quote size={24} color={colors.cardPure} />
          </View>
        </View>

        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_400Regular",
            color: colors.textPrimary,
            textAlign: "center",
            lineHeight: 24,
            marginBottom: 12,
            fontStyle: "italic",
          }}
        >
          "{dailyQuote.text}"
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            color: colors.textSecondary,
            textAlign: "center",
          }}
        >
          — {dailyQuote.author}
        </Text>
      </LinearGradient>
    </View>
  );
}

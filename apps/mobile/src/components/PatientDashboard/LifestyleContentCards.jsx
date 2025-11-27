import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import {
  Calendar,
  Dumbbell,
  Music,
  Heart,
  Coffee,
  BookOpen,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function LifestyleContentCards() {
  const { colors } = useAppTheme();

  const contentCards = [
    {
      id: 1,
      title: "Physiotherapist",
      subtitle: "Next appointment",
      time: "2:30 PM",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=180&fit=crop",
      icon: Calendar,
      color: colors.profileBlue,
    },
    {
      id: 2,
      title: "Morning Workouts",
      subtitle: "15 min sessions",
      time: "Start now",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=180&fit=crop",
      icon: Dumbbell,
      color: colors.profileOrange,
    },
    {
      id: 3,
      title: "Nature Soundscape",
      subtitle: "Relaxation time",
      time: "20 min",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=180&fit=crop",
      icon: Music,
      color: colors.profileGreen,
    },
    {
      id: 4,
      title: "Meditation",
      subtitle: "Mindful moments",
      time: "10 min",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=180&fit=crop",
      icon: Heart,
      color: colors.profilePurple,
    },
    {
      id: 5,
      title: "Healthy Recipes",
      subtitle: "Nutrition guide",
      time: "Explore",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=180&fit=crop",
      icon: Coffee,
      color: colors.profileYellow,
    },
  ];

  return (
    <View style={{ marginBottom: 24 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingRight: 40,
        }}
        style={{ flexGrow: 0 }}
      >
        {contentCards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={{
              width: 280,
              marginRight: 16,
              backgroundColor: colors.cardPure,
              borderRadius: 20,
              overflow: "hidden",
              ...colors.cardShadow,
            }}
          >
            <Image
              source={{ uri: card.image }}
              style={{
                width: "100%",
                height: 140,
              }}
              resizeMode="cover"
            />

            <View
              style={{
                padding: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: card.color,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <card.icon size={18} color={colors.textPrimary} />
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Inter_600SemiBold",
                      color: colors.textPrimary,
                      marginBottom: 2,
                    }}
                  >
                    {card.title}
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Inter_400Regular",
                      color: colors.textSecondary,
                    }}
                  >
                    {card.subtitle}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: colors.surfaceVariant,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Inter_500Medium",
                      color: colors.textPrimary,
                    }}
                  >
                    {card.time}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

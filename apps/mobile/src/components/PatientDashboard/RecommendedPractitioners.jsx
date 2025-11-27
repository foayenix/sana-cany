import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";

export function RecommendedPractitioners({ practitioners }) {
  const { colors } = useAppTheme();

  // Enhanced practitioner data with lifestyle photos
  const enhancedPractitioners =
    practitioners?.map((practitioner, index) => ({
      ...practitioner,
      photo: [
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face",
      ][index % 3],
      backgroundImage: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=120&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=120&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=120&fit=crop",
      ][index % 3],
      backgroundColor: [
        colors.profileGreen,
        colors.profileBlue,
        colors.profileOrange,
      ][index % 3],
    })) || [];

  return (
    <View
      style={{
        marginBottom: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter_600SemiBold",
            color: colors.textPrimary,
          }}
        >
          Recommended for You
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.categoryBackground,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter_500Medium",
              color: colors.primary,
              marginRight: 4,
            }}
          >
            See all
          </Text>
          <ArrowRight size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingRight: 40,
        }}
        style={{ flexGrow: 0 }}
      >
        {enhancedPractitioners.map((practitioner) => (
          <TouchableOpacity
            key={practitioner.id}
            style={{
              backgroundColor: colors.cardPure,
              borderRadius: 20,
              width: 260,
              marginRight: 16,
              overflow: "hidden",
              ...colors.cardShadow,
            }}
          >
            {/* Background image header */}
            <View style={{ position: "relative", height: 100 }}>
              <Image
                source={{ uri: practitioner.backgroundImage }}
                style={{
                  width: "100%",
                  height: 100,
                }}
                resizeMode="cover"
              />

              {/* Overlay gradient */}
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              />

              {/* Profile photo positioned to overlap */}
              <View
                style={{
                  position: "absolute",
                  bottom: -30,
                  left: 16,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: colors.cardPure,
                }}
              >
                <Image
                  source={{ uri: practitioner.photo }}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  resizeMode="cover"
                />
              </View>

              {/* Rating badge */}
              <View
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  backgroundColor: colors.cardPure,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 12,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Star size={12} color={colors.accent} fill={colors.accent} />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Inter_600SemiBold",
                    color: colors.textPrimary,
                    marginLeft: 4,
                  }}
                >
                  {practitioner.sanaIndex}
                </Text>
              </View>
            </View>

            {/* Content */}
            <View style={{ padding: 16, paddingTop: 36 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter_600SemiBold",
                  color: colors.textPrimary,
                  marginBottom: 4,
                }}
              >
                {practitioner.name}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                  marginBottom: 12,
                }}
              >
                {practitioner.specialty}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <MapPin size={14} color={colors.textTertiary} />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Inter_400Regular",
                    color: colors.textTertiary,
                    marginLeft: 4,
                  }}
                >
                  {practitioner.distance} away
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <Clock size={14} color={colors.textTertiary} />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Inter_400Regular",
                    color: colors.textTertiary,
                    marginLeft: 4,
                  }}
                >
                  Available today
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 16,
                  paddingVertical: 12,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter_600SemiBold",
                    color: colors.cardPure,
                    marginRight: 8,
                  }}
                >
                  Book Appointment
                </Text>
                <ArrowRight size={16} color={colors.cardPure} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

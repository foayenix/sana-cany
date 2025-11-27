import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PenTool, ArrowRight } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useAppTheme } from "@/utils/theme";

export function JournalCTACard() {
  const { colors } = useAppTheme();
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/journal")}
      style={{
        marginHorizontal: 20,
        marginBottom: 16,
      }}
    >
      <LinearGradient
        colors={[colors.gradientCard.start, colors.gradientCard.end]}
        style={{
          borderRadius: 20,
          padding: 20,
          ...colors.cardShadow,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: colors.primarySoft,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <PenTool size={20} color={colors.cardPure} />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Inter_600SemiBold",
                  color: colors.textPrimary,
                }}
              >
                Daily Journal
              </Text>
            </View>

            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_400Regular",
                color: colors.textSecondary,
                lineHeight: 20,
              }}
            >
              What are your reflections today? Capture your thoughts and
              wellness journey
            </Text>
          </View>

          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: colors.primary,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 16,
            }}
          >
            <ArrowRight size={16} color={colors.cardPure} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

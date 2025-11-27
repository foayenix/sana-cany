import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import {
  Flashlight,
  Zap,
  RotateCcw,
  ShieldCheck,
  X,
  ArrowLeft,
} from "lucide-react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export function ScannerOverlay({
  insets,
  colors,
  scanned,
  flashMode,
  toggleFlash,
  flipCamera,
}) {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <TouchableOpacity
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 16,
              }}
              onPress={handleBackPress}
            >
              <ArrowLeft size={20} color="white" />
            </TouchableOpacity>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Inter_600SemiBold",
                  color: "white",
                }}
              >
                Scan Product
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_400Regular",
                  color: "rgba(255, 255, 255, 0.8)",
                  marginTop: 4,
                }}
              >
                Point camera at barcode
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 12,
              }}
              onPress={toggleFlash}
            >
              {flashMode === "off" ? (
                <Flashlight size={20} color="white" />
              ) : (
                <Zap size={20} color="white" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={flipCamera}
            >
              <RotateCcw size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <View
          style={{
            width: width * 0.8,
            height: 200,
            borderWidth: 2,
            borderColor: colors.primary,
            borderRadius: 16,
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -2,
              left: -2,
              width: 30,
              height: 30,
              borderTopWidth: 4,
              borderLeftWidth: 4,
              borderColor: colors.accent,
              borderTopLeftRadius: 16,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: -2,
              right: -2,
              width: 30,
              height: 30,
              borderTopWidth: 4,
              borderRightWidth: 4,
              borderColor: colors.accent,
              borderTopRightRadius: 16,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -2,
              left: -2,
              width: 30,
              height: 30,
              borderBottomWidth: 4,
              borderLeftWidth: 4,
              borderColor: colors.accent,
              borderBottomLeftRadius: 16,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -2,
              right: -2,
              width: 30,
              height: 30,
              borderBottomWidth: 4,
              borderRightWidth: 4,
              borderColor: colors.accent,
              borderBottomRightRadius: 16,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_500Medium",
            color: "white",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          {scanned ? "Processing..." : "Align barcode within frame"}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: insets.bottom + 16,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ShieldCheck size={20} color={colors.primary} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                color: "white",
                marginLeft: 8,
              }}
            >
              Personalized to Your Profile
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_400Regular",
              color: "rgba(255, 255, 255, 0.8)",
              marginTop: 4,
            }}
          >
            Analysis includes your conditions, medications, and health goals
          </Text>
        </View>
      </View>
    </View>
  );
}

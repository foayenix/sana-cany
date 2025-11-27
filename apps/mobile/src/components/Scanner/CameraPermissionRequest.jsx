import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Camera } from "lucide-react-native";

export function CameraPermissionRequest({ colors, isDark, requestPermission }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      <Camera size={80} color={colors.textSecondary} />
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Inter_600SemiBold",
          color: colors.textPrimary,
          textAlign: "center",
          marginTop: 20,
          marginBottom: 12,
        }}
      >
        Camera Access Needed
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Inter_400Regular",
          color: colors.textSecondary,
          textAlign: "center",
          marginBottom: 30,
          lineHeight: 24,
        }}
      >
        To scan product barcodes and get personalized health insights, we need
        access to your camera.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: 32,
          paddingVertical: 16,
          borderRadius: 16,
        }}
        onPress={requestPermission}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter_600SemiBold",
            color: "white",
          }}
        >
          Grant Camera Access
        </Text>
      </TouchableOpacity>
    </View>
  );
}

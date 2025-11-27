import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Eye, EyeOff, Copy } from "lucide-react-native";

export function ApiKeyDisplay({
  apiKey,
  showApiKey,
  colors,
  onToggleVisibility,
  onCopy,
  onRegenerate,
}) {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: colors.textSecondary,
            flex: 1,
          }}
        >
          API Key
        </Text>
        <TouchableOpacity onPress={onToggleVisibility}>
          {showApiKey ? (
            <EyeOff size={16} color={colors.textSecondary} />
          ) : (
            <Eye size={16} color={colors.textSecondary} />
          )}
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 12,
          fontFamily: "monospace",
          color: colors.textPrimary,
          marginBottom: 12,
        }}
      >
        {showApiKey
          ? apiKey
          : "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"}
      </Text>

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onCopy}
        >
          <Copy size={14} color="white" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "white",
              marginLeft: 4,
            }}
          >
            Copy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: colors.border,
          }}
          onPress={onRegenerate}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textPrimary,
            }}
          >
            Regenerate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

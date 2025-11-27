import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FileText, ExternalLink } from "lucide-react-native";
import { ApiKeyDisplay } from "./ApiKeyDisplay";
import { ApiRateLimits } from "./ApiRateLimits";

export function ApiSection({
  apiData,
  showApiKey,
  colors,
  onToggleVisibility,
  onCopyApiKey,
  onRegenerateApiKey,
}) {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.textPrimary,
            marginBottom: 16,
          }}
        >
          API Access Key
        </Text>

        <ApiKeyDisplay
          apiKey={apiData.key}
          showApiKey={showApiKey}
          colors={colors}
          onToggleVisibility={onToggleVisibility}
          onCopy={onCopyApiKey}
          onRegenerate={onRegenerateApiKey}
        />

        <ApiRateLimits
          rateLimits={apiData.rateLimits}
          usage={apiData.usage}
          colors={colors}
        />

        {/* Documentation Link */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <FileText size={16} color={colors.textPrimary} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
              marginLeft: 8,
              marginRight: 8,
            }}
          >
            API Documentation
          </Text>
          <ExternalLink size={14} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

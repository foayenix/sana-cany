import React from "react";
import { View, Text, Switch } from "react-native";
import { FormatSelector } from "./FormatSelector";
import { AnonymizationSelector } from "./AnonymizationSelector";

export function ExportSection({ exportPrefs, colors, onUpdateExportPrefs }) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
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
        Data Export Preferences
      </Text>

      <FormatSelector
        selectedFormat={exportPrefs.format}
        colors={colors}
        onSelectFormat={(format) =>
          onUpdateExportPrefs({ ...exportPrefs, format })
        }
      />

      {/* Include Codebook */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: colors.borderLight,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
              marginBottom: 2,
            }}
          >
            Include Codebook
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
            }}
          >
            Include variable definitions and metadata
          </Text>
        </View>

        <Switch
          value={exportPrefs.includeCodebook}
          onValueChange={(value) =>
            onUpdateExportPrefs({ ...exportPrefs, includeCodebook: value })
          }
          trackColor={{
            false: colors.borderLight,
            true: `${colors.primary}40`,
          }}
          thumbColor={
            exportPrefs.includeCodebook ? colors.primary : colors.textSecondary
          }
        />
      </View>

      <AnonymizationSelector
        selectedLevel={exportPrefs.anonymizationLevel}
        colors={colors}
        onSelectLevel={(anonymizationLevel) =>
          onUpdateExportPrefs({ ...exportPrefs, anonymizationLevel })
        }
      />

      {/* Encryption */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 12,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.textPrimary,
              marginBottom: 2,
            }}
          >
            Encrypt Downloads
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
            }}
          >
            Automatically encrypt exported files
          </Text>
        </View>

        <Switch
          value={exportPrefs.encryption}
          onValueChange={(value) =>
            onUpdateExportPrefs({ ...exportPrefs, encryption: value })
          }
          trackColor={{
            false: colors.borderLight,
            true: `${colors.primary}40`,
          }}
          thumbColor={
            exportPrefs.encryption ? colors.primary : colors.textSecondary
          }
        />
      </View>
    </View>
  );
}

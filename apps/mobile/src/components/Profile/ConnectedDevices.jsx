import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckCircle, Clock, XCircle } from "lucide-react-native";

export function ConnectedDevices({ devices, colors, onDeviceConnect }) {
  const getDeviceStatusIcon = (status) => {
    switch (status) {
      case "connected":
        return <CheckCircle size={16} color={colors.success} />;
      case "syncing":
        return <Clock size={16} color={colors.warning} />;
      case "disconnected":
        return <XCircle size={16} color={colors.error} />;
      default:
        return <XCircle size={16} color={colors.textSecondary} />;
    }
  };

  const getDeviceStatusColor = (status) => {
    switch (status) {
      case "connected":
        return colors.success;
      case "syncing":
        return colors.warning;
      case "disconnected":
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: colors.textPrimary,
          marginBottom: 16,
        }}
      >
        Connected Devices
      </Text>

      {devices.map((device, index) => (
        <TouchableOpacity
          key={device.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            borderBottomWidth: index < devices.length - 1 ? 1 : 0,
            borderBottomColor: colors.borderLight,
          }}
          onPress={() =>
            device.status === "disconnected" && onDeviceConnect(device)
          }
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.surfaceVariant,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <device.icon size={20} color={colors.textPrimary} />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
                marginBottom: 2,
              }}
            >
              {device.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: getDeviceStatusColor(device.status),
              }}
            >
              Last sync: {device.lastSync}
            </Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            {getDeviceStatusIcon(device.status)}
            {device.status === "disconnected" && (
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: colors.primary,
                  marginTop: 4,
                }}
              >
                Connect
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

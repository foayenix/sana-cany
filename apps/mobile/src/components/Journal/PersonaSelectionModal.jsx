import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import { X } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";

export function PersonaSelectionModal({
  visible,
  onClose,
  personas,
  selectedPersona,
  onSelectPersona,
}) {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View
          style={{
            backgroundColor: colors.surface,
            paddingHorizontal: 20,
            paddingTop: insets.top + 16,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              Choose AI Persona
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: colors.surfaceVariant,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <X size={20} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter_400Regular",
              color: colors.textSecondary,
              marginTop: 8,
            }}
          >
            Select the AI perspective that resonates with you
          </Text>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
          {personas.map((persona) => (
            <TouchableOpacity
              key={persona.id}
              style={{
                backgroundColor:
                  selectedPersona?.id === persona.id
                    ? `${persona.color}20`
                    : colors.surface,
                borderWidth: selectedPersona?.id === persona.id ? 2 : 1,
                borderColor:
                  selectedPersona?.id === persona.id
                    ? persona.color
                    : colors.border,
                borderRadius: 16,
                padding: 20,
                marginBottom: 16,
              }}
              onPress={() => {
                onSelectPersona(persona);
                onClose();
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <Text style={{ fontSize: 32, marginRight: 12 }}>
                  {persona.avatar}
                </Text>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Inter_600SemiBold",
                      color: colors.textPrimary,
                      marginBottom: 4,
                    }}
                  >
                    {persona.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_400Regular",
                      color: colors.textSecondary,
                    }}
                  >
                    {persona.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

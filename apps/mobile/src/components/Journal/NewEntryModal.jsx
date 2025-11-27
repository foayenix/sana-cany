import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { X, Send, Mic } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import { PersonaSelectionModal } from "./PersonaSelectionModal";

export function NewEntryModal({
  visible,
  onClose,
  entryText,
  onChangeText,
  selectedMood,
  onSelectMood,
  moods,
  selectedPersona,
  onSelectPersona,
  personas,
  onSave,
  showPersonaSelection,
  onShowPersonaSelection,
  onHidePersonaSelection,
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

            <Text
              style={{
                fontSize: 20,
                fontFamily: "Inter_600SemiBold",
                color: colors.textPrimary,
              }}
            >
              New Entry
            </Text>

            <TouchableOpacity
              onPress={onSave}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 16,
                paddingHorizontal: 16,
                paddingVertical: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Send size={16} color="white" />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_600SemiBold",
                  color: "white",
                  marginLeft: 6,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
          {/* Text Input */}
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
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
                marginBottom: 12,
              }}
            >
              How are you feeling today?
            </Text>
            <TextInput
              style={{
                fontSize: 16,
                fontFamily: "Inter_400Regular",
                color: colors.textPrimary,
                minHeight: 120,
                textAlignVertical: "top",
              }}
              multiline
              placeholder="Share your thoughts, feelings, or experiences..."
              placeholderTextColor={colors.textSecondary}
              value={entryText}
              onChangeText={onChangeText}
            />

            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                marginTop: 12,
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: colors.surfaceVariant,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Mic size={20} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>

          {/* Mood Selection */}
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
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
                marginBottom: 12,
              }}
            >
              Current Mood
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {moods.map((mood) => (
                <TouchableOpacity
                  key={mood.id}
                  style={{
                    backgroundColor:
                      selectedMood?.id === mood.id
                        ? `${mood.color}20`
                        : colors.surfaceVariant,
                    borderWidth: selectedMood?.id === mood.id ? 2 : 0,
                    borderColor: mood.color,
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    margin: 4,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => onSelectMood(mood)}
                >
                  <Text style={{ fontSize: 16, marginRight: 6 }}>
                    {mood.emoji}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_500Medium",
                      color: colors.textPrimary,
                    }}
                  >
                    {mood.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* AI Persona Selection */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.surface,
              borderRadius: 16,
              padding: 16,
              marginBottom: 20,
              borderWidth: selectedPersona ? 2 : 1,
              borderColor: selectedPersona
                ? selectedPersona.color
                : colors.border,
            }}
            onPress={onShowPersonaSelection}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Inter_500Medium",
                color: colors.textPrimary,
                marginBottom: 8,
              }}
            >
              AI Perspective
            </Text>
            {selectedPersona ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 24, marginRight: 12 }}>
                  {selectedPersona.avatar}
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Inter_600SemiBold",
                      color: colors.textPrimary,
                    }}
                  >
                    {selectedPersona.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Inter_400Regular",
                      color: colors.textSecondary,
                    }}
                  >
                    {selectedPersona.description}
                  </Text>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter_400Regular",
                  color: colors.textSecondary,
                }}
              >
                Choose an AI persona to provide insights
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>

        <PersonaSelectionModal
          visible={showPersonaSelection}
          onClose={onHidePersonaSelection}
          personas={personas}
          selectedPersona={selectedPersona}
          onSelectPersona={onSelectPersona}
        />
      </View>
    </Modal>
  );
}

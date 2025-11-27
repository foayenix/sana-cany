import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Plus } from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { JournalHeader } from "./JournalHeader";
import { JournalEntry } from "./JournalEntry";
import { NewEntryModal } from "./NewEntryModal";
import { EmptyJournalState } from "./EmptyJournalState";
import {
  getMoods,
  getAIPersonas,
  getSampleEntries,
  generateAIResponse,
} from "@/utils/journalData";

export function PatientJournal() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();

  const [showNewEntry, setShowNewEntry] = useState(false);
  const [entryText, setEntryText] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [showPersonaSelection, setShowPersonaSelection] = useState(false);

  const moods = getMoods(colors);
  const aiPersonas = getAIPersonas(colors);
  const sampleEntries = getSampleEntries(moods, aiPersonas);
  const [displayedEntries, setDisplayedEntries] = useState(sampleEntries);

  const handleSaveEntry = () => {
    if (!entryText.trim() || !selectedMood || !selectedPersona) {
      Alert.alert(
        "Incomplete Entry",
        "Please add your thoughts, select a mood, and choose an AI persona.",
      );
      return;
    }

    const aiResponse = generateAIResponse(
      entryText,
      selectedPersona,
      selectedMood,
    );
    const now = new Date();
    const newEntry = {
      id: Date.now(),
      date: now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      preview:
        entryText.substring(0, 100) + (entryText.length > 100 ? "..." : ""),
      mood: selectedMood,
      persona: selectedPersona,
      tags: ["new-entry"],
      aiResponse: aiResponse,
      fullText: entryText,
    };

    setDisplayedEntries([newEntry, ...displayedEntries]);
    setEntryText("");
    setSelectedMood(null);
    setSelectedPersona(null);
    setShowNewEntry(false);

    Alert.alert(
      "Entry Saved",
      "Your journal entry has been saved with AI insights!",
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top }}>
        <JournalHeader />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: insets.bottom + 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        {displayedEntries.length > 0 ? (
          displayedEntries.map((entry) => (
            <JournalEntry key={entry.id} entry={entry} />
          ))
        ) : (
          <EmptyJournalState />
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: insets.bottom + 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
        onPress={() => setShowNewEntry(true)}
      >
        <Plus size={28} color="white" />
      </TouchableOpacity>

      <NewEntryModal
        visible={showNewEntry}
        onClose={() => setShowNewEntry(false)}
        entryText={entryText}
        onChangeText={setEntryText}
        selectedMood={selectedMood}
        onSelectMood={setSelectedMood}
        moods={moods}
        selectedPersona={selectedPersona}
        onSelectPersona={setSelectedPersona}
        personas={aiPersonas}
        onSave={handleSaveEntry}
        showPersonaSelection={showPersonaSelection}
        onShowPersonaSelection={() => setShowPersonaSelection(true)}
        onHidePersonaSelection={() => setShowPersonaSelection(false)}
      />
    </View>
  );
}

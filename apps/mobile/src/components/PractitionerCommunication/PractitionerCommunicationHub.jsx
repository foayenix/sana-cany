import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "@/utils/theme";
import { CommunicationHeader } from "./CommunicationHeader";
import { TabSelector } from "./TabSelector";
import { ConversationItem } from "./ConversationItem";
import { SessionNote } from "./SessionNote";
import { getConversations, getSessionNotes } from "@/utils/practitionerData";

export function PractitionerCommunicationHub() {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const [selectedTab, setSelectedTab] = useState("messages");

  const conversations = getConversations();
  const sessionNotes = getSessionNotes();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={isDark ? "light" : "dark"} />

      <View style={{ paddingTop: insets.top }}>
        <CommunicationHeader />
      </View>

      <TabSelector selectedTab={selectedTab} onSelectTab={setSelectedTab} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {selectedTab === "messages"
          ? conversations.map((conversation) => (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
              />
            ))
          : sessionNotes.map((note) => (
              <SessionNote key={note.id} note={note} />
            ))}
      </ScrollView>
    </View>
  );
}

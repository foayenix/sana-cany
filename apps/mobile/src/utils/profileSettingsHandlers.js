import { Alert, Clipboard } from "react-native";

export const handleSaveProfile = (setIsEditing) => {
  setIsEditing(false);
  Alert.alert("Success", "Profile updated successfully");
};

export const handleCopyApiKey = (apiKey) => {
  Clipboard.setString(apiKey);
  Alert.alert("Copied", "API key copied to clipboard");
};

export const handleRegenerateApiKey = () => {
  Alert.alert(
    "Regenerate API Key",
    "This will invalidate your current API key. All applications using the current key will need to be updated. Continue?",
    [
      { text: "Cancel", style: "cancel" },
      {
        text: "Regenerate",
        style: "destructive",
        onPress: () => {
          Alert.alert("Success", "New API key generated");
        },
      },
    ],
  );
};

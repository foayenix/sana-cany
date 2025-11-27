import { Alert } from "react-native";

export const handleDeviceConnect = (device) => {
  Alert.alert("Connect Device", `Connect your ${device.name}?`, [
    { text: "Cancel", style: "cancel" },
    { text: "Connect", onPress: () => console.log("Connecting device...") },
  ]);
};

export const handleDataExport = () => {
  Alert.alert(
    "Export Data",
    "Your data will be prepared and sent to your email address.",
    [
      { text: "Cancel", style: "cancel" },
      { text: "Export", onPress: () => console.log("Exporting data...") },
    ],
  );
};

export const handleLogout = () => {
  Alert.alert("Log Out", "Are you sure you want to log out?", [
    { text: "Cancel", style: "cancel" },
    {
      text: "Log Out",
      style: "destructive",
      onPress: () => console.log("Logging out..."),
    },
  ]);
};

export const handleSwitchProfile = (profileType, setCurrentProfile) => {
  Alert.alert("Switch Profile", `Switch to ${profileType} mode?`, [
    { text: "Cancel", style: "cancel" },
    {
      text: "Switch",
      onPress: () => {
        setCurrentProfile(profileType);
        Alert.alert("Success", `Switched to ${profileType} profile`);
      },
    },
  ]);
};

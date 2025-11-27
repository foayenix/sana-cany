import { Smartphone, Watch } from "lucide-react-native";

export const healthInfo = {
  medications: ["Vitamin D3 1000 IU", "Omega-3 Fish Oil"],
  allergies: ["Shellfish", "Dairy"],
  conditions: ["Mild Anxiety", "Lower Back Pain"],
  healthGoals: ["Reduce Stress", "Improve Sleep Quality", "Increase Energy"],
};

export const connectedDevices = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    type: "smartphone",
    status: "connected",
    lastSync: "2 hours ago",
    icon: Smartphone,
  },
  {
    id: 2,
    name: "Oura Ring Gen 3",
    type: "wearable",
    status: "connected",
    lastSync: "1 hour ago",
    icon: Watch,
  },
  {
    id: 3,
    name: "Fitbit Sense 2",
    type: "wearable",
    status: "disconnected",
    lastSync: "Never",
    icon: Watch,
  },
  {
    id: 4,
    name: "WHOOP 4.0",
    type: "wearable",
    status: "disconnected",
    lastSync: "Never",
    icon: Watch,
  },
];

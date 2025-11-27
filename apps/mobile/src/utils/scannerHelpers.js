import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
} from "lucide-react-native";

export const getSafetyColor = (level, colors) => {
  switch (level) {
    case "safe":
      return colors.success;
    case "caution":
      return colors.warning;
    case "warning":
      return colors.orange;
    case "danger":
      return colors.error;
    default:
      return colors.textSecondary;
  }
};

export const getSafetyIcon = (level) => {
  switch (level) {
    case "safe":
      return CheckCircle;
    case "caution":
      return AlertCircle;
    case "warning":
      return AlertTriangle;
    case "danger":
      return AlertTriangle;
    default:
      return Info;
  }
};

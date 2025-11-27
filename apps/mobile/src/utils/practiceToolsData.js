import {
  Stethoscope,
  BarChart3,
  FileText,
  Users,
  Heart,
  Brain,
  Activity,
  Clock,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  MessageCircle,
} from "lucide-react-native";

export const toolCategories = (colors) => [
  {
    id: "assessments",
    name: "Assessments",
    icon: Stethoscope,
    color: colors.primary,
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: BarChart3,
    color: colors.secondary,
  },
  {
    id: "documents",
    name: "Documents",
    icon: FileText,
    color: colors.accent,
  },
  {
    id: "patients",
    name: "Patients",
    icon: Users,
    color: colors.warning,
  },
];

export const assessmentTools = (colors) => [
  {
    id: 1,
    name: "Wellness Assessment",
    description: "Comprehensive 6-dimension wellness evaluation",
    icon: Heart,
    color: colors.physical,
    duration: "15-20 min",
    category: "General",
    usage: "Pre-session, Monthly check-ins",
  },
  {
    id: 2,
    name: "Mental Health Screening",
    description: "Depression, anxiety, and stress indicators",
    icon: Brain,
    color: colors.mental,
    duration: "10-15 min",
    category: "Mental Health",
    usage: "Initial consultation, Quarterly",
  },
  {
    id: 3,
    name: "Pain Scale Assessment",
    description: "Visual analog scale for pain measurement",
    icon: Activity,
    color: colors.error,
    duration: "3-5 min",
    category: "Physical",
    usage: "Before/after treatment",
  },
  {
    id: 4,
    name: "Sleep Quality Index",
    description: "Comprehensive sleep pattern analysis",
    icon: Clock,
    color: colors.sleep,
    duration: "8-10 min",
    category: "Sleep",
    usage: "Sleep-related consultations",
  },
];

export const analyticsTools = (colors) => [
  {
    id: 1,
    name: "Practice Overview",
    description: "Patient flow, revenue, and outcome metrics",
    icon: TrendingUp,
    color: colors.success,
    lastUpdated: "Real-time",
    insights: "3 new insights available",
  },
  {
    id: 2,
    name: "Patient Outcomes",
    description: "Treatment effectiveness and progress tracking",
    icon: CheckCircle,
    color: colors.primary,
    lastUpdated: "1 hour ago",
    insights: "Weekly report ready",
  },
  {
    id: 3,
    name: "Treatment Comparisons",
    description: "Compare intervention effectiveness",
    icon: BarChart3,
    color: colors.accent,
    lastUpdated: "Today",
    insights: "2 treatment insights",
  },
];

export const documentTools = (colors) => [
  {
    id: 1,
    name: "Treatment Plans",
    description: "Create and manage patient treatment protocols",
    icon: FileText,
    color: colors.primary,
    templates: 12,
    recent: "Updated 2 hours ago",
  },
  {
    id: 2,
    name: "Consent Forms",
    description: "Digital consent and agreement management",
    icon: ShieldCheck,
    color: colors.success,
    templates: 8,
    recent: "3 pending signatures",
  },
  {
    id: 3,
    name: "Progress Notes",
    description: "Session notes and progress documentation",
    icon: MessageCircle,
    color: colors.info,
    templates: 6,
    recent: "Last updated today",
  },
];

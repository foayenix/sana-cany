import { User, Building, Bell, Key, Download } from "lucide-react-native";

export const sections = [
  { id: "profile", title: "Profile", icon: User },
  { id: "institution", title: "Institution", icon: Building },
  { id: "notifications", title: "Notifications", icon: Bell },
  { id: "api", title: "API Access", icon: Key },
  { id: "export", title: "Data Export", icon: Download },
];

export const initialProfileData = {
  name: "Dr. Sarah Chen",
  email: "sarah.chen@university.edu",
  phone: "+1 (555) 123-4567",
  institution: "Stanford University School of Medicine",
  department: "Department of Integrative Medicine",
  role: "Principal Investigator",
  orcid: "0000-0002-1825-0097",
  bio: "Research focus on integrative medicine approaches to chronic disease management. Specialized in herbal medicine efficacy studies and patient-centered outcomes research.",
  researchInterests: [
    "Integrative Medicine",
    "Chronic Pain",
    "Herbal Medicine",
    "Clinical Trials",
    "Patient Outcomes",
  ],
  profileVisible: true,
};

export const initialNotifications = {
  datasetApproved: true,
  newDatasets: true,
  collaborationRequests: true,
  publicationAlerts: true,
  systemUpdates: false,
  securityAlerts: true,
};

export const apiData = {
  key: "sana_pk_test_51HyVx2SdpFg9Q8vKzJwXmP3Nj2rK8aB9CxVfG2dE4hYuP1mNwQ6sT7bR3zA5L",
  rateLimits: {
    requests: "10,000",
    period: "per hour",
    burst: "100",
  },
  usage: {
    current: 2847,
    limit: 10000,
  },
};

export const initialExportPrefs = {
  format: "CSV",
  includeCodebook: true,
  anonymizationLevel: "Standard",
  encryption: true,
};

export const institutionalData = {
  name: "Stanford University School of Medicine",
  department: "Department of Integrative Medicine",
  role: "Principal Investigator",
  verified: true,
  accessTier: "Premium",
  since: "2019-03-15",
};

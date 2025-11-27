import { create } from "zustand";

export const useProfileStore = create((set, get) => ({
  currentProfile: "patient", // 'patient', 'practitioner', 'researcher'

  // Profile data
  patientData: {
    name: "Sarah Mitchell",
    email: "sarah.mitchell@example.com",
    phone: "+44 7123 456789",
    dateOfBirth: "March 15, 1992",
    location: "London, UK",
    memberSince: "January 2024",
    profilePhoto:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=120&h=120&fit=crop&crop=face",
  },

  practitionerData: {
    name: "Dr. Sarah Mitchell",
    email: "sarah.mitchell@sanaclinic.com",
    specialty: "Holistic Medicine",
    license: "UK-HM-2024-001",
    memberSince: "January 2024",
    profilePhoto:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=120&h=120&fit=crop&crop=face",
    patients: 47,
    rating: 4.9,
    reviewCount: 156,
  },

  researcherData: {
    name: "Dr. Sarah Mitchell",
    email: "sarah.mitchell@research.sana.com",
    institution: "SANA Research Institute",
    department: "Digital Health Analytics",
    researchId: "SANA-RES-2024-001",
    memberSince: "January 2024",
    profilePhoto:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=120&h=120&fit=crop&crop=face",
    activeDatasets: 12,
    publications: 23,
    collaborations: 8,
    accessLevel: "Senior Researcher",
  },

  // Actions
  setCurrentProfile: (profile) => set({ currentProfile: profile }),

  // Getters
  getCurrentProfileData: () => {
    const state = get();
    switch (state.currentProfile) {
      case "practitioner":
        return state.practitionerData;
      case "researcher":
        return state.researcherData;
      default:
        return state.patientData;
    }
  },

  isPractitioner: () => get().currentProfile === "practitioner",
  isPatient: () => get().currentProfile === "patient",
  isResearcher: () => get().currentProfile === "researcher",
}));

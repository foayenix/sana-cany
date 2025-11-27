import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Search,
  Filter,
  Plus,
  User,
  MapPin,
  Star,
  Clock,
  Phone,
  Mail,
  Calendar,
  Send,
  CheckCircle,
  AlertTriangle,
  Eye,
  MessageCircle,
  Users,
  Stethoscope,
  Award,
  X,
  ChevronRight,
  BookOpen,
  Heart,
} from "lucide-react-native";
import { useAppTheme } from "@/utils/theme";
import { useRouter } from "expo-router";

export default function PractitionerReferralsPage() {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("directory");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewReferralModal, setShowNewReferralModal] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);

  // Mock data for practitioner directory
  const practitionerDirectory = [
    {
      id: "PRAC001",
      name: "Dr. Michael Thompson",
      specialty: "Cardiology",
      subSpecialty: "Interventional Cardiology",
      rating: 4.9,
      reviewCount: 127,
      location: "Stanford Medical Center",
      distance: "0.8 miles",
      waitTime: "2-3 weeks",
      acceptingNew: true,
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      credentials: ["MD", "FACC"],
      languages: ["English", "Spanish"],
      insuranceAccepted: ["Blue Cross", "Aetna", "Medicare"],
      expertise: [
        "Heart Disease",
        "Cardiac Catheterization",
        "Stent Placement",
      ],
    },
    {
      id: "PRAC002",
      name: "Dr. Sarah Martinez",
      specialty: "Orthopedics",
      subSpecialty: "Sports Medicine",
      rating: 4.8,
      reviewCount: 89,
      location: "Valley Sports Medicine",
      distance: "1.2 miles",
      waitTime: "1-2 weeks",
      acceptingNew: true,
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      credentials: ["MD", "FACOS"],
      languages: ["English", "Mandarin"],
      insuranceAccepted: ["Blue Cross", "Kaiser", "United"],
      expertise: ["ACL Reconstruction", "Shoulder Surgery", "Sports Injuries"],
    },
    {
      id: "PRAC003",
      name: "Dr. James Wilson",
      specialty: "Dermatology",
      subSpecialty: "Dermatopathology",
      rating: 4.7,
      reviewCount: 156,
      location: "Peninsula Dermatology",
      distance: "2.1 miles",
      waitTime: "3-4 weeks",
      acceptingNew: false,
      photo:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      credentials: ["MD", "FAAD"],
      languages: ["English"],
      insuranceAccepted: ["Blue Cross", "Aetna", "Cigna"],
      expertise: ["Skin Cancer", "Mole Removal", "Cosmetic Dermatology"],
    },
    {
      id: "PRAC004",
      name: "Dr. Lisa Chen",
      specialty: "Neurology",
      subSpecialty: "Movement Disorders",
      rating: 4.9,
      reviewCount: 203,
      location: "Bay Area Neurology",
      distance: "1.7 miles",
      waitTime: "4-6 weeks",
      acceptingNew: true,
      photo:
        "https://images.unsplash.com/photo-1594824388344-5d4635d2ce6e?w=400&h=400&fit=crop",
      credentials: ["MD", "PhD"],
      languages: ["English", "Mandarin", "Cantonese"],
      insuranceAccepted: ["All Major Insurance"],
      expertise: ["Parkinsons Disease", "Tremor", "Movement Disorders"],
    },
  ];

  // Mock referral history
  const referralHistory = [
    {
      id: "REF001",
      patientName: "John Anderson",
      referredTo: "Dr. Michael Thompson - Cardiology",
      date: "2024-11-20",
      status: "Completed",
      appointmentDate: "2024-11-25",
      reason: "Chest pain evaluation",
      urgency: "routine",
      notes: "Patient reports intermittent chest pain during exercise",
    },
    {
      id: "REF002",
      patientName: "Maria Garcia",
      referredTo: "Dr. Sarah Martinez - Orthopedics",
      date: "2024-11-18",
      status: "Pending",
      appointmentDate: null,
      reason: "Knee pain assessment",
      urgency: "routine",
      notes: "Chronic knee pain affecting daily activities",
    },
    {
      id: "REF003",
      patientName: "David Kim",
      referredTo: "Dr. Lisa Chen - Neurology",
      date: "2024-11-15",
      status: "Scheduled",
      appointmentDate: "2024-12-02",
      reason: "Tremor evaluation",
      urgency: "urgent",
      notes: "Progressive hand tremor, family history of Parkinsons",
    },
  ];

  const specialties = [
    { id: "all", name: "All Specialties", count: practitionerDirectory.length },
    { id: "cardiology", name: "Cardiology", count: 1 },
    { id: "orthopedics", name: "Orthopedics", count: 1 },
    { id: "dermatology", name: "Dermatology", count: 1 },
    { id: "neurology", name: "Neurology", count: 1 },
  ];

  const tabs = [
    { id: "directory", title: "Find Practitioners", icon: Search },
    { id: "referrals", title: "My Referrals", icon: Send },
    { id: "patients", title: "Referred Patients", icon: Users },
  ];

  const filteredPractitioners = practitionerDirectory.filter((practitioner) => {
    const matchesSearch =
      practitioner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practitioner.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" ||
      practitioner.specialty.toLowerCase() === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const renderPractitionerCard = (practitioner) => (
    <TouchableOpacity
      key={practitioner.id}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: practitioner.acceptingNew
          ? colors.success
          : colors.warning,
      }}
      onPress={() => setSelectedPractitioner(practitioner)}
    >
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <Image
          source={{ uri: practitioner.photo }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 12,
          }}
        />

        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
                flex: 1,
              }}
            >
              {practitioner.name}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Star size={14} color={colors.warning} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: colors.textPrimary,
                  marginLeft: 4,
                }}
              >
                {practitioner.rating}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textSecondary,
                  marginLeft: 4,
                }}
              >
                ({practitioner.reviewCount})
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.primary,
              marginBottom: 2,
            }}
          >
            {practitioner.specialty} • {practitioner.subSpecialty}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <MapPin size={12} color={colors.textSecondary} />
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginLeft: 4,
                marginRight: 12,
              }}
            >
              {practitioner.location} • {practitioner.distance}
            </Text>

            <Clock size={12} color={colors.textSecondary} />
            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
                marginLeft: 4,
              }}
            >
              {practitioner.waitTime}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: practitioner.acceptingNew
                  ? `${colors.success}20`
                  : `${colors.warning}20`,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 8,
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: practitioner.acceptingNew
                    ? colors.success
                    : colors.warning,
                }}
              >
                {practitioner.acceptingNew
                  ? "Accepting New Patients"
                  : "Waitlist Only"}
              </Text>
            </View>

            {practitioner.credentials.map((cred, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: `${colors.primary}20`,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 6,
                  marginRight: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "500",
                    color: colors.primary,
                  }}
                >
                  {cred}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => handleReferPatient(practitioner)}
        >
          <Send size={14} color="white" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "white",
              marginLeft: 4,
            }}
          >
            Refer Patient
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Eye size={14} color={colors.textPrimary} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textPrimary,
              marginLeft: 4,
            }}
          >
            Details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.background,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <MessageCircle size={14} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderReferralCard = (referral) => {
    const getStatusColor = (status) => {
      switch (status) {
        case "Completed":
          return colors.success;
        case "Scheduled":
          return colors.primary;
        case "Pending":
          return colors.warning;
        default:
          return colors.textSecondary;
      }
    };

    const getUrgencyColor = (urgency) => {
      switch (urgency) {
        case "urgent":
          return colors.error;
        case "routine":
          return colors.textSecondary;
        default:
          return colors.textSecondary;
      }
    };

    return (
      <View
        key={referral.id}
        style={{
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          borderLeftWidth: 4,
          borderLeftColor: getStatusColor(referral.status),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textPrimary,
                marginBottom: 4,
              }}
            >
              {referral.patientName}
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                marginBottom: 4,
              }}
            >
              {referral.referredTo}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: colors.textSecondary,
              }}
            >
              Referred: {new Date(referral.date).toLocaleDateString()}
            </Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: `${getStatusColor(referral.status)}20`,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 8,
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: getStatusColor(referral.status),
                }}
              >
                {referral.status}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: `${getUrgencyColor(referral.urgency)}20`,
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "500",
                  color: getUrgencyColor(referral.urgency),
                }}
              >
                {referral.urgency.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.textPrimary,
              marginBottom: 4,
            }}
          >
            Reason: {referral.reason}
          </Text>

          {referral.appointmentDate && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <Calendar size={12} color={colors.primary} />
              <Text
                style={{
                  fontSize: 12,
                  color: colors.primary,
                  marginLeft: 4,
                }}
              >
                Appointment:{" "}
                {new Date(referral.appointmentDate).toLocaleDateString()}
              </Text>
            </View>
          )}

          <Text
            style={{
              fontSize: 11,
              color: colors.textSecondary,
              fontStyle: "italic",
            }}
          >
            {referral.notes}
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: colors.background,
              borderRadius: 8,
              paddingVertical: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Eye size={14} color={colors.textPrimary} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: colors.textPrimary,
                marginLeft: 4,
              }}
            >
              View Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MessageCircle size={14} color="white" />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "white",
                marginLeft: 4,
              }}
            >
              Follow Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleReferPatient = (practitioner) => {
    setSelectedPractitioner(practitioner);
    setShowNewReferralModal(true);
  };

  const renderNewReferralModal = () => (
    <Modal visible={showNewReferralModal} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: colors.background,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 20,
            maxHeight: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: colors.textPrimary,
              }}
            >
              New Referral
            </Text>

            <TouchableOpacity onPress={() => setShowNewReferralModal(false)}>
              <X size={24} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {selectedPractitioner && (
              <View
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.textSecondary,
                    marginBottom: 8,
                  }}
                >
                  Referring to:
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: selectedPractitioner.photo }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      marginRight: 12,
                    }}
                  />

                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: colors.textPrimary,
                      }}
                    >
                      {selectedPractitioner.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.textSecondary,
                      }}
                    >
                      {selectedPractitioner.specialty} •{" "}
                      {selectedPractitioner.location}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* Patient Selection */}
            <View style={{ marginBottom: 16 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Select Patient
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 8,
                  padding: 12,
                  borderWidth: 1,
                  borderColor: colors.border,
                }}
              >
                <Text style={{ fontSize: 14, color: colors.textSecondary }}>
                  Choose from patient list...
                </Text>
              </TouchableOpacity>
            </View>

            {/* Reason for Referral */}
            <View style={{ marginBottom: 16 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Reason for Referral
              </Text>

              <TextInput
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 8,
                  padding: 12,
                  fontSize: 14,
                  color: colors.textPrimary,
                  minHeight: 80,
                  textAlignVertical: "top",
                }}
                placeholder="Describe the reason for this referral..."
                placeholderTextColor={colors.textSecondary}
                multiline
              />
            </View>

            {/* Urgency Level */}
            <View style={{ marginBottom: 16 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Urgency Level
              </Text>

              <View style={{ flexDirection: "row", gap: 8 }}>
                {["Routine", "Urgent", "ASAP"].map((level) => (
                  <TouchableOpacity
                    key={level}
                    style={{
                      backgroundColor: colors.surface,
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: colors.border,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "500",
                        color: colors.textPrimary,
                      }}
                    >
                      {level}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Clinical Notes */}
            <View style={{ marginBottom: 24 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Clinical Notes
              </Text>

              <TextInput
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: 8,
                  padding: 12,
                  fontSize: 14,
                  color: colors.textPrimary,
                  minHeight: 100,
                  textAlignVertical: "top",
                }}
                placeholder="Additional clinical information, test results, etc..."
                placeholderTextColor={colors.textSecondary}
                multiline
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: "center",
                marginBottom: 8,
              }}
              onPress={() => {
                setShowNewReferralModal(false);
                Alert.alert("Success", "Referral sent successfully");
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Send Referral
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "directory":
        return (
          <View>
            {/* Specialty Filter */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 20 }}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {specialties.map((specialty) => (
                <TouchableOpacity
                  key={specialty.id}
                  style={{
                    backgroundColor:
                      selectedSpecialty === specialty.id
                        ? colors.primary
                        : colors.surface,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 20,
                    marginRight: 12,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => setSelectedSpecialty(specialty.id)}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color:
                        selectedSpecialty === specialty.id
                          ? "white"
                          : colors.textPrimary,
                      marginRight: 4,
                    }}
                  >
                    {specialty.name}
                  </Text>

                  <View
                    style={{
                      backgroundColor:
                        selectedSpecialty === specialty.id
                          ? "rgba(255,255,255,0.3)"
                          : `${colors.primary}20`,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      borderRadius: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: "600",
                        color:
                          selectedSpecialty === specialty.id
                            ? "white"
                            : colors.primary,
                      }}
                    >
                      {specialty.count}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={{ paddingHorizontal: 20 }}>
              {filteredPractitioners.map(renderPractitionerCard)}
            </View>
          </View>
        );

      case "referrals":
        return (
          <View style={{ paddingHorizontal: 20 }}>
            {referralHistory.map(renderReferralCard)}
          </View>
        );

      case "patients":
        return (
          <View style={{ paddingHorizontal: 20 }}>
            <View
              style={{
                backgroundColor: colors.surface,
                borderRadius: 16,
                padding: 24,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Users
                size={48}
                color={colors.textSecondary}
                style={{ marginBottom: 16 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Referred Patients
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.textSecondary,
                  textAlign: "center",
                  lineHeight: 20,
                }}
              >
                Track patients you've referred to other practitioners and their
                progress
              </Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.textPrimary} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: colors.textPrimary,
              flex: 1,
              marginLeft: 16,
            }}
          >
            Patient Referrals
          </Text>

          <TouchableOpacity
            onPress={() => setShowNewReferralModal(true)}
            style={{
              backgroundColor: colors.primary,
              borderRadius: 20,
              paddingHorizontal: 12,
              paddingVertical: 6,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Plus size={16} color="white" />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "white",
                marginLeft: 4,
              }}
            >
              New
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar - only show on directory tab */}
        {activeTab === "directory" && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.surface,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}
          >
            <Search size={20} color={colors.textSecondary} />
            <TextInput
              style={{
                flex: 1,
                marginLeft: 8,
                fontSize: 16,
                color: colors.textPrimary,
              }}
              placeholder="Search practitioners..."
              placeholderTextColor={colors.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        )}
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 16 }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <TouchableOpacity
              key={tab.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 20,
                backgroundColor: isActive ? colors.primary : colors.surface,
                marginRight: 12,
              }}
              onPress={() => setActiveTab(tab.id)}
            >
              <Icon
                size={16}
                color={isActive ? "white" : colors.textSecondary}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: isActive ? "white" : colors.textPrimary,
                  marginLeft: 8,
                }}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Tab Content */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {renderTabContent()}
      </ScrollView>

      {/* New Referral Modal */}
      {renderNewReferralModal()}
    </View>
  );
}

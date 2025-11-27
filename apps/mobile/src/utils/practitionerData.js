export const getConversations = () => [
  {
    id: 1,
    patient: {
      name: "Emily Roberts",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face",
      status: "online",
    },
    lastMessage: "Thank you for the session today! I'm feeling much better.",
    time: "2:30 PM",
    unread: true,
    urgentCount: 0,
    isUrgent: false,
  },
  {
    id: 2,
    patient: {
      name: "Michael Chen",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      status: "offline",
    },
    lastMessage: "Could we reschedule tomorrow's appointment?",
    time: "11:45 AM",
    unread: false,
    urgentCount: 0,
    isUrgent: false,
  },
  {
    id: 3,
    patient: {
      name: "Sarah Johnson",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      status: "offline",
    },
    lastMessage: "I've been experiencing increased pain levels since yesterday",
    time: "Yesterday",
    unread: true,
    urgentCount: 2,
    isUrgent: true,
  },
  {
    id: 4,
    patient: {
      name: "David Wilson",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      status: "online",
    },
    lastMessage: "Weekly check-in: feeling great this week!",
    time: "Yesterday",
    unread: false,
    urgentCount: 0,
    isUrgent: false,
  },
];

export const getSessionNotes = () => [
  {
    id: 1,
    patient: {
      name: "Emily Roberts",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face",
      condition: "Anxiety, Sleep Issues",
    },
    date: "November 25, 2024",
    time: "9:00 AM",
    session: "Initial Consultation",
    duration: "60 min",
    notes:
      "Patient presented with chronic anxiety and sleep disruption. Discussed breathing techniques and lifestyle modifications...",
    tags: ["anxiety", "sleep", "breathing-techniques"],
    status: "draft",
  },
  {
    id: 2,
    patient: {
      name: "Michael Chen",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      condition: "Lower Back Pain",
    },
    date: "November 24, 2024",
    time: "10:30 AM",
    session: "Follow-up Session",
    duration: "60 min",
    notes:
      "Significant improvement in pain levels. Patient reports 60% reduction since treatment began. Continue current protocol...",
    tags: ["pain-management", "improvement", "progress"],
    status: "completed",
  },
  {
    id: 3,
    patient: {
      name: "Sarah Johnson",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      condition: "Chronic Fatigue",
    },
    date: "November 22, 2024",
    time: "2:00 PM",
    session: "Treatment Session",
    duration: "60 min",
    notes:
      "Patient experiencing flare-up of symptoms. Discussed stress management techniques and adjusted treatment plan...",
    tags: ["chronic-fatigue", "flare-up", "stress-management"],
    status: "completed",
  },
];

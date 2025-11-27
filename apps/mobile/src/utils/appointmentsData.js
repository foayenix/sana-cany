export const upcomingAppointments = [
  {
    id: 1,
    practitioner: {
      name: "Dr. Emma Thompson",
      specialty: "Holistic Medicine",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face",
      rating: 4.9,
    },
    date: "Tomorrow",
    time: "2:00 PM",
    duration: "60 min",
    type: "Follow-up Consultation",
    location: "Wellness Center",
    address: "123 Health St, Downtown",
    isVirtual: false,
    status: "confirmed",
    notes: "Discuss recent lab results and treatment plan",
  },
  {
    id: 2,
    practitioner: {
      name: "Dr. Michael Chen",
      specialty: "Physiotherapy",
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=face",
      rating: 4.8,
    },
    date: "Dec 2",
    time: "10:30 AM",
    duration: "45 min",
    type: "Physical Therapy Session",
    location: "Motion Clinic",
    address: "456 Recovery Ave",
    isVirtual: false,
    status: "confirmed",
    notes: "Continue lower back rehabilitation exercises",
  },
];

export const pastAppointments = [
  {
    id: 3,
    practitioner: {
      name: "Dr. Sarah Johnson",
      specialty: "Nutrition Therapy",
      photo:
        "https://images.unsplash.com/photo-1594824375128-b296644e58fc?w=60&h=60&fit=crop&crop=face",
      rating: 4.7,
    },
    date: "Nov 20",
    time: "3:00 PM",
    duration: "60 min",
    type: "Initial Consultation",
    location: "Nutrition Center",
    address: "789 Wellness Blvd",
    isVirtual: true,
    status: "completed",
    notes: "Comprehensive nutritional assessment completed",
  },
  {
    id: 4,
    practitioner: {
      name: "Dr. Emma Thompson",
      specialty: "Holistic Medicine",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face",
      rating: 4.9,
    },
    date: "Nov 15",
    time: "1:30 PM",
    duration: "60 min",
    type: "Initial Consultation",
    location: "Wellness Center",
    address: "123 Health St, Downtown",
    isVirtual: false,
    status: "completed",
    notes: "Initial health assessment and goal setting",
  },
];

export const todaysAppointments = [
  {
    id: 1,
    patient: {
      name: "Emily Roberts",
      age: 29,
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face",
      condition: "Anxiety, Sleep Issues",
    },
    time: "9:00 AM",
    endTime: "10:00 AM",
    duration: "60 min",
    type: "Initial Consultation",
    location: "Room 1",
    status: "confirmed",
    isNew: true,
    notes: "First visit - comprehensive assessment",
    priority: "normal",
  },
  {
    id: 2,
    patient: {
      name: "Michael Chen",
      age: 34,
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      condition: "Lower Back Pain",
    },
    time: "10:30 AM",
    endTime: "11:30 AM",
    duration: "60 min",
    type: "Follow-up Session",
    location: "Room 2",
    status: "confirmed",
    isNew: false,
    notes: "Progress review - week 3 of treatment",
    priority: "normal",
  },
  {
    id: 3,
    patient: {
      name: "Sarah Johnson",
      age: 41,
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      condition: "Chronic Fatigue",
    },
    time: "2:00 PM",
    endTime: "3:00 PM",
    duration: "60 min",
    type: "Treatment Session",
    location: "Room 1",
    status: "pending",
    isNew: false,
    notes: "Patient requested schedule change",
    priority: "high",
  },
  {
    id: 4,
    patient: {
      name: "David Wilson",
      age: 55,
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      condition: "Maintenance",
    },
    time: "3:30 PM",
    endTime: "4:15 PM",
    duration: "45 min",
    type: "Wellness Check",
    location: "Room 2",
    status: "confirmed",
    isNew: false,
    notes: "Monthly wellness maintenance",
    priority: "normal",
  },
];

export const scheduleStats = {
  todaysAppointments: 4,
  completed: 2,
  remaining: 4,
  totalDuration: "4h 45m",
};

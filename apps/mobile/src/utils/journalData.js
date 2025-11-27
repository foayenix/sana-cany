export const getMoods = (colors) => [
  { id: 1, name: "Great", color: colors.success, emoji: "😊" },
  { id: 2, name: "Good", color: colors.info, emoji: "🙂" },
  { id: 3, name: "Okay", color: colors.warning, emoji: "😐" },
  { id: 4, name: "Low", color: colors.error, emoji: "😔" },
  { id: 5, name: "Anxious", color: colors.mental, emoji: "😰" },
];

export const getAIPersonas = (colors) => [
  {
    id: 1,
    name: "Compassionate Therapist",
    description: "I hear your struggles and I'm here to support you",
    color: colors.emotional,
    avatar: "💙",
    approach: "empathetic",
  },
  {
    id: 2,
    name: "Wise Philosopher",
    description: "Let's explore the deeper meaning of this experience",
    color: colors.mental,
    avatar: "🧠",
    approach: "reflective",
  },
  {
    id: 3,
    name: "Creative Poet",
    description: "Your feelings are valid and beautiful in their complexity",
    color: colors.accent,
    avatar: "🎨",
    approach: "artistic",
  },
  {
    id: 4,
    name: "Evidence-Based Coach",
    description: "Let's look at this through the lens of research and data",
    color: colors.primary,
    avatar: "📊",
    approach: "analytical",
  },
];

export const getSampleEntries = (moods, personas) => [
  {
    id: 1,
    date: "November 25, 2024",
    time: "2:30 PM",
    preview:
      "Had a wonderful session with Dr. Chen today. The acupuncture really helped with my stress levels...",
    mood: moods[0],
    persona: personas[0],
    tags: ["gratitude", "wellness", "stress-relief"],
    aiResponse:
      "It's beautiful to hear about your positive experience with acupuncture. Dr. Chen sounds like a wonderful practitioner who is supporting your wellness journey. The fact that you're feeling relief from stress shows your commitment to self-care is paying off.",
  },
  {
    id: 2,
    date: "November 23, 2024",
    time: "11:45 AM",
    preview:
      "Feeling a bit overwhelmed with work lately. The new project deadlines are stressing me out...",
    mood: moods[4],
    persona: personas[1],
    tags: ["work", "stress", "overwhelm"],
    aiResponse:
      "Work pressures can feel overwhelming, but consider this: every challenge is an opportunity for growth. What specific aspects of the project feel most daunting? Sometimes breaking down the seemingly impossible into smaller, manageable pieces reveals a clearer path forward.",
  },
  {
    id: 3,
    date: "November 20, 2024",
    time: "6:45 PM",
    preview:
      "Grateful for my morning meditation practice. It's becoming such an anchor in my daily routine...",
    mood: moods[1],
    persona: personas[2],
    tags: ["meditation", "gratitude", "morning-routine"],
    aiResponse:
      "Your meditation practice sounds like morning sunlight breaking through clouds - a gentle, persistent force that illuminates your entire day. There's poetry in this consistency, in choosing peace as your daily companion.",
  },
];

export const generateAIResponse = (text, persona, mood) => {
  const responses = {
    1: {
      positive:
        "It's wonderful to hear the positivity in your words. Your emotional awareness and ability to find joy shows real strength.",
      negative:
        "I can sense you're going through something difficult right now. These feelings are valid, and you don't have to face them alone.",
      neutral:
        "Thank you for sharing your thoughts with me. Sometimes just putting our feelings into words can be healing in itself.",
    },
    2: {
      positive:
        "Your experience reflects the ancient wisdom that gratitude transforms ordinary moments into blessings. What deeper insights does this bring to your life?",
      negative:
        "In times of struggle, we often discover our deepest truths. What might this experience be teaching you about yourself?",
      neutral:
        "Life is a tapestry of moments like these. How does this reflection fit into the larger story you're writing for yourself?",
    },
    3: {
      positive:
        "Your words dance with joy like sunbeams on water. There's music in your gratitude, a rhythm of contentment.",
      negative:
        "Even in darkness, there is poetry. Your pain is real and valid - let it flow through you like a river finding its way to the sea.",
      neutral:
        "Your thoughts are like brushstrokes on the canvas of today. Each word adds color to the portrait of your experience.",
    },
    4: {
      positive:
        "Research shows that positive journaling can increase wellbeing by 25%. Your practice is backed by solid evidence for improved mental health.",
      negative:
        "Studies indicate that expressing difficult emotions through writing can reduce stress hormones by up to 30%. This entry is part of your healing process.",
      neutral:
        "Consistent journaling has been proven to enhance self-awareness and emotional regulation. You are investing in evidence-based wellness.",
    },
  };

  const personaResponses = responses[persona.id];
  const moodType =
    mood.id <= 2 ? "positive" : mood.id >= 4 ? "negative" : "neutral";

  return personaResponses[moodType];
};

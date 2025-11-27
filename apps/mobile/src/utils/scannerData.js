export const mockProductData = {
  id: "12345678901",
  name: "Omega-3 Fish Oil Supplement",
  brand: "Nordic Naturals",
  image:
    "https://images.unsplash.com/photo-1559059076-9b141d87ae7c?w=200&h=200&fit=crop",
  sanaRating: 87,
  personalizedRating: 74,
  safetyLevel: "caution",
  studiesCount: 2847,
  ingredients: [
    "Fish Oil Concentrate",
    "Natural Vitamin E",
    "Gelatin Capsule",
    "Glycerin",
    "Water",
  ],
  warnings: [
    {
      type: "interaction",
      level: "moderate",
      text: "May interact with blood thinners",
      reason: "You take Warfarin (blood thinner)",
    },
    {
      type: "condition",
      level: "low",
      text: "Monitor with heart condition",
      reason: "You have reported heart palpitations",
    },
  ],
  benefits: [
    "Supports cardiovascular health",
    "Anti-inflammatory properties",
    "Brain function support",
  ],
  alternatives: [
    {
      name: "Algae-based Omega-3",
      brand: "Pure Encapsulations",
      rating: 92,
      reason: "No fish allergen concerns",
    },
    {
      name: "Flax Seed Oil",
      brand: "Spectrum",
      rating: 78,
      reason: "Plant-based alternative",
    },
  ],
  dosageRecommendation: {
    suggested: "1 capsule daily with meals",
    personalized:
      "Start with 1 capsule every other day due to blood thinner interaction",
  },
};

import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useCallback } from "react";

// Simple global state for theme
let globalDarkMode = null;
let themeUpdateCallbacks = [];

const notifyThemeUpdate = (isDark) => {
  globalDarkMode = isDark;
  themeUpdateCallbacks.forEach((callback) => callback());
};

const addThemeUpdateCallback = (callback) => {
  themeUpdateCallbacks.push(callback);
  return () => {
    themeUpdateCallbacks = themeUpdateCallbacks.filter((cb) => cb !== callback);
  };
};

export const useAppTheme = () => {
  const systemColorScheme = useColorScheme();
  const [userDarkMode, setUserDarkMode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, forceUpdate] = useState({});

  // Force re-render function
  const triggerUpdate = useCallback(() => {
    forceUpdate({});
  }, []);

  // Initialize dark mode preference from storage
  useEffect(() => {
    const loadDarkModePreference = async () => {
      try {
        const savedPreference =
          await AsyncStorage.getItem("darkModePreference");
        if (savedPreference !== null) {
          const isDarkMode = JSON.parse(savedPreference);
          setUserDarkMode(isDarkMode);
          globalDarkMode = isDarkMode;
        } else {
          // If no preference saved, default to light mode
          setUserDarkMode(false);
          globalDarkMode = false;
        }
      } catch (error) {
        console.error("Failed to load dark mode preference:", error);
        // Default to light mode on error
        setUserDarkMode(false);
        globalDarkMode = false;
      } finally {
        setIsLoading(false);
      }
    };

    loadDarkModePreference();
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const removeCallback = addThemeUpdateCallback(triggerUpdate);
    return removeCallback;
  }, [triggerUpdate]);

  // Sync with global state if it changes
  useEffect(() => {
    if (globalDarkMode !== null && globalDarkMode !== userDarkMode) {
      setUserDarkMode(globalDarkMode);
    }
  }, [userDarkMode]);

  // Use user preference if available, otherwise fall back to light mode
  const isDark = userDarkMode !== null ? userDarkMode : false;

  const lightColors = {
    // Premium Wellness Colors
    primary: "#58AA55", // Vibrant sage green
    primarySoft: "#A5BE5E", // Softer sage
    secondary: "#7BA5C6", // Soft blue
    accent: "#F4B942", // Warm yellow accent
    error: "#E07A5F", // Soft coral

    // Bright, Fresh Backgrounds
    background: "#F8F9F6", // Soft sage-tinted white background
    surface: "#FFFFFF", // Pure white cards
    surfaceVariant: "#F3F4EE", // Soft cream
    surfaceSecondary: "#FEFEFE", // Almost white

    // Card backgrounds with personality
    cardCream: "#F9F8F5", // Warm cream
    cardSoft: "#F6F7F3", // Soft sage tint
    cardPure: "#FFFFFF", // Pure white

    // Text colors - warm and readable
    textPrimary: "#2F3A2E", // Dark sage for readability
    textSecondary: "#6B7668", // Medium sage
    textTertiary: "#9CA599", // Light sage
    placeholder: "#BCC2B8",

    // Border colors - subtle and soft
    border: "#E8EBE5", // Very light sage
    borderLight: "#F1F3EF",
    borderCard: "#EDF0EA", // Card borders

    // Lifestyle mood colors
    moodHappy: "#F4B942", // Warm yellow
    moodCalm: "#A5BE5E", // Sage green
    moodEnergetic: "#FF7B54", // Warm orange
    moodPeaceful: "#7BA5C6", // Soft blue
    moodReflective: "#B5A7D6", // Soft purple

    // Gradient backgrounds - always light/bright
    gradientQuote: { start: "#F3F4EE", end: "#E8EBE5" },
    gradientHeader: { start: "#FFFFFF", end: "#F8F9F6" },
    gradientCard: { start: "#FEFEFE", end: "#F6F7F3" },

    // Shadow colors for depth - light, premium shadows
    shadow: "rgba(47,58,46,0.08)",
    shadowCard: "rgba(47,58,46,0.04)",
    shadowSoft: "rgba(47,58,46,0.02)",

    // Status colors - softer wellness versions
    success: "#58AA55", // Sage green
    warning: "#F4B942", // Warm yellow
    info: "#7BA5C6", // Soft blue

    // Category colors for tabs
    categoryActive: "#58AA55",
    categoryInactive: "#9CA599",
    categoryBackground: "#F3F4EE",

    // Wellness dimension colors - lifestyle focused
    physical: "#58AA55", // Sage green
    mental: "#B5A7D6", // Soft purple
    emotional: "#F4B942", // Warm yellow
    social: "#FF7B54", // Warm orange
    sleep: "#7BA5C6", // Soft blue
    energy: "#F4B942", // Warm yellow

    // Wellness accent colors - bright and fresh
    orange: "#FF7B54",
    orangeLight: "#FFF0ED",
    blue: "#7BA5C6",
    blueLight: "#F0F4F8",
    green: "#58AA55",
    greenLight: "#F0F6F0",
    yellow: "#F4B942",
    yellowLight: "#FDF8E8",

    // Profile and lifestyle colors - bright backgrounds
    profileGreen: "#E8F2E7",
    profileBlue: "#EDF4F8",
    profileOrange: "#FFF0ED",
    profileYellow: "#FDF8E8",
    profilePurple: "#F2F0F8",

    // Card shadow styles - premium depth
    cardShadow: {
      shadowColor: "#2F3A2E",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04,
      shadowRadius: 8,
      elevation: 3,
    },

    // Soft card shadow for main content
    softCardShadow: {
      shadowColor: "#2F3A2E",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.02,
      shadowRadius: 4,
      elevation: 1,
    },

    // Health Score gradient - fresh and vibrant
    healthScoreGradient: { start: "#58AA55", end: "#A5BE5E" },
  };

  const darkColors = {
    // Dark theme wellness colors
    primary: "#6BC067", // Brighter sage green for dark mode
    primarySoft: "#8FCA6B", // Brighter soft sage
    secondary: "#8BB8D9", // Brighter soft blue
    accent: "#F7C55A", // Brighter warm yellow
    error: "#E8957F", // Softer coral for dark mode

    // Dark backgrounds
    background: "#1A1F1A", // Dark sage background
    surface: "#242B24", // Dark surface
    surfaceVariant: "#2A312A", // Darker variant
    surfaceSecondary: "#2C332C", // Secondary surface

    // Dark card backgrounds
    cardCream: "#2A312A",
    cardSoft: "#242B24",
    cardPure: "#2C332C",

    // Dark text colors
    textPrimary: "#E8F0E8", // Light sage text
    textSecondary: "#B8C5B8", // Medium light sage
    textTertiary: "#8A968A", // Darker sage text
    placeholder: "#6B756B",

    // Dark border colors
    border: "#3A413A",
    borderLight: "#303730",
    borderCard: "#353C35",

    // Dark mood colors (brighter for visibility)
    moodHappy: "#F7C55A",
    moodCalm: "#8FCA6B",
    moodEnergetic: "#FF9770",
    moodPeaceful: "#8BB8D9",
    moodReflective: "#C4B8E0",

    // Dark gradients
    gradientQuote: { start: "#2A312A", end: "#242B24" },
    gradientHeader: { start: "#242B24", end: "#1A1F1A" },
    gradientCard: { start: "#2C332C", end: "#242B24" },

    // Dark shadows
    shadow: "rgba(0,0,0,0.3)",
    shadowCard: "rgba(0,0,0,0.2)",
    shadowSoft: "rgba(0,0,0,0.1)",

    // Dark status colors
    success: "#6BC067",
    warning: "#F7C55A",
    info: "#8BB8D9",

    // Dark category colors
    categoryActive: "#6BC067",
    categoryInactive: "#8A968A",
    categoryBackground: "#2A312A",

    // Dark wellness dimension colors
    physical: "#6BC067",
    mental: "#C4B8E0",
    emotional: "#F7C55A",
    social: "#FF9770",
    sleep: "#8BB8D9",
    energy: "#F7C55A",

    // Dark accent colors
    orange: "#FF9770",
    orangeLight: "#3D2B26",
    blue: "#8BB8D9",
    blueLight: "#252D32",
    green: "#6BC067",
    greenLight: "#253025",
    yellow: "#F7C55A",
    yellowLight: "#332C20",

    // Dark profile colors
    profileGreen: "#253025",
    profileBlue: "#252D32",
    profileOrange: "#3D2B26",
    profileYellow: "#332C20",
    profilePurple: "#2D2932",

    // Dark card shadows
    cardShadow: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 3,
    },

    softCardShadow: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 1,
    },

    healthScoreGradient: { start: "#6BC067", end: "#8FCA6B" },
  };

  return {
    isDark,
    isLoading,
    colors: isDark ? darkColors : lightColors,
  };
};

// Global function to toggle dark mode
export const toggleDarkMode = async () => {
  const newValue = !globalDarkMode;
  try {
    await AsyncStorage.setItem("darkModePreference", JSON.stringify(newValue));
    notifyThemeUpdate(newValue);
  } catch (error) {
    console.error("Failed to save dark mode preference:", error);
  }
};

export const setDarkMode = async (isDark) => {
  try {
    console.log("Setting dark mode to:", isDark);
    await AsyncStorage.setItem("darkModePreference", JSON.stringify(isDark));
    notifyThemeUpdate(isDark);
  } catch (error) {
    console.error("Failed to save dark mode preference:", error);
  }
};

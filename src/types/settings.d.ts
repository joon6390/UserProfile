interface UserPreferences {
  language: "ko" | "en" | "ja";
  fontSize: "small" | "medium" | "large";
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
  };
  colorScheme: "system" | "light" | "dark";
}

interface ContextTypePreferences {
  preferences: UserPreferences;
}

interface ContextActionTypePreferences {
  updateLanguage: (language: UserPreferences["language"]) => void;
  updateFontSize: (size: UserPreferences["fontSize"]) => void;
  updateNotifications: (
    key: keyof UserPreferences["notifications"],
    value: boolean,
  ) => void;
  updateColorScheme: (scheme: UserPreferences["colorScheme"]) => void;
}

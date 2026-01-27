import { createContext } from "react";

export const SettingContext = createContext<ContextTypePreferences | null>(
  null,
);
export const SettingContextAction =
  createContext<ContextActionTypePreferences | null>(null);

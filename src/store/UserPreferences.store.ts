import { createStore } from "zustand";
import { createSelectors } from "./helper";

export type UserPreferencesProps = {
  theme: "system" | "dark" | "light";
  notification: boolean;
  runOnStart: boolean;
  httpServerAlwayOn: boolean;
  RtmpServerAlwayOn: boolean;
  port: number;
};

const useUserPreferencesBase = createStore<UserPreferencesProps>(() => ({
  theme: "system",
  notification: false,
  runOnStart: false,
  httpServerAlwayOn: false,
  RtmpServerAlwayOn: false,
  port: 4358,
}));

const useUserPreferencesStore = createSelectors(useUserPreferencesBase);

export const updateSetting = (payload: Partial<UserPreferencesProps>) =>
  useUserPreferencesStore.setState((state) => ({ ...state, ...payload }));

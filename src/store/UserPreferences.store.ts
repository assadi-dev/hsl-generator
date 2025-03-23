import { createStore } from "zustand";
import { createSelectors } from "./helper";

export type UserPreferencesProps = {
  theme: "system" | "dark" | "light";
  notification: boolean;
  runOnStart: boolean;
  httpServerAlway: boolean;
  RtmpServerAlway: boolean;
};

const useUserPreferencesBase = createStore<UserPreferencesProps>(() => ({
  theme: "system",
  notification: false,
  runOnStart: false,
  httpServerAlway: false,
  RtmpServerAlway: false,
}));

const useUserPreferencesStore = createSelectors(useUserPreferencesBase);

export const updateSetting = (payload: Partial<UserPreferencesProps>) =>
  useUserPreferencesStore.setState((state) => ({ ...state, ...payload }));

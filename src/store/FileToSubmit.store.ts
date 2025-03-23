import { createStore } from "zustand";
import { createSelectors } from "./helper";
import { FilePathSubmit, genericId } from "@/types/FileSystem";

export type FilesToSubmitProps = {
  files: FilePathSubmit[];
  selected: FilePathSubmit[];
};

const filesToSubmitBase = createStore<FilesToSubmitProps>(() => ({
  files: [],
  selected: [],
}));

export const filesToSubmitStore = createSelectors(filesToSubmitBase);

export const addFiles = (filesToUpload: FilePathSubmit[]) =>
  filesToSubmitStore.setState((state) => ({
    ...state,
    files: [...state.files, ...filesToUpload],
  }));

export const removeFiles = (filesToRemoveIds: genericId[]) =>
  filesToSubmitStore.setState((state) => ({
    ...state,
    files: state.files.filter((it) => filesToRemoveIds.includes(it.id)),
  }));

export const clearAllFiles = () => {
  filesToSubmitStore.setState((state) => ({
    ...state,
    selected: [],
    files: [],
  }));
};

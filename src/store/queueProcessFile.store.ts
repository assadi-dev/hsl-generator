import { genericId, queueProcessFile } from "@/types/FileSystem";
import { createStore } from "zustand";
import { createSelectors } from "./helper";

type queueProcessFilesProps = queueProcessFile[];

const queueProcessFilesBase = createStore<queueProcessFilesProps>(() => []);

export const queueProcessFilesStore = createSelectors(queueProcessFilesBase);

export const addFilesProcess = (filesProcess: queueProcessFile[]) => {
  queueProcessFilesStore.setState((state) => [...state, ...filesProcess]);
};

/**
 * Mise à jour d'un fichier de la liste des fichiers en cours de traitement
 * @param fileProcess
 * @param state
 *
 */
export const updateFileProcess = (fileProcess: queueProcessFile | null) => {
  if (!fileProcess) return;

  queueProcessFilesStore.setState((state) => {
    const updatedState = state.map((it) => {
      if (fileProcess.id === it.id) {
        return { ...it, ...fileProcess };
      }
      return it;
    });
    return updatedState;
  });
};

export const updateFilesProcessCollection = (
  filesProcess: queueProcessFile[]
) => {
  return filesProcess.map((it) => updateFileProcess(it));
};

export const removeFilesProcess = (filesProcessIds: genericId[]) => {
  queueProcessFilesStore.setState((state) =>
    state.filter((it) => filesProcessIds.includes(it.id))
  );
};

export const clearAllFilesProcess = () => {
  queueProcessFilesStore.setState((state) => (state = []));
};

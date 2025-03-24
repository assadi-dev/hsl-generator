import { genericId, queueProcessFile } from "@/types/FileSystem";
import { createStore } from "zustand";
import { createSelectors } from "./helper";

type queueProcessFilesProps = {
  queue: queueProcessFile[];
  selected: queueProcessFile[];
  complete: queueProcessFile[];
  current: queueProcessFile | null;
};

const queueProcessFilesBase = createStore<queueProcessFilesProps>(() => ({
  queue: [],
  selected: [],
  complete: [],
  current: null,
}));

export const queueProcessFilesStore = createSelectors(queueProcessFilesBase);

//CRUD des fichiers à encoder
export const addFilesProcess = (filesProcess: queueProcessFile[]) => {
  queueProcessFilesStore.setState((state) => ({
    ...state,
    queue: [...state.queue, ...filesProcess],
  }));
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
    const updatedQueue = state.queue.map((it) => {
      if (fileProcess.id === it.id) {
        return { ...it, ...fileProcess };
      }
      return it;
    });
    return { ...state, queue: updatedQueue };
  });
};

/**
 * Modification multiple des fichier de traitement
 * @param filesProcess
 * @returns
 */
export const updateFilesProcessCollection = (
  filesProcess: queueProcessFile[]
) => {
  return filesProcess.map((it) => updateFileProcess(it));
};

export const removeFilesProcess = (filesProcessIds: genericId[]) => {
  queueProcessFilesStore.setState((state) => {
    if (state.current && filesProcessIds.includes(state.current.id))
      state.current = null;
    const removedQueue = state.queue.filter(
      (it) => !filesProcessIds.includes(it.id)
    );

    return { ...state, queue: removedQueue };
  });
};

export const clearAllFilesProcess = () => {
  queueProcessFilesStore.setState((state) => ({
    ...state,
    queue: [],
    complete: [],
    current: null,
  }));
};

//Logique métier traitement complété
export const addFileProcessCompleted = (filesProcess: queueProcessFile[]) => {
  queueProcessFilesStore.setState((state) => ({
    ...state,
    complete: [...state.complete, ...filesProcess],
  }));
};

export const removeCompletedFileProcess = (filesProcessIds: genericId[]) => {
  queueProcessFilesStore.setState((state) => {
    if (state.current && filesProcessIds.includes(state.current.id))
      state.current = null;
    const removedQueue = state.complete.filter(
      (it) => !filesProcessIds.includes(it.id)
    );
    return { ...state, complete: removedQueue };
  });
};

//Logique metier fichiers sélectionné
export const addFileProcessSelected = (filesProcess: queueProcessFile[]) => {
  queueProcessFilesStore.setState((state) => ({
    ...state,
    selected: [...filesProcess, ...state.selected],
  }));
};

export const removeSelectedFileProcess = (filesProcessIds: genericId[]) => {
  queueProcessFilesStore.setState((state) => {
    if (state.current && filesProcessIds.includes(state.current.id))
      state.current = null;
    const removedQueue = state.selected.filter(
      (it) => !filesProcessIds.includes(it.id)
    );
    return { ...state, selected: removedQueue };
  });
};

export const selectCurrentFileProcess = (
  fileProcess: queueProcessFile | null
) => {
  queueProcessFilesStore.setState((state) => ({
    ...state,
    current: fileProcess,
  }));
};

export const filesProcessQueue = queueProcessFilesStore.use;
export const currentFilesProcessQueue = queueProcessFilesStore.use;
/* export const filesProcessCompleted = queueProcessFilesStore.use.complete();
export const filesProcessSelected = queueProcessFilesStore.use.selected(); */

import { open } from "@tauri-apps/plugin-dialog";
import { invoke } from "@tauri-apps/api/core";
import { addFilesProcess } from "@/store/queueProcessFile.store";
import { FilePathSubmit, queueProcessFile } from "@/types/FileSystem";

export const openFileDialog = async () => {
  try {
    const files = await open({
      multiple: true,
      directory: false,
      filters: [
        {
          name: "videos",
          extensions: ["mp4", "mkv", "avi"],
        },
      ],
    });
    if (files && files.length > 0) {
      const result = (await invoke("retrieve_infos", {
        files,
      })) as FilePathSubmit[];
      result;
      if (result) {
        const mappingData = result.map((item) => ({
          ...item,
          progress: 0,
          completed: false,
          isRunning: false,
        })) satisfies queueProcessFile[];
        addFilesProcess(mappingData);
      }
    }
  } catch (error) {
    console.error("Erreur lors de la sélection du fichier :", error);
  }
};

/* const action = (event: KeyboardEvent) => {
  if (event.shiftKey) {
    console.log("Maj :>> ", event.shiftKey);
  }
}; */
/* 
Detection des touche action rapide

  React.useLayoutEffect(() => {
    document.addEventListener("keydown", action);
    return () => {
      document.removeEventListener("keydown", action);
    };
  }, []);
   */

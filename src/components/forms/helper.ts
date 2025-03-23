import { open } from "@tauri-apps/plugin-dialog";
import { invoke } from "@tauri-apps/api/core";

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
      const result = await invoke("retrieve_infos", { files });
      console.log(result);
    }
  } catch (error) {
    console.error("Erreur lors de la sélection du fichier :", error);
  }
};

import React from "react";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { queueProcessFile } from "@/types/FileSystem";
import { Command } from "@tauri-apps/plugin-shell";
import {
  removeFilesProcess,
  removeSelectedFileProcess,
  selectCurrentFileProcess,
} from "@/store/queueProcessFile.store";

type ItemValidFileCardActionsProps = {
  item: queueProcessFile;
};
const ItemValidFileCardActions = ({ item }: ItemValidFileCardActionsProps) => {
  const open_explorer = async () => {
    const dir = item.path.replace(item.filename, "").trim();
    await Command.create("explorer", dir).execute();
  };
  const selectVideo = () => {
    selectCurrentFileProcess(item);
  };
  const remove = () => {
    removeFilesProcess([item.id]);
  };

  return (
    <div className="absolute top-0 left-0  w-full z-20 flex justify-end ">
      <DropdownMenu>
        <DropdownMenuTrigger className="!text-white rounded-full p-2 hover:bg-primary-gradient-hover outline-0 mt-1 mx-1">
          <EllipsisVertical className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="flex items-center gap-2 !text-xs"
            onClick={open_explorer}
          >
            Afficher dans l'explorateur
            <DropdownMenuShortcut>⇧+alt+R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2 !text-xs"
            onClick={selectVideo}
          >
            Séléctionner
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2 !text-xs"
            onClick={remove}
          >
            Retirer
            <DropdownMenuShortcut>Suppr</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ItemValidFileCardActions;

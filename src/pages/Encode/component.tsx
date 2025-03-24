import ButtonAnimate from "@/components/buttons/ButtonAnimate";
import { formatBytes, formatDuration } from "@/lib/converter";
import { queueProcessFile } from "@/types/FileSystem";
import { Clapperboard } from "lucide-react";

type FileVideoDetailProps = {
  fileProcess: queueProcessFile;
};
export const FileVideoDetail = ({ fileProcess }: FileVideoDetailProps) => {
  return (
    <div className="flex flex-col gap-3 h-full w-full bg-gradient-to-tl from-primary/50 to-slate-100/20 rounded-lg py-5 px-3 ring-1 ring-white/50">
      <p className="text-primary-gradient text-sm font-semibold h-fit  w-full flex justify-center items-center gap-2 truncate">
        <Clapperboard className="text-white/50" /> {fileProcess?.filename ?? ""}
      </p>
      <ul className="w-full text-left flex flex-col justify-center gap-5 h-full text-secondary text-xs">
        <li>Hauteur: {fileProcess?.height ?? 0} </li>
        <li>Largeur: {fileProcess?.width ?? 0} </li>

        <li>
          Taille: <span>{formatBytes(fileProcess?.size ?? 0)}</span>{" "}
        </li>
        <li>
          Durée: <span> {formatDuration(fileProcess?.duration ?? 0)}</span>
        </li>
        {fileProcess?.link && <li>Liens du streaming:</li>}
      </ul>
      <ButtonAnimate className="!shadow-inner shadow-white/20">
        Encoder
      </ButtonAnimate>
    </div>
  );
};

/**
 * Composant à affiche lorsque l'utilisateur n'a rien sélectionné
 */
export const FileProcessEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full w-full bg-gradient-to-tl from-primary/50 to-slate-100/20 rounded-lg p-3 ring-1 ring-white/50">
      <p className="text-primary-gradient text-sm font-semibold h-fit  w-full flex justify-center">
        Sélectionner une video
      </p>
    </div>
  );
};

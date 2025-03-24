import React from "react";
import FileProcessVideoPlayer from "./FileProcessVideoPlayer";
import ButtonAnimate from "@/components/buttons/ButtonAnimate";
import { Clapperboard, Video } from "lucide-react";

const FileToProcessingQueue = () => {
  return (
    <div className="w-full px-3 h-full flex flex-col justify-evenly gap-3">
      <div className="w-full h-[45vh] flex flex-col justify-center   rounded-lg p-0.5 ">
        <h2 className="text-primary-gradient text-center font-semibold truncate mb-5">
          FIchier en cours de traitement
        </h2>
        <FileProcessVideoPlayer />
      </div>
      <div className="flex flex-col gap-3 h-full w-full bg-gradient-to-tl from-primary/50 to-slate-100/20 rounded-lg p-3 ring-1 ring-white/50">
        <p className="text-primary-gradient text-sm font-semibold h-fit  w-full flex justify-center items-center gap-2">
          <Clapperboard className="text-white/50" /> Titre de la video
        </p>
        <ul className="w-full text-left flex flex-col justify-center gap-5 h-full text-secondary text-xs">
          <li>Chemin du fichier</li>
          <li>Chemin de destination</li>
          <li>Taille</li>
          <li>Durée</li>
        </ul>
        <ButtonAnimate className="!shadow-inner shadow-white/20">
          Encoder
        </ButtonAnimate>
      </div>
    </div>
  );
};

export default FileToProcessingQueue;

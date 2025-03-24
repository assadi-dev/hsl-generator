import React from "react";
import FileProcessVideoPlayer from "./FileProcessVideoPlayer";
import ButtonAnimate from "@/components/buttons/ButtonAnimate";

import { currentFilesProcessQueue } from "@/store/queueProcessFile.store";
import { FileProcessEmpty, FileVideoDetail } from "./component";

const FileToProcessingQueue = () => {
  const selected = currentFilesProcessQueue.current();
  const Status = selected?.isRunning
    ? "FIchier en cours de traitement"
    : "En attente de traitement";
  return (
    <div className="w-full px-3 h-full flex flex-col justify-evenly gap-3">
      <div className="w-full h-[45vh] flex flex-col justify-center   rounded-lg p-0.5 ">
        <h2 className="text-primary-gradient text-center font-semibold truncate mb-5">
          {Status}
        </h2>
        {<FileProcessVideoPlayer />}
      </div>
      {selected ? (
        <FileVideoDetail fileProcess={selected} />
      ) : (
        <FileProcessEmpty />
      )}
    </div>
  );
};

export default FileToProcessingQueue;

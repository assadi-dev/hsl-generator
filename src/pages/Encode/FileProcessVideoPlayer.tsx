import { cn } from "@/lib/utils";
import React from "react";
import Plyr from "plyr";

const videoMock = "http://localhost/file-storage/video-2/203855-922675664.mp4";

type FileProcessVideoPlayerProps = React.HTMLAttributes<HTMLVideoElement>;
const FileProcessVideoPlayer = ({ ...props }: FileProcessVideoPlayerProps) => {
  const videoPlayerRef = React.useRef<HTMLVideoElement>(null);

  React.useLayoutEffect(() => {
    if (!videoPlayerRef.current) return;

    new Plyr(videoPlayerRef.current);
  }, []);

  return (
    <video
      ref={videoPlayerRef}
      {...props}
      className={cn("rounded-lg shadow-xl mx-auto")}
      src={videoMock}
    />
  );
};

export default FileProcessVideoPlayer;

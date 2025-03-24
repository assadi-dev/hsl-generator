import useGeVideoFrame from "@/hooks/useGeVideoFrame";
import { cn } from "@/lib/utils";
import React from "react";
import styles from "./styles.module.css";

const ItemValidFileCard = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div
      className={cn(
        styles["item-card-video"],
        "relative w-full h-[120px] lg:h-[150px] rounded shadow-sm shadow-white/20 bg-black overflow-hidden transition-all duration-500 group"
      )}
    >
      <video
        ref={videoRef}
        src="http://localhost/file-storage/video-2/203855-922675664.mp4"
        className="absolute top-0 left-0 h-full w-full object-cover "
      />
      <div></div>
    </div>
  );
};

export default ItemValidFileCard;

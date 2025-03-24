import { cn } from "@/lib/utils";
import React from "react";
import styles from "./styles.module.css";
import { queueProcessFile } from "@/types/FileSystem";
import { formatBytes } from "@/lib/converter";
import ItemValidFileCardActions from "./ItemValidFileCardActions";

type ItemValidFileCardProps = {
  item: queueProcessFile;
};
const ItemValidFileCard = ({ item }: ItemValidFileCardProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div
      className={cn(
        styles["item-card-video"],
        "relative w-full h-[150px] lg:h-[200px] rounded shadow-sm shadow-white/20 bg-black overflow-hidden transition-all duration-500 group"
      )}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-full w-full object-cover group-hover:grayscale transition-all duration-300"
      />

      <div className="absolute bottom-0 text-xs leading-4.5  text-white  bg-gradient-to-b  to-primary/40 group-hover:to-primary/80 px-1 py-2 z-10 overflow-hidden w-full">
        <p className="text-[0.7rem] font-semibold !w-[86%] truncate drop-shadow-lg ">
          {item.filename}
        </p>
        <p className="w-[86%] truncate text-slate-50 font-extralight text-[0.7rem]">
          {formatBytes(item.size)}
        </p>
      </div>
      <ItemValidFileCardActions item={item} />
    </div>
  );
};

export default ItemValidFileCard;

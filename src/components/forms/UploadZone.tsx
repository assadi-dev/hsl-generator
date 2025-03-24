import React from "react";
import FlexContainer from "../box/FlexContainer";
import InnerDropZone from "./InnerDropZone";
import { cn } from "@/lib/utils";

type UploadZoneProps = React.HTMLAttributes<HTMLDivElement>;
const UploadZone = ({ ...props }: UploadZoneProps) => {
  const dropzoneContainerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <FlexContainer
      {...props}
      ref={dropzoneContainerRef}
      justifyContent="center"
      alignItems="center"
      className={cn(
        "text-secondary border-1 p-3 border-dashed rounded drop-shadow-xl bg-primary-gradient border-white/50 group hover:bg-primary-gradient-hover",
        props.className
      )}
    >
      <InnerDropZone />
    </FlexContainer>
  );
};

export default UploadZone;

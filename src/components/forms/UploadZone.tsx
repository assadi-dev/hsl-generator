import React from "react";
import FlexContainer from "../box/FlexContainer";
import InnerDropZone from "./InnerDropZone";

type UploadZoneProps = React.HTMLAttributes<HTMLDivElement>;
const UploadZone = ({ ...props }: UploadZoneProps) => {
  const dropzoneContainerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <FlexContainer
      {...props}
      ref={dropzoneContainerRef}
      justifyContent="center"
      alignItems="center"
      className="text-secondary border-1 p-3 border-dashed rounded drop-shadow-xl bg-primary-gradient border-white/50 h-[30vh] group hover:bg-primary-gradient-hover"
    >
      <InnerDropZone />
    </FlexContainer>
  );
};

export default UploadZone;

import React from "react";
import { Import } from "lucide-react";
import FlexContainer from "../box/FlexContainer";
import { openFileDialog } from "./helper";
import InnerDropZone from "./InnerDropZone";

const UploadZone = () => {
  const dropzoneContainerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <FlexContainer
      ref={dropzoneContainerRef}
      onClick={openFileDialog}
      justifyContent="center"
      alignItems="center"
      className="text-secondary border-1 p-3 border-dashed rounded drop-shadow-xl bg-primary-gradient border-white/50 h-[30vh] group hover:bg-primary-gradient-hover"
    >
      <InnerDropZone />
    </FlexContainer>
  );
};

export default UploadZone;

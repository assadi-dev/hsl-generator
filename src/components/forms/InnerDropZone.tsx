import FlexContainer from "../box/FlexContainer";
import { Import } from "lucide-react";

const InnerDropZone = () => {
  return (
    <FlexContainer
      className="flex-col w-full text-sm text-muted-foreground group-hover:text-secondary transition-all duration-1000 ease-out"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Import />
      <p className="text-xs">Cliquer ou glissez vos fichier dans cette zone</p>
    </FlexContainer>
  );
};

export default InnerDropZone;

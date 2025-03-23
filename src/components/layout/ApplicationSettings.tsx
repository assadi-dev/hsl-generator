import React from "react";
import ButtonAnimate from "../buttons/ButtonAnimate";
import { LucideSettings } from "lucide-react";

const ApplicationSettings = () => {
  return (
    <div>
      <ButtonAnimate
        variant="ghost"
        size="icon"
        className="hover:bg-gradient-to-br hover:from-white/10 hover:ring-1 ring-white/50 hover:text-secondary items-cente p-5 "
      >
        <LucideSettings className="!h-[1.8rem] !w-[1.8rem]" />
      </ButtonAnimate>
    </div>
  );
};

export default ApplicationSettings;

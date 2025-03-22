import React from "react";
import ButtonAnimate from "../Buttons/ButtonAnimate";
import { LucideSettings } from "lucide-react";

const ApplicationSettings = () => {
  return (
    <div>
      <ButtonAnimate
        variant="ghost"
        size="icon"
        className="hover:bg-gradient-to-br hover:from-white/10 hover:ring-1 ring-white/50 hover:text-secondary"
      >
        <LucideSettings />
      </ButtonAnimate>
    </div>
  );
};

export default ApplicationSettings;

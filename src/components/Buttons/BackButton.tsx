import React from "react";
import ButtonAnimate from "./ButtonAnimate";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonAnimate
      className="text-secondary flex"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft /> Retour
    </ButtonAnimate>
  );
};

export default BackButton;

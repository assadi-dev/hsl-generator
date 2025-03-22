import React from "react";
import EnableHttpServer from "./EnableHttpServer";
import FlexContainer from "../box/FlexContainer";
import ApplicationSettings from "./ApplicationSettings";
import BackButton from "../Buttons/BackButton";
import { useLocation } from "react-router";

export const LayoutHeader = () => {
  const location = useLocation();

  return (
    <FlexContainer className="grid grid-cols-2 w-full p-3">
      <div> {location.pathname !== "/" && <BackButton />}</div>
      <FlexContainer gap={3}>
        <EnableHttpServer />
        <ApplicationSettings />
      </FlexContainer>
    </FlexContainer>
  );
};

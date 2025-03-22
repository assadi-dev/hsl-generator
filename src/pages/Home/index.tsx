import FlexContainer from "@/components/box/FlexContainer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { invoke } from "@tauri-apps/api/core";
import { Cast } from "lucide-react";
import React from "react";
import { SELECT_MENU_ARRAY } from "./helper";
import SelectCard from "./components/SelectCard";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-5 ">
      <FlexContainer
        gap={5}
        justifyContent="evenly"
        className="h-[48vh]"
      >
        {SELECT_MENU_ARRAY.map((item) => (
          <SelectCard
            key={item.title}
            item={item}
          />
        ))}
      </FlexContainer>
    </div>
  );
};

export default Home;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useNavigate } from "react-router";

type SelectCardProps = {
  item: {
    href: string;
    title: string;
    description: string;
    icon: React.FC<any>;
  };
};
const SelectCard = ({ item }: SelectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.href);
  };

  return (
    <Card
      className="bg-primary-gradient w-[30vw] transition-all duration-300 hover:scale-110 ease-in-out hover:bg-primary-gradient-hover  text-secondary "
      onClick={handleClick}
    >
      <CardHeader>
        <h2 className="text-xl font-semibold text-primary-gradient">
          {item.title}
        </h2>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-justify-center items-center h-full w-full">
        {<item.icon className="h-[65%] w-[65%] mx-auto" />}
      </CardContent>
    </Card>
  );
};

export default SelectCard;

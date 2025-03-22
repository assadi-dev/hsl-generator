import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

type ButtonAnimateProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
  classNames?: {
    button?: string;
    icon?: string;
  };
} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
const ButtonAnimate = ({
  children,
  isLoading,
  classNames,
  ...props
}: ButtonAnimateProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "transition-all  active:scale-[0.9] active:bg-primary/25",
        props.className,
        classNames?.button
      )}
    >
      {isLoading && (
        <LoaderCircle className={cn("motion-preset-spin", classNames?.icon)} />
      )}
      {children}
    </Button>
  );
};

export default ButtonAnimate;

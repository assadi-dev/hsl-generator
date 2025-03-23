import { cn } from "@/lib/utils";
import React from "react";

type FlexContainerProps = {
  children: React.ReactNode;
  justifyContent?: "start" | "center" | "between" | "evenly" | "end";
  alignItems?: "start" | "center" | "end" | "baseline" | "stretch";
  gap?: number;
} & React.HtmlHTMLAttributes<HTMLDivElement>;
const FlexContainer = React.forwardRef<HTMLDivElement, FlexContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        onDragOver={() => console.log("coucou")}
        className={cn(
          "flex w-full",
          `gap-${props.gap}`,
          {
            "justify-start": props.justifyContent === "start",
            "justify-center": props.justifyContent === "center",
            "justify-between": props.justifyContent === "between",
            "justify-evenly": props.justifyContent === "evenly",
            "justify-end": props.justifyContent === "end",
            "items-start": props.alignItems === "start",
            "items-center": props.alignItems === "center",
            "items-end": props.alignItems === "end",
            "items-baseline": props.alignItems === "baseline",
            "items-stretch": props.alignItems === "stretch",
          },
          props.className
        )}
      >
        {children}
      </div>
    );
  }
);

export default FlexContainer;

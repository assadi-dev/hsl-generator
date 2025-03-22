import React from "react";

type FlexProps = {
  children: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>;
const Flex = ({ ...props }: FlexProps) => {
  return <div {...props}>{props.children}</div>;
};

export default Flex;

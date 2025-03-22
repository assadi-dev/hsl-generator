import { LayoutHeader } from "@/components/layout/LayoutHeader";
import { cn } from "@/lib/utils";
import { invoke } from "@tauri-apps/api/core";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  const BG_BACKGROUND = "";
  return (
    <div className={cn(BG_BACKGROUND, "relative px-5 w-screen h-screen py-3")}>
      <div className="w-full max-w-[1536px] h-full overflow-hidden mx-auto">
        <LayoutHeader />

        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

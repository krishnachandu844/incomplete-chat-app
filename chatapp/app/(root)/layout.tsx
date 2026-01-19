"use client";
import DesktopNav from "@/components/shared/sidebar/nav/DesktopNav";
import MobileNav from "@/components/shared/sidebar/nav/MobileNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='h-full w-full flex flex-col p-4 lg:flex-row gap-4'>
        <DesktopNav />
        <MobileNav />
        {children}
      </div>
    </ThemeProvider>
  );
}

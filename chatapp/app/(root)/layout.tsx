import DesktopNav from "@/components/shared/sidebar/nav/DesktopNav";
import MobileNav from "@/components/shared/sidebar/nav/MobileNav";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full w-full flex flex-col p-4 lg:flex-row gap-4'>
      <DesktopNav />
      <MobileNav />
      {children}
    </div>
  );
}

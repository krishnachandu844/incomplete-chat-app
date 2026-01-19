"use client";
import { Card } from "@/components/ui/card";

import useNavigation from "@/hooks/useNavigation";
import Link from "next/link";
import { Button } from "../../../ui/button";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ThemeButton";

export default function DesktopNav() {
  const paths = useNavigation();

  return (
    <Card className='hidden lg:flex lg:w-18 lg:items-center lg:justify-between'>
      <nav>
        <ul className='flex flex-col items-center gap-4'>
          {paths.map((path, id) => (
            <li key={id}>
              <Link href={path.href}>
                <Button
                  size={"icon"}
                  variant={path.active ? "default" : "outline"}
                >
                  {path.icon}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex flex-col items-center gap-2 gap-y-6'>
        <ModeToggle />
        <UserButton />
      </div>
    </Card>
  );
}

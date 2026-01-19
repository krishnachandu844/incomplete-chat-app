"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useNavigation from "@/hooks/useNavigation";

import Link from "next/link";
import { Button } from "../../../ui/button";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ThemeButton";

export default function MobileNav() {
  const paths = useNavigation();

  return (
    <Card className='fixed bottom-4 w-[calc(100vw-32px)] flex items-center p-2 lg:hidden'>
      <nav className='w-full '>
        <ul className='flex justify-evenly items-center'>
          {paths.map((path, id) => (
            <li key={id} className='relative'>
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
          <li className='flex flex-col items-center gap-4'>
            <UserButton />
          </li>
          <li className='flex flex-col items-center gap-4'>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </Card>
  );
}

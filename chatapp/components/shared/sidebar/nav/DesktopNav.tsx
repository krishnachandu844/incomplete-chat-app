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
import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../ui/button";
import { UserButton } from "@clerk/nextjs";

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
      <UserButton />
    </Card>
  );
}

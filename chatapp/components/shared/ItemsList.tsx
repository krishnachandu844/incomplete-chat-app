"use client";
import { Card } from "@/components/ui/card";
import useConversation from "@/hooks/useConversation";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.PropsWithChildren<{
  title: string;
  action?: React.ReactNode;
}>;

export default function ItemsList({ children, title, action }: Props) {
  const { isActive } = useConversation();
  console.log(isActive);
  return (
    <Card
      className={cn("hidden h-full w-full lg:w-80 p-2", {
        flex: !isActive,
        "lg:flex": isActive,
      })}
    >
      <div className='mb-3 px-2'>
        <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
      </div>
      <div className='w-full h-full p-2 flex flex-col items-center justify-start gap-4'>
        {children}
      </div>
    </Card>
  );
}

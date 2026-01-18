"use client";

import ConversaionFallBack from "@/components/shared/ConversationFallBack";
import ItemsList from "@/components/shared/ItemsList";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Friends() {
  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <ItemsList title='Friends'>Friends</ItemsList>
        <ConversaionFallBack />
      </Authenticated>
    </>
  );
}

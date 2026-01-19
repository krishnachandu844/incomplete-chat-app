"use client";

import ConversaionFallBack from "@/components/shared/ConversationFallBack";
import ItemsList from "@/components/shared/ItemsList";
import { api } from "@/convex/_generated/api";
import { createUser } from "@/convex/user";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation } from "convex/react";
import { use, useEffect } from "react";

export default function Friends() {
  const { user, isLoaded } = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (!user || !isLoaded) return;

    createUser({
      clerkId: user.id,
      imageUrl: user.imageUrl,
      username: user.username ?? user.firstName ?? "User",
      email: user.primaryEmailAddress?.emailAddress!,
    });
  }, []);
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

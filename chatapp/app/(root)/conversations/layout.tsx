import ItemsList from "@/components/shared/ItemsList";
import React from "react";

export default function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ItemsList title='Conversations'>Conversations</ItemsList>
      {children}
    </>
  );
}

import React from "react";

export default function ConversationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full h-[calc(100vh-96px)] lg:h-full bg-secondary flex-col gap-2'>
      {children}
    </div>
  );
}

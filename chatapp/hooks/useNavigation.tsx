import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useNavigation() {
  const pathName = usePathname();

  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/conversations",
        icon: <MessageSquare />,
        active: pathName.startsWith("/conversation"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <Users />,
        active: pathName == "/friends",
      },
    ],
    [pathName]
  );

  return paths;
}

import { GetUsersOutput } from "@/lib/services/get-users";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

export const UserCard = forwardRef<
  HTMLAnchorElement,
  { user: GetUsersOutput["users"][number] }
>(({ user }, ref) => {
  return (
    <Link
      ref={ref}
      href={`/${user.login}`}
      className="p-4 border rounded-lg hover:border-primary flex items-center gap-2 hover:shadow-lg hover:shadow-zinc-100 transition-all"
    >
      <Image
        alt={user.login}
        width={32}
        height={32}
        src={user.avatar_url}
        className="rounded-full object-cover aspect-square bg-primary/5"
      />
      <span className="font-semibold">{user.login}</span>
      <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
        id: {user.id}
      </span>
    </Link>
  );
});

UserCard.displayName = "UserCard";

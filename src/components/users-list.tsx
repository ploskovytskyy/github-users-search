"use client";

import { getUsers, GetUsersOutput } from "@/lib/services/get-users";
import { UserCard } from "./user-card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { UserCardSkeleton } from "./user-card-skeleton";
import { useCallback, useMemo, useRef } from "react";
import { useUsernameQuery } from "@/lib/use-username-query";
import { useDebounceValue } from "usehooks-ts";

export const UsersList = ({
  initialUsers,
}: {
  initialUsers: GetUsersOutput;
}) => {
  const username = useUsernameQuery((store) => store.username);
  const [debouncedUsername] = useDebounceValue(username, 500);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["users", debouncedUsername],
      initialPageParam: 0,
      initialData: {
        pageParams: [0],
        pages: [initialUsers],
      },
      queryFn: ({ pageParam }) =>
        getUsers({
          cursor: pageParam,
          username: !!debouncedUsername ? debouncedUsername : undefined,
        }),
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLAnchorElement) => {
      if (isFetchingNextPage) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  const flatUsers = data.pages.flatMap(({ users }) => users);

  const isEmpty = flatUsers.length === 0;

  return (
    <>
      {(!isFetching || isFetchingNextPage) &&
        flatUsers.map((user, i) => (
          <UserCard
            key={`${user.id}-${i}`}
            user={user}
            ref={flatUsers.length === i + 1 ? lastElementRef : null}
          />
        ))}

      {(isFetching || isFetchingNextPage) && (
        <>
          {Array.from(Array(20)).map((_, i) => (
            <UserCardSkeleton key={i} />
          ))}
        </>
      )}

      {isEmpty && (
        <p className="text-center text-sm text-muted-foreground py-10">
          No users found
        </p>
      )}
    </>
  );
};

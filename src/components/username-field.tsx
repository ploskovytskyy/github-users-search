"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUsernameQuery } from "@/lib/use-username-query";

export const UsernameField = () => {
  const { username, setUsername } = useUsernameQuery();
  return (
    <>
      <Label htmlFor="username">Enter a username</Label>
      <Input
        id="username"
        placeholder="@username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
          //Reset scroll position to prevent multiple fetch steps
          if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
          }
        }}
      />
    </>
  );
};

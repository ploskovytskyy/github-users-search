import { client } from "../github-client";

export type GetSingleUserOutput = Awaited<ReturnType<typeof getSingleUser>>;

export const getSingleUser = async (username: string) => {
  try {
    const user = await client.request("GET /users/{username}", {
      username,
    });

    return user;
  } catch {
    return null;
  }
};

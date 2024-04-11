import { client } from "../github-client";

export type GetUsersOutput = Awaited<ReturnType<typeof getUsers>>;

type GetUsersParams = {
  cursor?: number;
  username?: string;
};

export const getUsers = async (params?: GetUsersParams) => {
  const cursor = params?.cursor ?? 0;

  //Use different endpoint when passing username
  if (!!params?.username) {
    const users = await client.request("GET /search/users", {
      q: params.username,
      per_page: 20,
      page: cursor,
    });

    const formattedUsers = users.data.items.map((user) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
    }));

    const hasMore = users.data.total_count > users.data.items.length;

    return {
      users: formattedUsers,
      nextPage: !!formattedUsers.length && hasMore ? cursor + 1 : null,
    };
  }

  const users = await client.request("GET /users", {
    per_page: 20,
    since: cursor,
  });

  const formattedUsers = users.data.map((user) => ({
    id: user.id,
    login: user.login,
    avatar_url: user.avatar_url,
  }));

  const lastUserId = formattedUsers[formattedUsers.length - 1].id;

  return {
    users: formattedUsers,
    nextPage: !!formattedUsers.length ? lastUserId : null,
  };
};

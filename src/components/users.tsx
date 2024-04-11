import { getUsers } from "@/lib/services/get-users";
import { UsersList } from "./users-list";

export const Users = async () => {
  const users = await getUsers();
  return <UsersList initialUsers={users} />;
};

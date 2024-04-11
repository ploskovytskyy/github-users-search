import { create } from "zustand";

type UseUsernameQuery = {
  username: string;
  setUsername: (username: string) => void;
};

export const useUsernameQuery = create<UseUsernameQuery>((set) => ({
  username: "",
  setUsername: (username) => set({ username: username }),
}));

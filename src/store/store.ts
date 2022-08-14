import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { Post, User } from "~/services";

interface FacebookState {
  currentUser: User | null;
  posts: Post[] | null;
  populate: (currentUser: User, posts: Post[]) => void;
}

export const useFacebookStore = create<FacebookState>()(
  devtools(
    persist((set) => ({
      currentUser: null,
      posts: null,
      populate: (currentUser: User, posts: Post[]) => {
        set((state) => ({ ...state, currentUser, posts }));
      },
    }))
  )
);

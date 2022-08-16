import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  Comment,
  fetchCurrentUser,
  fetchInstagramPosts,
  fetchInstagramStories,
  InstagramPost,
  Post,
  Story,
  User,
} from "~/services";

interface InstagramState {
  currentUser: User | null;
  stories: Story[] | [];
  posts: InstagramPost[] | [];

  // addPost: (text: Post["text"]) => void;
  // toggleLike: (postId: Post["id"]) => void;
  // addComment: (postId: Post["id"], text: Comment["text"]) => void;
}

export const useInstagramStore = create<InstagramState>()(
  devtools(() => ({
    currentUser: fetchCurrentUser(),
    stories: fetchInstagramStories(),
    posts: fetchInstagramPosts(),
  }))
);

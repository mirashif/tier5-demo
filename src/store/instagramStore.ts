import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  fetchInstagramPosts,
  fetchInstagramStories,
  InstagramPost,
  Story,
} from "~/services";

interface InstagramState {
  stories: Story[];
  posts: InstagramPost[];
}

export const useInstagramStore = create<InstagramState>()(
  devtools(() => ({
    stories: fetchInstagramStories(),
    posts: fetchInstagramPosts(),
  }))
);

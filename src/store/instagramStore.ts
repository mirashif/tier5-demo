import { faker } from "@faker-js/faker";
import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  fetchCurrentUser,
  fetchInstagramPosts,
  fetchInstagramStories,
  InstagramComment,
  InstagramPost,
  InstagramStory,
  User,
} from "~/services";

interface InstagramState {
  currentUser: User | null;
  stories: InstagramStory[] | [];
  posts: InstagramPost[] | [];

  toggleLike: (postId: InstagramPost["id"]) => void;
  toggleSave: (postId: InstagramPost["id"]) => void;
  addComment: (
    postId: InstagramPost["id"],
    text: InstagramComment["text"]
  ) => void;
}

export const useInstagramStore = create<InstagramState>()(
  devtools((set) => ({
    currentUser: fetchCurrentUser(),
    stories: fetchInstagramStories(),
    posts: fetchInstagramPosts(),

    toggleLike: (postId: InstagramPost["id"]) => {
      set((state) => ({
        ...state,
        posts: state.posts?.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            };
          } else {
            return post;
          }
        }),
      }));
    },

    toggleSave: (postId: InstagramPost["id"]) => {
      set((state) => ({
        ...state,
        posts: state.posts?.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              saved: !post.saved,
            };
          } else {
            return post;
          }
        }),
      }));
    },

    addComment: (postId: InstagramPost["id"], text: string) => {
      set((state) => {
        if (!state.currentUser) {
          throw new Error("User not logged in");
        }
        const comment: InstagramComment = {
          id: faker.datatype.uuid(),
          text,
          createdAt: new Date(),
          user: state.currentUser,
        };
        return {
          ...state,
          posts: state.posts?.map((post) =>
            post.id === postId
              ? { ...post, comments: [comment, ...post.comments] }
              : post
          ),
        };
      });
    },
  }))
);

import { faker } from "@faker-js/faker";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { Comment, Post, User } from "~/services";

interface FacebookState {
  currentUser: User | null;
  posts: Post[] | [];
  populate: (currentUser: User, posts: Post[]) => void;
  addPost: (text: Post["text"]) => void;
  toggleLike: (postId: Post["id"]) => void;
  addComment: (postId: Post["id"], text: Comment["text"]) => void;
}

export const useFacebookStore = create<FacebookState>()(
  devtools(
    persist((set) => ({
      currentUser: null,
      posts: [],

      populate: (currentUser: User, posts: Post[]) => {
        set((state) => ({ ...state, currentUser, posts }));
      },

      addPost: (text: Post["text"]) => {
        set((state) => {
          if (!state.currentUser) {
            throw new Error("User not logged in");
          }
          const post = {
            id: faker.datatype.uuid(),
            user: state.currentUser,
            postedOn: new Date(),
            text,
            likes: 0,
            liked: false,
            comments: [],
          };
          return { ...state, posts: [post, ...state.posts] };
        });
      },

      toggleLike: (postId: Post["id"]) => {
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

      addComment: (postId: Post["id"], text: string) => {
        set((state) => {
          if (!state.currentUser) {
            throw new Error("User not logged in");
          }
          const comment: Comment = {
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
  )
);

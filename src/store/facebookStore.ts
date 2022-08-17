import { faker } from "@faker-js/faker";
import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  FacebookComment,
  fetchUser,
  fetchFacebookMessages,
  fetchFacebookNotifications,
  fetchFacebookPosts,
  fetchUsers,
  FacebookMessage,
  FacebookNotification,
  FacebookPost,
  User,
} from "~/services";

interface FacebookState {
  currentUser: User | null;
  posts: FacebookPost[] | [];
  onlineUsers: User[] | [];
  messages: FacebookMessage[] | [];
  notifications: FacebookNotification[] | [];

  addPost: (text: FacebookPost["text"]) => void;
  toggleLike: (postId: FacebookPost["id"]) => void;
  addComment: (
    postId: FacebookPost["id"],
    text: FacebookComment["text"]
  ) => void;
}

export const useFacebookStore = create<FacebookState>()(
  devtools((set) => ({
    currentUser: fetchUser(),
    posts: fetchFacebookPosts(),
    onlineUsers: fetchUsers(),
    messages: fetchFacebookMessages(),
    notifications: fetchFacebookNotifications(),

    addPost: (text: FacebookPost["text"]) => {
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

    toggleLike: (postId: FacebookPost["id"]) => {
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

    addComment: (postId: FacebookPost["id"], text: string) => {
      set((state) => {
        if (!state.currentUser) {
          throw new Error("User not logged in");
        }
        const comment: FacebookComment = {
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

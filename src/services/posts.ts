import { faker } from "@faker-js/faker";

import { User } from "./session";

export function fetchFacebookPosts(limit?: number) {
  const posts: Post[] = [...Array(limit || 25)].map((_) => {
    return {
      id: faker.datatype.uuid(),
      user: {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        name: faker.name.fullName(),
        avatar: faker.internet.avatar(),
      },
      postedOn: faker.date.past(),
      text: faker.lorem.paragraphs(),
      likes: faker.datatype.number(100),
      liked: faker.datatype.boolean(),
      comments: [...Array(Math.floor(Math.random() * 10))].map((__) => {
        return {
          id: faker.datatype.uuid(),
          text: faker.lorem.lines(),
          createdAt: faker.date.past(),
          user: {
            id: faker.datatype.uuid(),
            username: faker.internet.userName(),
            name: faker.name.fullName(),
            avatar: faker.internet.avatar(),
          },
        };
      }),
    };
  });

  return posts;
}

export function fetchInstagramPosts(limit?: number) {
  const posts: InstagramPost[] = fetchFacebookPosts(limit).map((post) => {
    return {
      ...post,
      image: faker.image.image(),
    };
  });

  return posts;
}

export interface Comment {
  id: string;
  text: string;
  createdAt: Date;
  user: User;
}

export interface Post {
  id: string;
  user: User;
  postedOn: Date;
  text: string;
  likes: number;
  liked: boolean;
  comments: Comment[] | [];
}

export interface InstagramPost extends Post {
  image: string;
}

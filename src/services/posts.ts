import { faker } from "@faker-js/faker";

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
      content: faker.lorem.paragraphs(),
      likes: faker.datatype.number(100),
      liked: faker.datatype.boolean(),
      comments: [...Array(Math.floor(Math.random() * 10))].map((__) => {
        return {
          id: faker.datatype.uuid(),
          content: faker.lorem.lines(),
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

export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  user: User;
}

export interface Post {
  id: string;
  user: User;
  postedOn: Date;
  content: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
}

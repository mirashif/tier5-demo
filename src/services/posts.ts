import { faker } from "@faker-js/faker";

export function fetchPosts() {
  const posts = [...Array(50)].map((_) => {
    return {
      id: faker.datatype.uuid(),
      user: {
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

export type Posts = ReturnType<typeof fetchPosts>;

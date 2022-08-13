import { faker } from "@faker-js/faker";

export function fetchPosts() {
  const posts = [...Array(50)].map((_) => {
    return {
      id: faker.datatype.uuid(),
      user: {
        username: faker.internet.userName(),
        name: faker.name.fullName(),
        profile_picture: faker.internet.avatar(),
      },
      posted_on: faker.date.past(),
      content: faker.lorem.paragraphs(),
      likes: faker.datatype.number(100),
      liked: faker.datatype.boolean(),
      comments: [...Array(Math.floor(Math.random() * 10))].map((_) => {
        return {
          content: faker.lorem.lines(),
          created_at: faker.date.past(),
          user: {
            username: faker.internet.userName(),
            name: faker.name.fullName(),
            profile_picture: faker.internet.avatar(),
          },
        };
      }),
    };
  });

  return posts;
}

export type Post = ReturnType<typeof fetchPosts>;

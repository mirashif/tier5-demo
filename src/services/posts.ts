import { faker } from "@faker-js/faker";

export type FacebookPost = ReturnType<typeof fetchFacebookPosts>[0];
export type FacebookComment = ReturnType<
  typeof fetchFacebookPosts
>[0]["comments"][0];
export type InstagramPost = ReturnType<typeof fetchInstagramPosts>[0];
export type InstagramComment = ReturnType<
  typeof fetchInstagramPosts
>[0]["comments"][0];

export function fetchFacebookPosts(limit?: number) {
  const posts = [
    ...Array(
      limit ||
        faker.datatype.number({
          min: 15,
          max: 20,
        })
    ),
  ].map((_) => {
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
      comments: [
        ...Array(
          faker.datatype.number({
            min: 1,
            max: 10,
          })
        ),
      ].map((__) => {
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
  const posts = fetchFacebookPosts(limit).map((post) => {
    return {
      ...post,
      imageUrl: faker.image.imageUrl(470, 585, "random", true),
      text: faker.lorem.lines(),
      comments: [
        ...Array(
          faker.datatype.number({
            min: 1,
            max: 5,
          })
        ),
      ].map((__) => {
        return {
          id: faker.datatype.uuid(),
          text: faker.lorem.lines(
            faker.datatype.number({
              min: 1,
              max: 3,
            })
          ),
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

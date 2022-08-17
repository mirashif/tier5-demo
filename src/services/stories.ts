import { faker } from "@faker-js/faker";

export type InstagramStory = ReturnType<typeof fetchInstagramStories>[0];

export function fetchInstagramStories() {
  return [
    ...Array(
      faker.datatype.number({
        min: 10,
        max: 30,
      })
    ),
  ].map((_) => {
    return {
      id: faker.datatype.uuid(),
      user: {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        name: faker.name.fullName(),
        avatarUrl: faker.internet.avatar(),
      },
      imageUrl: faker.image.imageUrl(),
    };
  });
}

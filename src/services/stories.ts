import { faker } from "@faker-js/faker";

import { User } from "./session";

export function fetchInstagramStories(): Story[] {
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
        avatar: faker.internet.avatar(),
      },
      imageUrl: faker.image.imageUrl(),
    };
  });
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
}

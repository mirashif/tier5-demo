import { faker } from "@faker-js/faker";

export function fetchCurrentUser() {
  return {
    username: faker.internet.userName(),
    name: faker.name.fullName(),
    profile_picture: faker.internet.avatar(),
  };
}

export type CurrentUser = ReturnType<typeof fetchCurrentUser>;
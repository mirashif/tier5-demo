import { faker } from "@faker-js/faker";

export function fetchCurrentUser() {
  return {
    username: faker.internet.userName(),
    name: faker.name.fullName(),
    avatar: faker.internet.avatar(),
  };
}

export type CurrentUser = ReturnType<typeof fetchCurrentUser>;

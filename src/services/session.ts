import { faker } from "@faker-js/faker";

import { User } from "./posts";

export function fetchCurrentUser(): User {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    name: faker.name.fullName(),
    avatar: faker.internet.avatar(),
  };
}

export function fetchOnlineUsers(): User[] {
  return [...Array(Math.floor(Math.random() * 20))].map((_) => {
    return {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      name: faker.name.fullName(),
      avatar: faker.internet.avatar(),
    };
  });
}

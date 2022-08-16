import { faker } from "@faker-js/faker";

export function fetchCurrentUser(): User {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    name: faker.name.fullName(),
    avatar: faker.internet.avatar(),
  };
}

export function fetchOnlineUsers(): User[] {
  return [...Array(Math.floor(Math.random() * 25))].map((_) => {
    return {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      name: faker.name.fullName(),
      avatar: faker.internet.avatar(),
    };
  });
}

export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

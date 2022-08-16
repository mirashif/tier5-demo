import { faker } from "@faker-js/faker";

export type User = ReturnType<typeof fetchCurrentUser>;

export function fetchCurrentUser() {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    name: faker.name.fullName(),
    avatar: faker.internet.avatar(),
  };
}

export function fetchOnlineUsers() {
  return [
    ...Array(
      faker.datatype.number({
        min: 15,
        max: 30,
      })
    ),
  ].map((_) => {
    return {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      name: faker.name.fullName(),
      avatar: faker.internet.avatar(),
    };
  });
}

import { faker } from "@faker-js/faker";

export type User = ReturnType<typeof fetchUser>;

export function fetchUser() {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    name: faker.name.fullName(),
    avatarUrl: faker.internet.avatar(),
  };
}

export function fetchUsers(min?: number, max?: number) {
  return [
    ...Array(
      faker.datatype.number({
        min: min ?? 15,
        max: max ?? 30,
      })
    ),
  ].map((_) => fetchUser());
}

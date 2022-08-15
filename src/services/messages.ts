import { faker } from "@faker-js/faker";

export const fetchFacebookMessages = () => {
  const messages = [...Array(10)].map((_) => {
    return {
      id: faker.datatype.uuid(),
      user: {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        name: faker.name.fullName(),
        avatar: faker.internet.avatar(),
      },
      postedOn: faker.datatype.number({ max: 59, min: 0 }),
      text: faker.lorem.paragraphs(),
    };
  });

  return messages.sort((a, b) => a.postedOn - b.postedOn);
};

export type Message = ReturnType<typeof fetchFacebookMessages>[0];

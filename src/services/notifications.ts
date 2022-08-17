import { faker } from "@faker-js/faker";

export type FacebookNotification = ReturnType<
  typeof fetchFacebookNotifications
>[0];

export const fetchFacebookNotifications = () => {
  const notifications = [
    ...Array(
      Math.floor(
        faker.datatype.number({
          min: 15,
          max: 20,
        })
      )
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
      postedOn: faker.datatype.number({ max: 59, min: 1 }),
      text: faker.lorem.paragraphs(),
    };
  });

  return notifications.sort((a, b) => a.postedOn - b.postedOn);
};

import { faker } from '@faker-js/faker';

const userCreator = () => ({
    name: faker.person.firstName(),
    email: faker.internet.email(),
    id: faker.string.uuid(),
});

const users = Array.from({ length: 7 }, () => userCreator());

const articleCreator = () => ({
    title: faker.lorem.words(5),
    slug: faker.lorem.slug(),
    content: faker.lorem.paragraphs(),
    author: faker.helpers.arrayElement(users),
});

const articles = Array.from({ length: 7 }, () => articleCreator());

export { articles, users };

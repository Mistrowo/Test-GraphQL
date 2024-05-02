// utils/graphql.js

import { gql, GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:4000/graphql', { headers: {} });

const usersQuery = gql`
query users {
    users {
        id
        name
        email
        articles {
            title
            slug
        }
    }
}
`;

const articlesQuery = gql`
query articles {
    articles {
        title
        author {
            name
        }
        slug
    }
}
`;

async function requestUsers() {
    try {
        const data = await client.request(usersQuery);
        return data.users;
    } catch (e) {
        console.error(e);
        return [];
    }
}

async function requestArticles() {
    try {
        const data = await client.request(articlesQuery);
        return data.articles;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export { requestUsers, requestArticles };

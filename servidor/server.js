import { articles, users } from './data.js'; // Datos falsos
import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

const resolvers = {
    Query: {
        users: () => users.map(u => ({
            ...u,
            articles: articles.filter(a => a.author.id === u.id),
        })),
        user: (obj, args) => {
            const user = users.find(u => u.id === args.id);
            return user ? {
                ...user,
                articles: articles.filter(a => a.author.id === user.id),
            } : null;
        },
        articles: () => articles,
    },
};

const typeDefs = loadSchemaSync('./graphql/index.graphql', {
    loaders: [new GraphQLFileLoader()],
});

const schema = addResolversToSchema({
    schema: typeDefs,
    resolvers,
});

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => console.log('Tu servidor GraphQL está corriendo en http://localhost:4000/graphql'));

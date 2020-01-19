import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import validationRules from './rules';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    validationRules
});

export default server;

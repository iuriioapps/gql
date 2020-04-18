import { IResolvers } from 'graphql-tools';

export default {
    Query: {
        message: (source, args, context) => {
            return 'Hi there!';
        }
    }
} as IResolvers;

import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        message: (source, args, context) => {
            return 'Hi there!';
        }
    }
};

// noinspection JSUnusedGlobalSymbols
export default resolverMap;

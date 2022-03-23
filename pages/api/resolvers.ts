import {ApolloServer} from 'apollo-server-micro';
import { context } from '../../utils/api/context';


export const resolvers = {
    Query: {
        hello: (parent, args, context) => 'hi!'
    }
}





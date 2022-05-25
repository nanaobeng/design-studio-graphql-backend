"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogType = void 0;
const graphql_1 = require("graphql");
exports.BlogType = new graphql_1.GraphQLObjectType({
    name: "Blog",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        author: { type: graphql_1.GraphQLString },
        body: { type: graphql_1.GraphQLString },
        category: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        user_id: { type: graphql_1.GraphQLInt },
        thumbnail: { type: graphql_1.GraphQLString },
    }),
});

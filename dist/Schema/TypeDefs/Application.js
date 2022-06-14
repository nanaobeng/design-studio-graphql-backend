"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationType = void 0;
const graphql_1 = require("graphql");
exports.ApplicationType = new graphql_1.GraphQLObjectType({
    name: "Application",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        job_id: { type: graphql_1.GraphQLInt },
        fullname: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        job: { type: graphql_1.GraphQLString },
        cv: { type: graphql_1.GraphQLString },
        comments: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString }
    }),
});

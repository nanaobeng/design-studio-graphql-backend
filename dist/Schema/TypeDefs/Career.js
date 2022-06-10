"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerType = void 0;
const graphql_1 = require("graphql");
exports.CareerType = new graphql_1.GraphQLObjectType({
    name: "Career",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        body: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString }
    }),
});

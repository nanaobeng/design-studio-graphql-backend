
   
import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    resetLink: { type: GraphQLString },
  }),
});
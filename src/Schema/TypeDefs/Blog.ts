
   
import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const BlogType = new GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    body: { type: GraphQLString },
    category: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    thumbnail: { type: GraphQLString },
  }),
});
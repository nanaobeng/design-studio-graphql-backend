
   
import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CareerType = new GraphQLObjectType({
  name: "Career",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    status : { type: GraphQLString }
  }),
});
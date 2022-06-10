
   
import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const ApplicationType = new GraphQLObjectType({
  name: "Application",
  fields: () => ({
    id: { type: GraphQLID },
    job_id: { type: GraphQLInt },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    job: { type: GraphQLString },
    cv: { type: GraphQLString },
    comments: { type: GraphQLString },
    status : { type: GraphQLString }
  }),
});
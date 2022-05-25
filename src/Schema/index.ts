import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS , GET_USER ,SIGN_IN} from "./Queries/User";
import { CREATE_USER } from "./Mutations/User";
import { CREATE_BLOG , UPDATE_BLOG ,DELETE_BLOG } from "./Mutations/Blog";
import {GET_ALL_BLOGS ,GET_BLOG} from "./Queries/Blog"


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    signInUser : SIGN_IN,
    getAllBlogs : GET_ALL_BLOGS,
    getBlog: GET_BLOG,
    
    
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    createBlog: CREATE_BLOG,
    deleteBlog: DELETE_BLOG,
    updateBlog: UPDATE_BLOG,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
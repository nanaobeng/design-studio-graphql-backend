import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS , GET_USER ,SIGN_IN} from "./Queries/User";
import { CREATE_USER } from "./Mutations/User";
import { CREATE_BLOG , UPDATE_BLOG ,DELETE_BLOG } from "./Mutations/Blog";
import {GET_ALL_BLOGS ,GET_BLOG} from "./Queries/Blog"
import {GET_ALL_JOBS , GET_JOB} from "./Queries/Career"
import {CREATE_JOB ,UPDATE_JOB ,DELETE_JOB_POSTING} from "./Mutations/Career"


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    signInUser : SIGN_IN,
    getAllBlogs : GET_ALL_BLOGS,
    getBlog: GET_BLOG,
    getJobPostings : GET_ALL_JOBS,
    getJob : GET_JOB,
    
    
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    createBlog: CREATE_BLOG,
    deleteBlog: DELETE_BLOG,
    updateBlog: UPDATE_BLOG,
    createJob : CREATE_JOB,
    updateJob : UPDATE_JOB,
    deleteJob: DELETE_JOB_POSTING,

  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
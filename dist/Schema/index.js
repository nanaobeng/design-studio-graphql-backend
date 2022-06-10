"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_1 = require("./Queries/User");
const User_2 = require("./Mutations/User");
const Blog_1 = require("./Mutations/Blog");
const Blog_2 = require("./Queries/Blog");
const Career_1 = require("./Queries/Career");
const Career_2 = require("./Mutations/Career");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: User_1.GET_ALL_USERS,
        getUser: User_1.GET_USER,
        signInUser: User_1.SIGN_IN,
        getAllBlogs: Blog_2.GET_ALL_BLOGS,
        getBlog: Blog_2.GET_BLOG,
        getJobPostings: Career_1.GET_ALL_JOBS,
        getJob: Career_1.GET_JOB,
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: User_2.CREATE_USER,
        createBlog: Blog_1.CREATE_BLOG,
        deleteBlog: Blog_1.DELETE_BLOG,
        updateBlog: Blog_1.UPDATE_BLOG,
        createJob: Career_2.CREATE_JOB,
        updateJob: Career_2.UPDATE_JOB,
        deleteJob: Career_2.DELETE_JOB_POSTING,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});

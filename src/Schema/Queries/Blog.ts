import { GraphQLList ,GraphQLID, GraphQLString, GraphQLInt } from "graphql";
import { BlogType } from "../TypeDefs/Blog";
import { Blog } from "../../Entities/Blog";
import { MessageType } from "../TypeDefs/Messages"

const jwt = require('jsonwebtoken');
const jwtGenerator = require("../../utils/jwtGenerator");

export const GET_ALL_BLOGS = {
  type: new GraphQLList(BlogType),
  resolve() {
    return Blog.find();
  },
};


export const GET_BLOG = {
    type: BlogType,
    args: {
      id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const {id} = args;
      
        const res = await Blog.findOne({ where: {
            id: id
          }})

        return res
  
      
    },
  };


  
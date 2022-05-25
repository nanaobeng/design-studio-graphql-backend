import { GraphQLList ,GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/User";
import { MessageType } from "../TypeDefs/Messages"
import { response } from "express";
const jwt = require('jsonwebtoken');
const jwtGenerator = require("../../utils/jwtGenerator");

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};


export const GET_USER = {
    type: UserType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const {id} = args;
      
        const res = await Users.findOne({ where: {
            id: id
          }})

        return res
  
      
    },
  };


  export const SIGN_IN = {
    type: MessageType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any ) {
        const {email , password} = args;
      
        const res = await Users.findOne({ where: {
            email: email,
            password : password
          }})

      if (res == null){

        return { successful: false, message: "Invalid Credentials" };

      }
      else{
        const token = jwt.sign({user_id: res.id , email:res.email}, 'temptestjwt')
      
        return { successful: true, message:token };
      }

      
  
      
    },
  };
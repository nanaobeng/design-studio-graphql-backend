
   
import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    resetLink: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { firstname, lastname,email,dateCreated,resetToken,password } = args;
    await Users.insert({firstname,lastname,email,dateCreated,resetToken,password });
    return args;
  },
};


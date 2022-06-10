
   
import { GraphQLID, GraphQLString ,GraphQLInt} from "graphql";
import { CareerType } from "../TypeDefs/Career";
import { MessageType } from "../TypeDefs/Messages";
import { Career } from "../../Entities/Career";

export const CREATE_JOB = {
  type: CareerType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    status : { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { title , body , timestamp , status } = args;
    await Career.insert({ title , body , timestamp , status});
    return args;
  },
};

export const UPDATE_JOB = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    status : { type: GraphQLString }
   
  },
  async resolve(parent: any, args: any) {
    const {id , title , body , timestamp , status } = args;
    const blog = await Career.findOne({ where: {
      id: id
    } });

    if (!blog) {
      throw new Error("JOB POSTING DOESNT EXIST");
    }
   

    
      await Career.update({ id: id }, { title: title, body:body, status:status,timestamp : timestamp });

      return { successful: true, message: "JOB POSTING UPDATED" };
    
  },
};

export const DELETE_JOB_POSTING = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Career.delete(id);

    return { successful: true, message: "Career DELETED" };
  },
};


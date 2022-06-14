
   
import { GraphQLID, GraphQLString ,GraphQLInt} from "graphql";
import { ApplicationType } from "../TypeDefs/Application";
import { MessageType } from "../TypeDefs/Messages";
import { Application } from "../../Entities/Application";

export const SUBMIT_APPLICATION = {
  type: ApplicationType,
  args: {
    id: { type: GraphQLID },
    job_id: { type: GraphQLInt },
    fullname: { type: GraphQLString },
    email: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    job: { type: GraphQLString },
    cv: { type: GraphQLString },
    comments: { type: GraphQLString },
    status : { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { job_id , fullname , email , timestamp , job , cv , comments , status} = args;
    await Application.insert({ job_id , fullname , email , timestamp , job , cv , comments , status });
    return args;
  },
};

export const UPDATE_APPLICATION = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    status : { type: GraphQLString }
   
  },
  async resolve(parent: any, args: any) {
    const {id, status } = args;
    const blog = await Application.findOne({ where: {
      id: id
    } });

    if (!blog) {
      throw new Error("APPLICATION  DOESNT EXIST");
    }
   

    
      await Application.update({ id: id }, { status: status });

      return { successful: true, message: "JOB POSTING UPDATED" };
    
  },
};


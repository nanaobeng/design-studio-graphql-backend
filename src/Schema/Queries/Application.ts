import { GraphQLList ,GraphQLID, GraphQLString, GraphQLInt } from "graphql";
import { ApplicationType } from "../TypeDefs/Application";
import { Application } from "../../Entities/Application";
import { MessageType } from "../TypeDefs/Messages"



export const GET_ALL_APPLICATIONS = {
  type: new GraphQLList(ApplicationType),
  resolve() {
    return Application.find();
  },
};


export const GET_APPLICATION = {
    type: ApplicationType,
    args: {
      id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const {id} = args;
      
        const res = await Application.findOne({ where: {
            job_id: id
          }})

        return res
  
      
    },
  };


  export const GET_APPLICATION_BY_JOB_ID = {
    type: new GraphQLList(ApplicationType),
    args: {
      job_id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const {job_id} = args;
      
        const res = await Application.find({ where: {
            job_id: job_id
          }})

        return res
  
      
    },
  };


  export const PENDING_APPLICATIONS = {
    type: MessageType,
  
    async resolve() {
        
      
        const res = await Application.find({ where: {
            status: 'Submitted'
          }})

          return { successful: true, message: res.length || 0 };
  
      
    },
  };


  
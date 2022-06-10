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


  
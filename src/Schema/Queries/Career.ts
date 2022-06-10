import { GraphQLList ,GraphQLID, GraphQLString, GraphQLInt } from "graphql";
import { CareerType } from "../TypeDefs/Career";
import { Career } from "../../Entities/Career";
import { MessageType } from "../TypeDefs/Messages"



export const GET_ALL_JOBS= {
  type: new GraphQLList(CareerType),
  resolve() {
    return Career.find();
  },
};


export const GET_JOB = {
    type: CareerType,
    args: {
      id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const {id} = args;
      
        const res = await Career.findOne({ where: {
            id: id
          }})

        return res
  
      
    },
  };


  

   
import { GraphQLID, GraphQLString ,GraphQLInt} from "graphql";
import { BlogType } from "../TypeDefs/Blog";
import { MessageType } from "../TypeDefs/Messages";
import { Blog } from "../../Entities/Blog";

export const CREATE_BLOG = {
  type: BlogType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    body: { type: GraphQLString },
    category: { type: GraphQLString },
    timestamp: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    thumbnail: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { title,author,body,category,timestamp,user_id,thumbnail } = args;
    await Blog.insert({title,author,body,category,timestamp,user_id,thumbnail });
    return args;
  },
};

export const UPDATE_BLOG = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    category: { type: GraphQLString},
    timestamp: { type: GraphQLString},
    body: { type: GraphQLString},
   
  },
  async resolve(parent: any, args: any) {
    const { id , title , body , category, timestamp} = args;
    const blog = await Blog.findOne({ where: {
      id: id
    } });

    if (!blog) {
      throw new Error("BLOG DOESNT EXIST");
    }
   

    
      await Blog.update({ id: id }, { title: title, body:body, category:category,timestamp : timestamp });

      return { successful: true, message: "BLOG UPDATED" };
    
  },
};

export const DELETE_BLOG = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Blog.delete(id);

    return { successful: true, message: "BLOG DELETED" };
  },
};


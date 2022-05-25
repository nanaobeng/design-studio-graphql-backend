"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_BLOG = exports.UPDATE_BLOG = exports.CREATE_BLOG = void 0;
const graphql_1 = require("graphql");
const Blog_1 = require("../TypeDefs/Blog");
const Messages_1 = require("../TypeDefs/Messages");
const Blog_2 = require("../../Entities/Blog");
exports.CREATE_BLOG = {
    type: Blog_1.BlogType,
    args: {
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        author: { type: graphql_1.GraphQLString },
        body: { type: graphql_1.GraphQLString },
        category: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        user_id: { type: graphql_1.GraphQLInt },
        thumbnail: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, body, category, timestamp, user_id, thumbnail } = args;
            yield Blog_2.Blog.insert({ title, author, body, category, timestamp, user_id, thumbnail });
            return args;
        });
    },
};
exports.UPDATE_BLOG = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        category: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        body: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, body, category, timestamp } = args;
            const blog = yield Blog_2.Blog.findOne({ where: {
                    id: id
                } });
            if (!blog) {
                throw new Error("BLOG DOESNT EXIST");
            }
            yield Blog_2.Blog.update({ id: id }, { title: title, body: body, category: category, timestamp: timestamp });
            return { successful: true, message: "BLOG UPDATED" };
        });
    },
};
exports.DELETE_BLOG = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = args.id;
            yield Blog_2.Blog.delete(id);
            return { successful: true, message: "BLOG DELETED" };
        });
    },
};

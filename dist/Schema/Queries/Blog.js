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
exports.GET_BLOG = exports.GET_ALL_BLOGS = void 0;
const graphql_1 = require("graphql");
const Blog_1 = require("../TypeDefs/Blog");
const Blog_2 = require("../../Entities/Blog");
const jwt = require('jsonwebtoken');
const jwtGenerator = require("../../utils/jwtGenerator");
exports.GET_ALL_BLOGS = {
    type: new graphql_1.GraphQLList(Blog_1.BlogType),
    resolve() {
        return Blog_2.Blog.find();
    },
};
exports.GET_BLOG = {
    type: Blog_1.BlogType,
    args: {
        id: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const res = yield Blog_2.Blog.findOne({ where: {
                    id: id
                } });
            return res;
        });
    },
};

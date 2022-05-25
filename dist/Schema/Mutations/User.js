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
exports.CREATE_USER = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const User_2 = require("../../Entities/User");
exports.CREATE_USER = {
    type: User_1.UserType,
    args: {
        id: { type: graphql_1.GraphQLID },
        firstname: { type: graphql_1.GraphQLString },
        lastname: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        dateCreated: { type: graphql_1.GraphQLString },
        resetLink: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, email, dateCreated, resetToken, password } = args;
            yield User_2.Users.insert({ firstname, lastname, email, dateCreated, resetToken, password });
            return args;
        });
    },
};

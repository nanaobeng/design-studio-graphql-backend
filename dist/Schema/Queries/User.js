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
exports.SIGN_IN = exports.GET_USER = exports.GET_ALL_USERS = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const User_2 = require("../../Entities/User");
const Messages_1 = require("../TypeDefs/Messages");
const jwt = require('jsonwebtoken');
const jwtGenerator = require("../../utils/jwtGenerator");
exports.GET_ALL_USERS = {
    type: new graphql_1.GraphQLList(User_1.UserType),
    resolve() {
        return User_2.Users.find();
    },
};
exports.GET_USER = {
    type: User_1.UserType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const res = yield User_2.Users.findOne({ where: {
                    id: id
                } });
            return res;
        });
    },
};
exports.SIGN_IN = {
    type: Messages_1.MessageType,
    args: {
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = args;
            const res = yield User_2.Users.findOne({ where: {
                    email: email,
                    password: password
                } });
            if (res == null) {
                return { successful: false, message: "Invalid Credentials" };
            }
            else {
                const token = jwt.sign({ user_id: res.id, email: res.email }, 'temptestjwt');
                return { successful: true, message: token };
            }
        });
    },
};

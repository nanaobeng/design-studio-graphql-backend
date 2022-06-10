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
exports.DELETE_JOB_POSTING = exports.UPDATE_JOB = exports.CREATE_JOB = void 0;
const graphql_1 = require("graphql");
const Career_1 = require("../TypeDefs/Career");
const Messages_1 = require("../TypeDefs/Messages");
const Career_2 = require("../../Entities/Career");
exports.CREATE_JOB = {
    type: Career_1.CareerType,
    args: {
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        body: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, body, timestamp, status } = args;
            yield Career_2.Career.insert({ title, body, timestamp, status });
            return args;
        });
    },
};
exports.UPDATE_JOB = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        body: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, body, timestamp, status } = args;
            const blog = yield Career_2.Career.findOne({ where: {
                    id: id
                } });
            if (!blog) {
                throw new Error("JOB POSTING DOESNT EXIST");
            }
            yield Career_2.Career.update({ id: id }, { title: title, body: body, status: status, timestamp: timestamp });
            return { successful: true, message: "JOB POSTING UPDATED" };
        });
    },
};
exports.DELETE_JOB_POSTING = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = args.id;
            yield Career_2.Career.delete(id);
            return { successful: true, message: "Career DELETED" };
        });
    },
};

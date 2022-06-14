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
exports.UPDATE_APPLICATION = exports.SUBMIT_APPLICATION = void 0;
const graphql_1 = require("graphql");
const Application_1 = require("../TypeDefs/Application");
const Messages_1 = require("../TypeDefs/Messages");
const Application_2 = require("../../Entities/Application");
exports.SUBMIT_APPLICATION = {
    type: Application_1.ApplicationType,
    args: {
        id: { type: graphql_1.GraphQLID },
        job_id: { type: graphql_1.GraphQLInt },
        fullname: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        timestamp: { type: graphql_1.GraphQLString },
        job: { type: graphql_1.GraphQLString },
        cv: { type: graphql_1.GraphQLString },
        comments: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { job_id, fullname, email, timestamp, job, cv, comments, status } = args;
            yield Application_2.Application.insert({ job_id, fullname, email, timestamp, job, cv, comments, status });
            return args;
        });
    },
};
exports.UPDATE_APPLICATION = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        status: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, status } = args;
            const blog = yield Application_2.Application.findOne({ where: {
                    id: id
                } });
            if (!blog) {
                throw new Error("APPLICATION  DOESNT EXIST");
            }
            yield Application_2.Application.update({ id: id }, { status: status });
            return { successful: true, message: "JOB POSTING UPDATED" };
        });
    },
};

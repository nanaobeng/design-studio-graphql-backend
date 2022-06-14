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
exports.PENDING_APPLICATIONS = exports.GET_APPLICATION_BY_JOB_ID = exports.GET_APPLICATION = exports.GET_ALL_APPLICATIONS = void 0;
const graphql_1 = require("graphql");
const Application_1 = require("../TypeDefs/Application");
const Application_2 = require("../../Entities/Application");
const Messages_1 = require("../TypeDefs/Messages");
exports.GET_ALL_APPLICATIONS = {
    type: new graphql_1.GraphQLList(Application_1.ApplicationType),
    resolve() {
        return Application_2.Application.find();
    },
};
exports.GET_APPLICATION = {
    type: Application_1.ApplicationType,
    args: {
        id: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const res = yield Application_2.Application.findOne({ where: {
                    job_id: id
                } });
            return res;
        });
    },
};
exports.GET_APPLICATION_BY_JOB_ID = {
    type: new graphql_1.GraphQLList(Application_1.ApplicationType),
    args: {
        job_id: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { job_id } = args;
            const res = yield Application_2.Application.find({ where: {
                    job_id: job_id
                } });
            return res;
        });
    },
};
exports.PENDING_APPLICATIONS = {
    type: Messages_1.MessageType,
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield Application_2.Application.find({ where: {
                    status: 'Submitted'
                } });
            return { successful: true, message: res.length || 0 };
        });
    },
};

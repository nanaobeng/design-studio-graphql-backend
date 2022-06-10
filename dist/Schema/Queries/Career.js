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
exports.GET_JOB = exports.GET_ALL_JOBS = void 0;
const graphql_1 = require("graphql");
const Career_1 = require("../TypeDefs/Career");
const Career_2 = require("../../Entities/Career");
exports.GET_ALL_JOBS = {
    type: new graphql_1.GraphQLList(Career_1.CareerType),
    resolve() {
        return Career_2.Career.find();
    },
};
exports.GET_JOB = {
    type: Career_1.CareerType,
    args: {
        id: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const res = yield Career_2.Career.findOne({ where: {
                    id: id
                } });
            return res;
        });
    },
};

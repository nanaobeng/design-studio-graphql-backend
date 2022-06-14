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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const Schema_1 = require("./Schema");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const User_1 = require("./Entities/User");
const Blog_1 = require("./Entities/Blog");
const Career_1 = require("./Entities/Career");
const Application_1 = require("./Entities/Application");
require('dotenv').config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log();
    yield (0, typeorm_1.createConnection)({
        type: "postgres",
        host: process.env.HOST,
        database: process.env.DB_NAME,
        username: process.env.DB,
        password: process.env.DB_PASS,
        logging: false,
        synchronize: true,
        entities: [User_1.Users, Blog_1.Blog, Career_1.Career, Application_1.Application],
    });
    const app = (0, express_1.default)();
    const bodyParser = require('body-parser');
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true,
    }));
    // AWS ROUTES
    const resumeRoutes = require('./aws/routes/resume');
    app.use(resumeRoutes);
    app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
    app.use(/\/((?!graphql).)*/, bodyParser.json());
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`SERVER RUNNING ON PORT ${port}`);
    });
});
main().catch((err) => {
    console.log(err);
});

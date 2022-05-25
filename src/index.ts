import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/User";
import { Blog } from "./Entities/Blog";
require('dotenv').config();

const main = async () => {
  console.log()
  await createConnection({
    type: "postgres",
    host: process.env.HOST,
    database: process.env.DB_NAME,
    username: process.env.DB,
    password: process.env.DB_PASS,
    logging: false,
    synchronize: true,
    entities: [Users,Blog],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
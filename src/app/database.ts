import knex, { Knex } from "knex";
import config from "../config/config";

const createDbCon = () => {
  let connection: Knex<any, unknown[]> = knex({
    client: "pg",
    connection: {
      host: config.DB_HOST,
      port: parseInt(config.DB_PORT),
      user: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME,
    },
    pool: {
      min: 0,
      max: 10,
    },
  });

  console.log("Database connected");

  return connection;
};

export const db = createDbCon();
